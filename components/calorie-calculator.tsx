"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format, addDays, parseISO } from "date-fns"
import { CalendarIcon, ClipboardList, Calculator } from "lucide-react"

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
import CalorieResults from "@/components/calorie-results"

const formSchema = z.object({
  age: z.coerce.number().min(15).max(100),
  gender: z.enum(["male", "female"]),
  weight: z.coerce.number().min(30).max(300),
  weightUnit: z.enum(["kg", "lbs"]),
  height: z.coerce.number().min(100).max(250),
  heightUnit: z.enum(["cm", "in"]),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very-active"]),
  goal: z.enum(["lose", "maintain", "gain"]),
  targetWeight: z.union([z.coerce.number(), z.literal("")]).optional(),
  targetDate: z.date().optional(),
  weightChangeRate: z.coerce.number().min(0.1).max(2).optional(),
})

// Update the FormValues type to handle targetWeight correctly
type FormValues = z.infer<typeof formSchema> & {
  targetDate?: Date | string;
}

// Add type definition for results
type ResultsType = {
  bmr: number
  tdee: number
  targetCalories: number
  weightDifference: number
  daysToGoal: number
  targetDate: Date | string | null
}

// Update the useState type to match
const CalorieCalculator = () => {
  const [results, setResults] = useState<ResultsType | null>(null)

  // Default form values
  const defaultValues: Partial<FormValues> = {
    age: 30,
    gender: "male",
    weight: 70,
    weightUnit: "kg",
    height: 170,
    heightUnit: "cm",
    activityLevel: "moderate",
    goal: "maintain",
    weightChangeRate: 0.5,
    targetWeight: 70,
  }

  // Initialize form with values from localStorage or defaults
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  // Load saved form values from localStorage on component mount
  useEffect(() => {
    const savedValues = localStorage.getItem("calorieCalculatorFormValues")
    if (savedValues) {
      try {
        const parsedValues = JSON.parse(savedValues)

        // Handle date conversion from string back to Date object
        if (parsedValues.targetDate) {
          parsedValues.targetDate = parseISO(parsedValues.targetDate)
        }

        // Reset form with saved values
        form.reset(parsedValues)
      } catch (error) {
        console.error("Error parsing saved form values:", error)
      }
    }

    // Load results
    const savedResults = localStorage.getItem("calorieCalculatorResults")
    if (savedResults) {
      try {
        const parsedResults = JSON.parse(savedResults)

        // Handle date conversion for targetDate
        if (parsedResults.targetDate) {
          parsedResults.targetDate = parseISO(parsedResults.targetDate)
        }

        setResults(parsedResults)
      } catch (error) {
        console.error("Error parsing saved results:", error)
      }
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
      // Create a copy of the results to modify before saving
      const resultsToSave = { ...results } as any;

      // Convert Date object to ISO string for storage
      if (resultsToSave.targetDate instanceof Date) {
        resultsToSave.targetDate = resultsToSave.targetDate.toISOString()
      }

      localStorage.setItem("calorieCalculatorResults", JSON.stringify(resultsToSave))
    }
  }, [results])

  const watchGoal = form.watch("goal")
  const watchWeightUnit = form.watch("weightUnit")

  function calculateCalories(data: FormValues) {
    // Convert weight to kg if needed
    const weightInKg = data.weightUnit === "lbs" ? data.weight * 0.453592 : data.weight

    // Convert height to cm if needed
    const heightInCm = data.heightUnit === "in" ? data.height * 2.54 : data.height

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

    if (data.goal !== "maintain" && data.targetWeight) {
      // Calculate weight difference
      const targetWeightNum = parseFloat(data.targetWeight.toString())
      weightDifference = targetWeightNum - weightInKg

      // Calculate daily calorie adjustment
      // 1kg of fat = 7700 calories
      const dailyCalorieAdjustment = data.weightChangeRate ? (data.weightChangeRate * 7700) / 7 : 500 // Default to 0.5kg per week

      if (data.goal === "lose") {
        targetCalories = tdee - dailyCalorieAdjustment
        // Calculate days to goal (if losing weight)
        if (weightDifference < 0) {
          daysToGoal = Math.abs(weightDifference) / (data.weightChangeRate ? data.weightChangeRate / 7 : 0.5 / 7)
        }
      } else if (data.goal === "gain") {
        targetCalories = tdee + dailyCalorieAdjustment
        // Calculate days to goal (if gaining weight)
        if (weightDifference > 0) {
          daysToGoal = weightDifference / (data.weightChangeRate ? data.weightChangeRate / 7 : 0.5 / 7)
        }
      }

      // Calculate target date based on days to goal
      if (daysToGoal > 0) {
        if (data.targetDate) {
          targetDate = data.targetDate instanceof Date ? data.targetDate : new Date(data.targetDate)
          // Recalculate daily calorie adjustment based on target date
          const currentDate = new Date()
          const daysUntilTarget = Math.ceil((targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))
          const requiredDailyDeficit = (Math.abs(weightDifference) * 7700) / daysUntilTarget

          if (data.goal === "lose") {
            targetCalories = tdee - requiredDailyDeficit
          } else if (data.goal === "gain") {
            targetCalories = tdee + requiredDailyDeficit
          }
        } else {
          targetDate = addDays(new Date(), Math.ceil(daysToGoal))
        }
      }
    }

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: Math.round(targetCalories), // No minimum limit
      weightDifference,
      daysToGoal: Math.ceil(daysToGoal),
      targetDate,
    } as ResultsType)
  }

  // Auto-calculate on initial load if we have form values but no results
  useEffect(() => {
    const hasFormValues = localStorage.getItem("calorieCalculatorFormValues")
    const hasResults = localStorage.getItem("calorieCalculatorResults")

    if (hasFormValues && !hasResults && form.formState.isValid) {
      // Automatically calculate results using current form values
      calculateCalories(form.getValues())
    }
  }, [form])

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="md:sticky md:top-4 h-fit">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(calculateCalories)} className="space-y-6">
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
                  <FormField
                    control={form.control}
                    name="heightUnit"
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
                            <SelectItem value="cm">cm</SelectItem>
                            <SelectItem value="in">in</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-1"
                        >
                          <FormItem className="flex items-center space-x-1 space-y-0 flex-1">
                            <FormControl>
                              <RadioGroupItem value="lose" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Lose</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0 flex-1">
                            <FormControl>
                              <RadioGroupItem value="maintain" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Maintain</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0 flex-1">
                            <FormControl>
                              <RadioGroupItem value="gain" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Gain</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {watchGoal !== "maintain" && (
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
                                  placeholder={watchGoal === "lose" ? "65" : "75"}
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

                    <Tabs defaultValue="rate">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="rate">Weekly Rate</TabsTrigger>
                        <TabsTrigger value="date">Target Date</TabsTrigger>
                      </TabsList>
                      <TabsContent value="rate" className="space-y-4">
                        <FormField
                          control={form.control}
                          name="weightChangeRate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {watchGoal === "lose" ? "Weight Loss" : "Weight Gain"} Rate (
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
                                      className={`w-full pl-3 text-left font-normal ${
                                        !field.value ? "text-muted-foreground" : ""
                                      }`}
                                    >
                                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date() || date < addDays(new Date(), 1)}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription>Select your target date for achieving your goal</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TabsContent>
                    </Tabs>
                  </>
                )}
              </div>

              <Button type="submit" className="w-full">
                Calculate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div>
        {results ? (
          <CalorieResults results={results} formData={form.getValues()} />
        ) : (
          <Card className="h-full flex flex-col justify-center items-center py-12 text-center">
            <CardHeader>
              <div className="mx-auto bg-muted rounded-full p-3 mb-4">
                <Calculator className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Calculate Your Calorie Needs</CardTitle>
              <CardDescription className="text-lg mt-2">
                Fill in your details on the left and click "Calculate" to see your personalized calorie recommendations
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
    </div>
  )
}

export default CalorieCalculator
