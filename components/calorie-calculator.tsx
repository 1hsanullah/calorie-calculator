"use client"

declare global {
  interface Window {
    trackCalculatorMetrics?: any;
    trackConversion?: any;
    trackJourneyStep?: any;
  }
}

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format, addDays, parseISO } from "date-fns"
import { CalendarIcon, ClipboardList, Calculator, Flame, ActivitySquare, Utensils, Dumbbell, Scale } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import dynamic from "next/dynamic"

const CalorieResults = dynamic(() => import("@/components/calorie-results"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted/50 rounded-xl" />
})
import { CalculatorContainer } from "@/components/calculator/layouts/calculator-container"
import { LiveResultsPanelWrapper } from "@/components/calculator/layouts/results-panel-sticky"

const formSchema = z.object({
  age: z.coerce.number().min(15).max(100),
  gender: z.enum(["male", "female"]),
  weight: z.coerce.number().min(30).max(300),
  weightUnit: z.enum(["kg", "lbs"]),
  height: z.coerce.number().min(100).max(250),
  heightUnit: z.enum(["cm", "ft_in"]),
  heightFeet: z.coerce.number().min(1).max(8).optional(),
  heightInches: z.coerce.number().min(0).max(11).optional(),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very-active"]),
  goal: z.enum(["cut", "maintain", "bulk"]),
  targetWeight: z.union([z.coerce.number(), z.literal("")]).optional(),
  targetDate: z.date().optional(),
  weightChangeRate: z.coerce.number().min(0.1).max(2).optional(),
}).superRefine((data, ctx) => {
  if (data.goal !== "maintain") {
    const tWeight = Number(data.targetWeight);
    if (!data.targetWeight || isNaN(tWeight)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Target weight is required to ${data.goal}.`,
        path: ["targetWeight"]
      });
    } else if (data.goal === "cut" && tWeight >= data.weight) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Target weight must be less than current weight to lose weight.",
        path: ["targetWeight"]
      });
    } else if (data.goal === "bulk" && tWeight <= data.weight) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Target weight must be greater than current weight to gain weight.",
        path: ["targetWeight"]
      });
    }
  }
})

// Update the FormValues type to handle targetWeight correctly
type FormValues = z.infer<typeof formSchema>

// Update the ResultsType to include BMI and BMI category
type ResultsType = {
  bmr: number
  tdee: number
  targetCalories: number
  weightDifference: number
  daysToGoal: number
  targetDate: Date | string | null
  goalDirection: string
  bmi: number
  bmiCategory: {
    category: string
    color: string
  }
}

// Update the type to include initialGoal prop
type CalorieCalculatorProps = {
  initialGoal?: "cut" | "maintain" | "bulk"
}

// Update the component definition to accept the initialGoal prop
const CalorieCalculator = ({ initialGoal }: CalorieCalculatorProps = {}) => {
  const [results, setResults] = useState<ResultsType | null>(null)
  const [activeTab, setActiveTab] = useState<"date" | "rate">("date")

  // Default form values - use initialGoal if provided
  const defaultValues: Partial<FormValues> = {
    age: 30,
    gender: "male",
    weight: 70,
    weightUnit: "kg",
    height: 170,
    heightUnit: "cm",
    heightFeet: 5,
    heightInches: 7,
    activityLevel: "moderate",
    goal: initialGoal || "maintain",
    weightChangeRate: 0.5,
    targetWeight: 70,
  }

  // Initialize form with values from localStorage or defaults
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: defaultValues,
  })

  // Load saved form values from localStorage on component mount
  useEffect(() => {
    try {
      const savedValues = localStorage.getItem("calorieCalculatorFormValues")
      const savedResults = localStorage.getItem("calorieCalculatorResults")

      if (savedValues) {
        try {
          const parsedValues = JSON.parse(savedValues)

          // Handle date conversion from string back to Date object
          if (parsedValues.targetDate) {
            try {
              parsedValues.targetDate = parseISO(parsedValues.targetDate)
            } catch (e) {
              parsedValues.targetDate = undefined
            }
          }

          // Reset form with saved values
          form.reset(parsedValues)

          // If there are saved results, load them
          if (savedResults) {
            try {
              const parsedResults = JSON.parse(savedResults)

              // Handle date conversion for targetDate
              if (parsedResults.targetDate) {
                try {
                  parsedResults.targetDate = parseISO(parsedResults.targetDate)
                } catch (e) {
                  parsedResults.targetDate = null
                }
              }

              // Ensure results match the current form goal setting
              if ((parsedValues.goal === "maintain" && parsedResults.goalDirection !== "maintain") ||
                ((parsedValues.goal === "cut" || parsedValues.goal === "bulk") && parsedResults.goalDirection === "maintain")) {
                // Recalculate if goal and results don't match
                calculateCalories(parsedValues)
              } else {
                // Otherwise just set the results
                setResults(parsedResults)
              }
            } catch (error) {
              console.error("Error parsing saved results:", error)
              // If error loading results, recalculate
              calculateCalories(parsedValues)
              // Clear corrupted results
              localStorage.removeItem("calorieCalculatorResults")
            }
          } else if (form.formState.isValid) {
            // If no saved results but valid form, calculate
            calculateCalories(parsedValues)
          }
        } catch (error) {
          console.error("Error parsing saved form values:", error)
          // Clear corrupted form values
          localStorage.removeItem("calorieCalculatorFormValues")
          // Start with defaults
          form.reset(defaultValues)
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
      // Handle case where localStorage might be unavailable
      form.reset(defaultValues)
    }
  }, [form])

  // Save form values to localStorage when they change
  const watchAllFields = form.watch()
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value) {
        // Create a copy of the values to modify before saving
        const valuesToSave = { ...value } as any;

        // Convert Date object to ISO string for storage
        if (valuesToSave.targetDate instanceof Date) {
          valuesToSave.targetDate = valuesToSave.targetDate.toISOString()
        }

        localStorage.setItem("calorieCalculatorFormValues", JSON.stringify(valuesToSave))
      }
    })

    return () => subscription.unsubscribe()
  }, [form, form.watch])

  // Save results to localStorage when they change
  useEffect(() => {
    if (results) {
      try {
        // Create a copy of the results to modify before saving
        const resultsToSave = { ...results } as any;

        // Convert Date object to ISO string for storage
        if (resultsToSave.targetDate instanceof Date) {
          resultsToSave.targetDate = resultsToSave.targetDate.toISOString()
        }

        localStorage.setItem("calorieCalculatorResults", JSON.stringify(resultsToSave))
      } catch (error) {
        console.error("Error saving results to localStorage:", error)
        // Clear potentially corrupted results from storage
        localStorage.removeItem("calorieCalculatorResults")
      }
    }
  }, [results])

  const watchGoal = form.watch("goal")
  const watchWeight = form.watch("weight")
  const watchTargetWeight = form.watch("targetWeight")
  const watchWeightUnit = form.watch("weightUnit")
  const watchHeightUnit = form.watch("heightUnit")
  const watchHeightFeet = form.watch("heightFeet") || 5
  const watchHeightInches = form.watch("heightInches") || 0

  // Determine goal direction based on selected goal
  const getGoalDirection = () => {
    if (watchGoal === "cut") return "lose";
    if (watchGoal === "bulk") return "gain";
    return "maintain";
  }

  const goalDirection = getGoalDirection();

  // Add effect to load activeTab from localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem("calorieCalculatorActiveTab")
    if (savedTab) {
      setActiveTab(savedTab as "date" | "rate")
    }
  }, [])

  // Save activeTab to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("calorieCalculatorActiveTab", activeTab)
  }, [activeTab])

  // Real-time calculation effect removed to require Calculate Now button press

  function calculateCalories(data: FormValues) {
    try {
      const startTime = Date.now();

      // Track calculation started with enhanced metrics
      if (typeof window !== 'undefined' && window.gtag && window.trackCalculatorMetrics) {
        window.trackCalculatorMetrics.calculationStarted('calorie');

        // Track detailed user data
        window.gtag('event', 'calculator_used', {
          'calculator_type': 'calorie',
          'user_goal': data.goal,
          'activity_level': data.activityLevel,
          'gender': data.gender,
          'age_group': data.age < 25 ? 'young' : data.age < 45 ? 'adult' : 'mature',
          'weight_unit': data.weightUnit,
          'height_unit': data.heightUnit,
          'has_target_weight': !!data.targetWeight,
          'has_target_date': !!data.targetDate
        });
      }

      // Convert weight to kg if needed
      const weightInKg = data.weightUnit === "lbs" ? data.weight * 0.453592 : data.weight

      // Convert height to cm if needed
      let heightInCm = data.height
      if (data.heightUnit === "ft_in") {
        // Convert feet and inches to cm (1 foot = 30.48 cm, 1 inch = 2.54 cm)
        const feet = data.heightFeet || 0
        const inches = data.heightInches || 0
        heightInCm = (feet * 30.48) + (inches * 2.54)
      }

      // Calculate BMI
      const heightInMeters = heightInCm / 100
      const bmi = weightInKg / (heightInMeters * heightInMeters)
      const roundedBmi = Math.round(bmi * 10) / 10

      // Get BMI category
      const getBMICategory = (bmiValue: number) => {
        if (bmiValue < 18.5) return { category: "Underweight", color: "text-blue-500" }
        if (bmiValue < 25) return { category: "Normal weight", color: "text-green-500" }
        if (bmiValue < 30) return { category: "Overweight", color: "text-yellow-500" }
        if (bmiValue < 35) return { category: "Obesity (Class 1)", color: "text-orange-500" }
        if (bmiValue < 40) return { category: "Obesity (Class 2)", color: "text-red-500" }
        return { category: "Severe Obesity (Class 3)", color: "text-red-700" }
      }

      const bmiCategory = getBMICategory(roundedBmi)

      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr = 0
      if (data.gender === "male") {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * data.age + 5
      } else {
        bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * data.age - 161
      }

      // Apply activity multiplier
      const activityMultipliers = {
        sedentary: 1.2, // Little or no exercise
        light: 1.375, // Light exercise 1-3 days/week
        moderate: 1.55, // Moderate exercise 3-5 days/week
        active: 1.725, // Hard exercise 6-7 days/week
        "very-active": 1.9, // Very hard exercise & physical job
      }

      const tdee = bmr * activityMultipliers[data.activityLevel]

      let targetCalories = tdee
      let weightDifference = 0
      let daysToGoal = 0
      let targetDate: Date | null = null
      let goalDirection = "maintain"

      if ((data.goal === "cut" || data.goal === "bulk") && data.targetWeight) {
        // Calculate weight difference
        const targetWeightNum = parseFloat(data.targetWeight.toString())
        weightDifference = targetWeightNum - weightInKg

        // Determine if we're losing or gaining weight based on the difference
        const isLosing = weightDifference < 0;
        goalDirection = isLosing ? "lose" : "gain";

        try {
          // Calculate calorie adjustment and days to goal based on either target date or weekly rate
          if (data.targetDate) {
            // If target date is set, use that for calculation (ignore weekly rate)
            targetDate = data.targetDate instanceof Date ? data.targetDate : new Date(data.targetDate)
            const currentDate = new Date()
            const daysUntilTarget = Math.ceil((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))
            daysToGoal = Math.max(1, daysUntilTarget) // Minimum 1 day

            // Calculate daily calorie adjustment based on days until target
            const requiredDailyDeficit = (Math.abs(weightDifference) * 7700) / daysToGoal

            if (goalDirection === "lose") {
              targetCalories = tdee - requiredDailyDeficit
            } else if (goalDirection === "gain") {
              targetCalories = tdee + requiredDailyDeficit
            }
          } else if (data.weightChangeRate) {
            // If weekly rate is set, use that for calculation (target date is undefined)
            const dailyCalorieAdjustment = (data.weightChangeRate * 7700) / 7

            if (goalDirection === "lose") {
              targetCalories = tdee - dailyCalorieAdjustment
              // Calculate days to goal (if losing weight)
              if (weightDifference < 0) {
                daysToGoal = Math.abs(weightDifference) / (data.weightChangeRate / 7)
              }
            } else if (goalDirection === "gain") {
              targetCalories = tdee + dailyCalorieAdjustment
              // Calculate days to goal (if gaining weight)
              if (weightDifference > 0) {
                daysToGoal = weightDifference / (data.weightChangeRate / 7)
              }
            }

            // Calculate target date based on days to goal
            if (daysToGoal > 0) {
              try {
                targetDate = addDays(new Date(), Math.ceil(daysToGoal))
              } catch (error) {
                console.error("Error calculating target date:", error)
                targetDate = null
              }
            }
          }
        } catch (error) {
          console.error("Error in goal calculation:", error)
          // If there's an error in the calculation, default to maintenance values
          daysToGoal = 0
          targetDate = null
        }

        setResults({
          bmr: Math.round(bmr),
          tdee: Math.round(tdee),
          targetCalories: Math.round(targetCalories),
          weightDifference,
          daysToGoal: Math.ceil(daysToGoal),
          targetDate,
          goalDirection,
          bmi: roundedBmi,
          bmiCategory,
        } as ResultsType)
      } else if (data.goal === "maintain") {
        targetCalories = tdee

        // Explicitly clear target weight related data when in maintain mode
        form.setValue("targetWeight", "", { shouldValidate: false })

        setResults({
          bmr: Math.round(bmr),
          tdee: Math.round(tdee),
          targetCalories: Math.round(tdee),
          weightDifference: 0,
          daysToGoal: 0,
          targetDate: null,
          goalDirection: "maintain",
          bmi: roundedBmi,
          bmiCategory,
        } as ResultsType)
      }

      // Enhanced tracking for successful calculation
      if (typeof window !== 'undefined' && window.gtag && window.trackCalculatorMetrics) {
        const endTime = Date.now();
        const timeSpent = endTime - startTime;

        // Track calculation completion with detailed metrics
        window.trackCalculatorMetrics.calculationCompleted('calorie', timeSpent, goalDirection);

        // Track results viewed
        window.trackCalculatorMetrics.resultsViewed('calorie', Math.round(bmr), Math.round(tdee), Math.round(targetCalories));

        // Track as conversion
        window.trackConversion('calculator_completion', {
          calculator_type: 'calorie',
          goal_direction: goalDirection,
          bmi_category: bmiCategory.category,
          time_spent: timeSpent
        });

        // Track user journey step
        window.trackJourneyStep('calculation_completed', {
          calculator_type: 'calorie',
          goal_direction: goalDirection,
          bmr_result: Math.round(bmr),
          tdee_result: Math.round(tdee)
        });

        // Track detailed calculation results
        window.gtag('event', 'calculation_completed', {
          'calculator_type': 'calorie',
          'bmr_result': Math.round(bmr),
          'tdee_result': Math.round(tdee),
          'target_calories': Math.round(targetCalories),
          'goal_direction': goalDirection,
          'bmi_value': roundedBmi,
          'bmi_category': bmiCategory.category,
          'time_spent_ms': timeSpent,
          'weight_difference': Math.abs(weightDifference),
          'days_to_goal': Math.ceil(daysToGoal)
        });
      }

    } catch (error: any) {
      console.error("Error in calculation:", error);

      // Enhanced error tracking
      if (typeof window !== 'undefined' && window.gtag && window.trackCalculatorMetrics) {
        window.gtag('event', 'calculation_error', {
          'calculator_type': 'calorie',
          'error_type': 'calculation_failed',
          'error_message': error.message || 'Unknown error',
          'user_goal': data.goal,
          'activity_level': data.activityLevel
        });

        // Track form abandonment
        window.trackCalculatorMetrics.formAbandoned('calorie', 'calculation_error');
      }

      // Provide fallback results if there's an error
      setResults({
        bmr: 1500, // Fallback value
        tdee: 1800, // Fallback value
        targetCalories: 1800, // Fallback value
        weightDifference: 0,
        daysToGoal: 0,
        targetDate: null,
        goalDirection: "maintain",
        bmi: 0,
        bmiCategory: { category: "Not calculated", color: "text-muted-foreground" },
      } as ResultsType);
    }
  }

  // Watch for height unit changes to handle conversions
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "heightUnit") {
        const heightUnit = value.heightUnit;

        if (heightUnit === "ft_in" && form.getValues("heightFeet") === undefined) {
          // Convert from cm to feet and inches when switching to ft_in
          const heightInCm = form.getValues("height");
          const totalInches = heightInCm / 2.54;
          const feet = Math.floor(totalInches / 12);
          const inches = Math.round(totalInches % 12);

          // Set values with timeout to avoid validation issues
          setTimeout(() => {
            form.setValue("heightFeet", feet, { shouldValidate: true });
            form.setValue("heightInches", inches, { shouldValidate: true });
          }, 0);
        } else if (heightUnit === "cm" && form.getValues("height") === undefined) {
          // Convert from feet and inches to cm when switching to cm
          const feet = form.getValues("heightFeet") || 0;
          const inches = form.getValues("heightInches") || 0;
          const heightInCm = Math.round((feet * 30.48) + (inches * 2.54));

          setTimeout(() => {
            form.setValue("height", heightInCm, { shouldValidate: true });
          }, 0);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <CalculatorContainer className="px-0 py-0 max-w-none">
      <div className="flex-1 space-y-6">
        <Card className="h-fit">
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => {
                // Don't clear results here - that's causing the flicker

                try {
                  // Make sure we have consistent data for calculation based on active tab
                  let formValues = { ...form.getValues() };

                  if (activeTab === "date" && data.targetDate) {
                    // When using target date, keep the weekly rate undefined
                    formValues.weightChangeRate = undefined;
                  } else if (activeTab === "rate" && data.weightChangeRate) {
                    // When using weekly rate, keep the target date undefined
                    formValues.targetDate = undefined;
                  }

                  // Calculate directly without clearing results first
                  calculateCalories(formValues);

                  // Scroll to results to provide visual feedback for button click
                  setTimeout(() => {
                    const resultsElement = document.getElementById("calculator-results");
                    if (resultsElement) {
                      const yOffset = -80; // account for sticky header if any
                      const y = resultsElement.getBoundingClientRect().top + window.scrollY + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }, 100);
                } catch (error) {
                  console.error("Error preparing calculation:", error);
                  // Force a re-calculation with default values if there's an error
                  calculateCalories({ ...defaultValues, ...form.getValues() });
                }
              })} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="70" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="weightUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kg">kg</SelectItem>
                              <SelectItem value="lbs">lbs</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {watchHeightUnit === "cm" ? (
                      <div className="col-span-2">
                        <FormField
                          control={form.control}
                          name="height"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Height</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="170" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="heightFeet"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Feet</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="5"
                                    min={1}
                                    max={8}
                                    {...field}
                                    onChange={(e) => {
                                      const value = e.target.value === "" ? "" : Number(e.target.value);
                                      field.onChange(value);
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="heightInches"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Inches</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="7"
                                    min={0}
                                    max={11}
                                    {...field}
                                    onChange={(e) => {
                                      const value = e.target.value === "" ? "" : Number(e.target.value);
                                      field.onChange(value);
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </>
                    )}
                    <div className="col-span-1">
                      <FormField
                        control={form.control}
                        name="heightUnit"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Unit</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                if (value === "ft_in" && watchHeightUnit === "cm") {
                                  // Convert from cm to feet and inches
                                  const heightInCm = form.getValues("height") || 170;
                                  const totalInches = heightInCm / 2.54;
                                  const feet = Math.floor(totalInches / 12);
                                  const inches = Math.round(totalInches % 12);

                                  // Use setTimeout to avoid validation issues
                                  setTimeout(() => {
                                    form.setValue("heightFeet", feet || 5, { shouldValidate: true });
                                    form.setValue("heightInches", inches || 0, { shouldValidate: true });
                                  }, 0);
                                } else if (value === "cm" && watchHeightUnit === "ft_in") {
                                  // Convert from feet and inches to cm
                                  const feet = form.getValues("heightFeet") || 5;
                                  const inches = form.getValues("heightInches") || 0;
                                  const heightInCm = Math.round((feet * 30.48) + (inches * 2.54));

                                  // Use setTimeout to avoid validation issues
                                  setTimeout(() => {
                                    form.setValue("height", heightInCm || 170, { shouldValidate: true });
                                  }, 0);
                                }
                              }}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Unit" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cm">cm</SelectItem>
                                <SelectItem value="ft_in">ft/in</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="activityLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Activity Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select activity level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                            <SelectItem value="light">Lightly active (light exercise 1-3 days/week)</SelectItem>
                            <SelectItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</SelectItem>
                            <SelectItem value="active">Very active (hard exercise 6-7 days/week)</SelectItem>
                            <SelectItem value="very-active">Extra active (very hard exercise & physical job)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Goal</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => {
                              field.onChange(value);
                              // If changing to maintain, trigger calculation immediately
                              if (value === "maintain") {
                                const formValues = form.getValues();
                                formValues.targetWeight = ""
                                calculateCalories({ ...formValues, goal: "maintain" });
                              }
                            }}
                            value={field.value}
                            className="flex space-x-1"
                          >
                            <FormItem className="flex items-center space-x-1 space-y-0 flex-1">
                              <FormControl>
                                <RadioGroupItem value="cut" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Cut</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1 space-y-0 flex-1">
                              <FormControl>
                                <RadioGroupItem value="maintain" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Maintain</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1 space-y-0 flex-1">
                              <FormControl>
                                <RadioGroupItem value="bulk" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Bulk</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {(watchGoal === "cut" || watchGoal === "bulk") && (
                    <>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <FormField
                            control={form.control}
                            name="targetWeight"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Target Weight</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder={goalDirection === "lose" ? "65" : "75"}
                                    value={field.value || ""}
                                    onChange={(e) => {
                                      field.onChange(e.target.value === "" ? "" : Number(e.target.value))
                                    }}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="weightUnit"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Unit</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="kg">kg</SelectItem>
                                  <SelectItem value="lbs">lbs</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Tabs
                        defaultValue="date"
                        value={activeTab}
                        onValueChange={(value) => {
                          if (value === "date" || value === "rate") {
                            if (value === "date") {
                              // When switching to date tab, reset weekly rate to default
                              form.setValue("weightChangeRate", defaultValues.weightChangeRate, { shouldValidate: true });
                              setActiveTab("date");
                            } else if (value === "rate") {
                              // When switching to rate tab, reset target date
                              form.setValue("targetDate", undefined, { shouldValidate: true });
                              setActiveTab("rate");
                            }
                          }
                        }}
                      >
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="date">Target Date</TabsTrigger>
                          <TabsTrigger value="rate">Weekly Rate</TabsTrigger>
                        </TabsList>
                        <TabsContent value="date">
                          <FormField
                            control={form.control}
                            name="targetDate"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Target Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={`w-full pl-3 text-left font-normal ${!field.value ? "text-muted-foreground" : ""
                                          }`}
                                      >
                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-[280px] h-[320px] p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date < new Date() || date < addDays(new Date(), 1)}
                                      initialFocus
                                      className="w-full h-full"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>Select your target date for achieving your goal</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TabsContent>
                        <TabsContent value="rate" className="space-y-4">
                          <FormField
                            control={form.control}
                            name="weightChangeRate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  {goalDirection === "lose" ? "Weight Loss" : "Weight Gain"} Rate (
                                  {watchWeightUnit === "kg" ? "kg" : "lbs"}/week)
                                </FormLabel>
                                <FormControl>
                                  <div className="space-y-2">
                                    <Slider
                                      min={0.1}
                                      max={watchWeightUnit === "kg" ? 1 : 2}
                                      step={0.1}
                                      defaultValue={[field.value || 0.5]}
                                      onValueChange={(values) => {
                                        field.onChange(values[0])
                                      }}
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                      <span>0.1</span>
                                      <span>{watchWeightUnit === "kg" ? "0.5" : "1.0"}</span>
                                      <span>{watchWeightUnit === "kg" ? "1.0" : "2.0"}</span>
                                    </div>
                                  </div>
                                </FormControl>
                                <FormDescription>
                                  {field.value || 0.5} {watchWeightUnit}/week (
                                  {watchWeightUnit === "kg"
                                    ? `${Math.round((field.value || 0.5) * 2.20462 * 10) / 10} lbs`
                                    : `${Math.round((field.value || 0.5) * 0.453592 * 10) / 10} kg`}
                                  /week)
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </TabsContent>
                      </Tabs>
                    </>
                  )}
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full text-base py-6 rounded-xl hover:-translate-y-1 transition-all duration-300">Calculate Now</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* ============================================ */}
        {/* RESULTS EXPLANATION SECTION                */}
        {/* ============================================ */}
        {results && (
          <section className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150" aria-labelledby="results-heading">
            <div className="mb-6">
              <h2 id="results-heading" className="text-2xl font-bold tracking-tight">Understanding Your Results</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Your calculator provides detailed insights to help you reach your goals
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Card className="shadow-sm border-border/60">
                <CardContent className="p-5 flex gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-full shrink-0 h-fit">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">BMR</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Basal Metabolic Rate: the calories your body burns at complete rest.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border/60">
                <CardContent className="p-5 flex gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-full shrink-0 h-fit">
                    <ActivitySquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">TDEE</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Total Daily Energy Expenditure: your BMR plus calories burned through activity.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border/60">
                <CardContent className="p-5 flex gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-full shrink-0 h-fit">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Target Calories</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Your recommended daily intake based on your specific weight goal timeline.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border/60">
                <CardContent className="p-5 flex gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-full shrink-0 h-fit">
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Macronutrients</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Suggested protein, carbs, and fat split to optimize your nutrition target.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm">
                  <strong>How to use these results:</strong> Create a nutrition plan that aligns with your goals. For weight loss, aim for a moderate calorie deficit. For weight gain, consume a calorie surplus. For weight maintenance, match your calorie intake to your TDEE.
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      <LiveResultsPanelWrapper>
        <div id="calculator-results" className="h-full">
          {results ? (
            <CalorieResults results={results} formData={form.getValues()} activeTab={activeTab} />
          ) : (
            <Card className="h-full flex flex-col justify-center items-center py-12 text-center">
              <CardHeader>
                <div className="mx-auto bg-muted rounded-full p-3 mb-4">
                  <Calculator className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Calculate Your Calorie Needs</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Fill in your details on the left to see your personalized calorie recommendations instantly.
                </CardDescription>
              </CardHeader>
              <CardContent className="max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-full p-2">
                      <ClipboardList className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                      Get a detailed breakdown of your BMR, daily energy expenditure, and target calories
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-muted rounded-full p-2">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                      See how long it will take to reach your weight goals with personalized timelines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </LiveResultsPanelWrapper>
    </CalculatorContainer>
  )
}

export default CalorieCalculator
