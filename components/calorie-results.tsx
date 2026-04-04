"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ArrowRight, Flame, Calendar, Scale, Utensils, AlertTriangle, ActivitySquare, Share2, CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface CalorieResultsProps {
  results: {
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
  formData: any
  activeTab: "date" | "rate"
}

export default function CalorieResults({ results, formData, activeTab }: CalorieResultsProps) {
  // Destructure with default values for BMI properties for backward compatibility
  const {
    bmr,
    tdee,
    targetCalories,
    weightDifference,
    daysToGoal,
    targetDate,
    goalDirection,
    bmi = 0,
    bmiCategory = { category: "Not calculated", color: "text-muted-foreground" }
  } = results
  const { goal, weight, weightUnit, targetWeight } = formData

  // Convert string date to Date object if needed
  const formattedTargetDate = targetDate ? (typeof targetDate === 'string' ? new Date(targetDate) : targetDate) : null

  const [isCopied, setIsCopied] = useState(false)

  const handleShare = () => {
    const text = `My daily calorie target is ${targetCalories} kcal! Calculate yours easily at:\n${window.location.href}`
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }).catch(err => console.error("Could not copy text: ", err))
  }

  const getWeightInKg = (weight: number, unit: string) => {
    return unit === "lbs" ? weight * 0.453592 : weight
  }

  const formatWeight = (weight: number, unit: string) => {
    return `${Math.round(weight * 10) / 10} ${unit}`
  }

  const getGoalDescription = () => {
    if (goal === "maintain") {
      return "maintain your current weight"
    }

    const currentWeight = getWeightInKg(weight, weightUnit)
    const target = getWeightInKg(targetWeight || 0, weightUnit)
    const difference = Math.abs(target - currentWeight)

    if (goalDirection === "lose") {
      return `lose ${formatWeight(weightUnit === "kg" ? difference : difference * 2.20462, weightUnit)}`
    }

    return `gain ${formatWeight(weightUnit === "kg" ? difference : difference * 2.20462, weightUnit)}`
  }

  const getMacronutrients = () => {
    // Calculate macronutrients based on goal
    let protein = 0
    let carbs = 0
    let fats = 0

    // Track the actual percentages separately to handle very low calorie scenarios
    let proteinPercent = 0
    let carbsPercent = 0
    let fatsPercent = 0

    const currentWeightInKg = getWeightInKg(weight, weightUnit)

    // Ensure target calories is at least 1200 for calculation purposes
    const minCalories = Math.max(1200, targetCalories)

    // Set default healthy percentages based on goal
    if (goalDirection === "lose") {
      proteinPercent = 40 // Higher protein for weight loss
      carbsPercent = 35
      fatsPercent = 25
    } else if (goalDirection === "gain") {
      proteinPercent = 30
      carbsPercent = 45 // Higher carbs for weight gain
      fatsPercent = 25
    } else { // maintain
      proteinPercent = 30
      carbsPercent = 40
      fatsPercent = 30
    }

    if (targetCalories < 1200) {
      // For very low calorie diets, use fixed minimum healthy distribution
      protein = currentWeightInKg * 1.6 // Minimum protein based on bodyweight
      fats = (minCalories * 0.25) / 9 // At least 25% calories from healthy fats
      carbs = (minCalories - (protein * 4 + fats * 9)) / 4
    } else if (goal === "cut") {
      // Higher protein for weight loss
      protein = currentWeightInKg * 2.2 // 2.2g per kg of bodyweight
      fats = (targetCalories * 0.25) / 9 // 25% of calories from fat
      carbs = (targetCalories - (protein * 4 + fats * 9)) / 4 // Remaining calories from carbs
    } else if (goal === "maintain") {
      protein = currentWeightInKg * 1.8 // 1.8g per kg of bodyweight
      fats = (targetCalories * 0.3) / 9 // 30% of calories from fat
      carbs = (targetCalories - (protein * 4 + fats * 9)) / 4 // Remaining calories from carbs
    } else if (goal === "bulk") {
      protein = currentWeightInKg * 2.0 // 2.0g per kg of bodyweight
      fats = (targetCalories * 0.25) / 9 // 25% of calories from fat
      carbs = (targetCalories - (protein * 4 + fats * 9)) / 4 // Remaining calories from carbs
    }

    // Safety check - ensure no negative values
    protein = Math.max(0, protein)
    carbs = Math.max(0, carbs)
    fats = Math.max(0, fats)

    // If carbs are negative or very low, redistribute
    if (carbs < 20) {
      // Minimum 20g of carbs for brain function
      carbs = 20

      // Recalculate protein and fats with remaining calories
      const remainingCalories = targetCalories - (carbs * 4)

      if (remainingCalories > 0) {
        // 65% protein, 35% fat for remaining calories (for weight loss goals)
        // or 50% protein, 50% fat for maintaining/gaining goals
        const proteinPct = goal === "cut" ? 0.65 : 0.5

        protein = (remainingCalories * proteinPct) / 4
        fats = (remainingCalories * (1 - proteinPct)) / 9
      } else {
        // Not enough calories - set minimums for health
        protein = currentWeightInKg * 1.2 // Minimum protein
        fats = 20 // Minimum fat grams
      }
    }

    // Calculate actual percentages for display
    const totalCalories = (protein * 4) + (carbs * 4) + (fats * 9)

    if (totalCalories > 0) {
      const actualProteinPercent = (protein * 4 * 100) / totalCalories
      const actualCarbsPercent = (carbs * 4 * 100) / totalCalories
      const actualFatsPercent = (fats * 9 * 100) / totalCalories

      // Only update percentages if they're reasonable values
      if (actualProteinPercent > 0 && actualCarbsPercent > 0 && actualFatsPercent > 0) {
        proteinPercent = actualProteinPercent
        carbsPercent = actualCarbsPercent
        fatsPercent = actualFatsPercent
      }
    }

    return {
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
      proteinPercent: Math.round(proteinPercent),
      carbsPercent: Math.round(carbsPercent),
      fatsPercent: Math.round(fatsPercent),
    }
  }

  const macros = getMacronutrients()

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      {/* Primary Goal Target Card — inverted for max contrast in both modes */}
      <Card className="bg-foreground text-background shadow-lg border-none overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-background/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-background/5 rounded-full blur-2xl pointer-events-none" />

        <div className="absolute top-4 right-4 z-20">
          <Button
            variant="ghost"
            size="sm"
            className="text-background/70 hover:bg-background/15 hover:text-background transition-all duration-200"
            onClick={handleShare}
          >
            {isCopied ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Share2 className="h-4 w-4 mr-2" />}
            {isCopied ? "Copied" : "Share"}
          </Button>
        </div>

        <CardContent className="pt-10 pb-10 text-center relative z-10">
          <p className="text-background/60 font-semibold tracking-widest uppercase text-xs mb-3">
            Daily Recommended Target
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-7xl font-extrabold tracking-tighter tabular-nums text-background">
              {targetCalories}
            </span>
            <span className="text-2xl font-medium text-background/70">kcal</span>
          </div>

          {targetCalories < 1200 && (
            <div className="mt-3 inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 text-xs font-medium border border-yellow-500/30">
              <AlertTriangle className="h-3.5 w-3.5 mr-1.5" />
              <span>Values below 1200 kcal may be unsafe without medical supervision</span>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-background/15 mx-auto max-w-sm">
            <p className="text-background/80 font-medium">
              To {getGoalDescription()}
              {formattedTargetDate && (
                <>
                  <span className="opacity-50 mx-1">/</span>
                  by <span className="text-background font-bold ml-1">{format(formattedTargetDate, "MMM d, yyyy")}</span>
                </>
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Body Metrics */}
        <Card className="shadow-sm border-border/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <ActivitySquare className="h-5 w-5 text-indigo-500" />
              Body Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border/40">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Body Mass Index</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight">{bmi}</span>
                  <span className={`text-sm font-medium px-2 py-0.5 rounded-full bg-muted ${bmiCategory.color}`}>
                    {bmiCategory.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pb-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Current Weight</p>
                <p className="text-2xl font-semibold tracking-tight">{formatWeight(weight, weightUnit)}</p>
              </div>

              {goal !== "maintain" && (
                <div className="text-right space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Target Weight</p>
                  <p className="text-2xl font-semibold tracking-tight">{formatWeight(targetWeight || weight, weightUnit)}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Calorie Breakdown */}
        <Card className="shadow-sm border-border/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              Energy Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-border/40">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Resting (BMR)</p>
                <p className="text-2xl font-semibold tracking-tight">{bmr} <span className="text-sm font-normal text-muted-foreground">kcal</span></p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Maintenance (TDEE)</p>
                <p className="text-2xl font-semibold tracking-tight">{tdee} <span className="text-sm font-normal text-muted-foreground">kcal</span></p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Daily Target</span>
                <span className="font-medium text-primary">{tdee} kcal</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {goal === "maintain" ? "Adjustment" : goalDirection === "lose" ? "Calorie Deficit" : "Calorie Surplus"}
                </span>
                <span className={`font-medium ${goalDirection === "lose" ? "text-green-600 dark:text-green-500" : goalDirection === "gain" ? "text-blue-600 dark:text-blue-500" : ""}`}>
                  {goal === "maintain" ? "0 kcal" : `${goalDirection === "lose" ? "-" : "+"}${Math.abs(tdee - targetCalories)} kcal`}
                </span>
              </div>

              <div className="h-px bg-border/60 my-2" />

              <div className="flex flex-wrap items-center justify-between gap-2 bg-muted p-3 rounded-lg border border-border">
                <span className="font-semibold break-words text-foreground">Recommended Intake</span>
                <span className="font-bold text-xl text-foreground whitespace-nowrap">{targetCalories} kcal</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goal Timeline (if applicable) */}
      {goal !== "maintain" && formattedTargetDate && (
        <Card className="shadow-sm border-border/60 bg-muted/10 overflow-hidden relative">
          <CardContent className="p-6 relative z-10">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">Goal Timeline</h3>
                    <p className="text-sm text-muted-foreground">
                      Target achieved in <span className="font-bold text-foreground">{Math.round(daysToGoal)} days</span>
                    </p>
                  </div>
                </div>
                <div className="text-right w-full md:w-auto p-3 bg-background rounded-lg border border-border/40 shadow-sm flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Total Change</p>
                  <p className="text-xl font-bold tracking-tight text-primary">
                    {goalDirection === "lose" ? "-" : "+"}
                    {formatWeight(Math.abs(weightUnit === "kg" ? weightDifference : weightDifference * 2.20462), weightUnit)}
                  </p>
                </div>
              </div>

              {/* Visual Timeline Bar */}
              <div className="relative pt-4 pb-2">
                <div className="absolute top-1/2 left-0 w-full h-1.5 bg-muted rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-primary/40 to-primary rounded-full -translate-y-1/2 origin-left scale-x-100"></div>

                <div className="relative flex justify-between items-center z-10 w-full px-0.5">
                  <div className="flex flex-col items-center gap-2 bg-background p-1 rounded-full shadow-sm border border-border/40">
                    <div className="w-3 h-3 rounded-full bg-primary/40 ring-4 ring-background"></div>
                  </div>
                  <div className="flex flex-col items-center gap-2 bg-background p-1 rounded-full shadow-sm border border-border/40">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full mt-3 text-xs font-medium">
                  <div className="text-left">
                    <div className="text-muted-foreground">Today</div>
                    <div className="font-semibold text-sm">{formatWeight(weight, weightUnit)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary">{format(formattedTargetDate, "MMM d, yyyy")}</div>
                    <div className="font-semibold text-sm">{formatWeight(targetWeight || weight, weightUnit)}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="shadow-sm border-border/60">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Utensils className="h-5 w-5 text-green-500" />
            Macronutrient Targets
          </CardTitle>
          <CardDescription>Based on your {targetCalories} kcal daily goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {targetCalories < 1200 && (
              <Alert className="border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  Target calories are very low. Values shown represent minimum nutrition for health.
                  Percentages display a recommended healthy balance, rather than exact calculations.
                </AlertDescription>
              </Alert>
            )}

            {/* Visual Macro Progress Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-blue-600 dark:text-blue-400">{macros.proteinPercent}% Protein</span>
                <span className="text-yellow-600 dark:text-yellow-400">{macros.carbsPercent}% Carbs</span>
                <span className="text-red-500 dark:text-red-400">{macros.fatsPercent}% Fat</span>
              </div>
              <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden flex shadow-inner">
                <div style={{ width: `${macros.proteinPercent}%` }} className="bg-blue-500" />
                <div style={{ width: `${macros.carbsPercent}%` }} className="bg-yellow-500" />
                <div style={{ width: `${macros.fatsPercent}%` }} className="bg-red-500" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Protein</div>
                <div className="text-2xl font-bold tracking-tight text-foreground">{macros.protein}<span className="text-sm font-normal text-muted-foreground ml-0.5">g</span></div>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1">Carbs</div>
                <div className="text-2xl font-bold tracking-tight text-foreground">{macros.carbs}<span className="text-sm font-normal text-muted-foreground ml-0.5">g</span></div>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest mb-1">Fats</div>
                <div className="text-2xl font-bold tracking-tight text-foreground">{macros.fats}<span className="text-sm font-normal text-muted-foreground ml-0.5">g</span></div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="nutrition-tips" className="border-border/60">
                <AccordionTrigger className="text-sm py-3">Nutrition Guidelines</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Protein:</strong> Lean sources like chicken, fish, tofu, legumes, and low-fat dairy.
                    </p>
                    <p>
                      <strong className="text-foreground">Carbohydrates:</strong> Complex carbs like whole grains, fruits, vegetables, and legumes.
                    </p>
                    <p>
                      <strong className="text-foreground">Fats:</strong> Healthy fats from avocados, nuts, seeds, and olive oil.
                    </p>
                    <p>
                      <strong className="text-foreground">Hydration:</strong> Drink at least 8 glasses of water daily to support metabolism.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exercise-tips" className="border-border/60">
                <AccordionTrigger className="text-sm py-3">Exercise Recommendations</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Cardio:</strong> 150-300 minutes of moderate-intensity cardio per week.
                    </p>
                    <p>
                      <strong className="text-foreground">Strength:</strong> 2-3 sessions per week targeting all major muscle groups.
                    </p>
                    <p>
                      <strong className="text-foreground">Recovery:</strong> Allow adequate rest and aim for 7-9 hours of sleep.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
