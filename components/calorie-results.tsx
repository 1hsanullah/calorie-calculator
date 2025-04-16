"use client"

import { format } from "date-fns"
import { ArrowRight, Flame, Calendar, Scale, Utensils, AlertTriangle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface CalorieResultsProps {
  results: {
    bmr: number
    tdee: number
    targetCalories: number
    weightDifference: number
    daysToGoal: number
    targetDate: Date | string | null
    goalDirection: string
  }
  formData: any
  activeTab: "date" | "rate"
}

export default function CalorieResults({ results, formData, activeTab }: CalorieResultsProps) {
  const { bmr, tdee, targetCalories, weightDifference, daysToGoal, targetDate, goalDirection } = results
  const { goal, weight, weightUnit, targetWeight } = formData

  // Convert string date to Date object if needed
  const formattedTargetDate = targetDate ? (typeof targetDate === 'string' ? new Date(targetDate) : targetDate) : null

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

    const currentWeightInKg = getWeightInKg(weight, weightUnit)
    
    // Ensure target calories is at least 1200 for calculation purposes
    const minCalories = Math.max(1200, targetCalories)

    if (targetCalories < 1200) {
      // For very low calorie diets, use fixed minimum healthy distribution
      protein = currentWeightInKg * 1.6 // Minimum protein based on bodyweight
      fats = (minCalories * 0.25) / 9 // At least 25% calories from healthy fats
      carbs = (minCalories - (protein * 4 + fats * 9)) / 4
    } else if (goal === "lose_gain" && goalDirection === "lose") {
      // Higher protein for weight loss
      protein = currentWeightInKg * 2.2 // 2.2g per kg of bodyweight
      fats = (targetCalories * 0.25) / 9 // 25% of calories from fat
      carbs = (targetCalories - (protein * 4 + fats * 9)) / 4 // Remaining calories from carbs
    } else if (goal === "maintain") {
      protein = currentWeightInKg * 1.8 // 1.8g per kg of bodyweight
      fats = (targetCalories * 0.3) / 9 // 30% of calories from fat
      carbs = (targetCalories - (protein * 4 + fats * 9)) / 4 // Remaining calories from carbs
    } else if (goal === "lose_gain" && goalDirection === "gain") {
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
        const proteinPct = goal === "lose_gain" && goalDirection === "lose" ? 0.65 : 0.5
        
        protein = (remainingCalories * proteinPct) / 4
        fats = (remainingCalories * (1 - proteinPct)) / 9
      } else {
        // Not enough calories - set minimums for health
        protein = currentWeightInKg * 1.2 // Minimum protein
        fats = 20 // Minimum fat grams
      }
    }

    return {
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
    }
  }

  const macros = getMacronutrients()

  return (
    <div className="space-y-6">
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl">Your Results</CardTitle>
          <CardDescription className="text-primary-foreground/80">Based on your information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{targetCalories}</div>
            <div className="text-xl">Calories per day</div>
            <div className="mt-4 text-primary-foreground/80">
              To {getGoalDescription()}
              {formattedTargetDate && <> by {format(formattedTargetDate, "MMMM d, yyyy")}</>}
              {goalDirection !== "maintain" && <> using {activeTab === "date" ? "target date" : "weekly rate"} method</>}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calorie Breakdown</CardTitle>
          <CardDescription>Understanding your energy needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-muted p-2 rounded-full">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Basal Metabolic Rate</div>
                <div className="text-2xl font-bold">{bmr} calories</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-muted p-2 rounded-full">
                <Utensils className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Daily Energy Expenditure</div>
                <div className="text-2xl font-bold">{tdee} calories</div>
              </div>
            </div>
          </div>

          {goal !== "maintain" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-muted p-2 rounded-full">
                  <Scale className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-sm font-medium">Weight Change</div>
                  <div className="text-2xl font-bold">
                    {goalDirection === "lose" ? "-" : "+"}
                    {formatWeight(
                      Math.abs(weightUnit === "kg" ? weightDifference : weightDifference * 2.20462),
                      weightUnit,
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-muted p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-sm font-medium">Estimated Time</div>
                  <div className="text-2xl font-bold">
                    {formattedTargetDate 
                      ? `${Math.round(daysToGoal)} days` 
                      : "Calculate with target weight"}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">Daily Target</div>
              <div className="font-medium">{tdee} calories</div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">
                {goal === "maintain" 
                  ? "Adjustment" 
                  : goalDirection === "lose" 
                    ? "Calorie Deficit" 
                    : "Calorie Surplus"}
              </div>
              <div className="font-medium">
                {goal === "maintain" 
                  ? "0" 
                  : `${goalDirection === "lose" ? "-" : "+"}${Math.abs(tdee - targetCalories)}`}{" "}
                calories
              </div>
            </div>
            <div className="flex items-center justify-between font-bold text-lg">
              <div>Daily Calorie Target</div>
              <div className="flex items-center">
                <ArrowRight className="mr-2 h-4 w-4" />
                {targetCalories} calories
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nutrition Recommendations</CardTitle>
          <CardDescription>Suggested macronutrient breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {targetCalories < 1200 && (
              <Alert className="border-yellow-500">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <AlertDescription>
                  Target calories are very low. The macronutrient values shown represent minimum nutrition for health. 
                  Consult with a healthcare professional before following any diet under 1200 calories.
                </AlertDescription>
              </Alert>
            )}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground mb-1">Protein</div>
                <div className="text-2xl font-bold">{macros.protein}g</div>
                <div className="text-sm text-muted-foreground">
                  {targetCalories > 0 
                    ? Math.max(0, Math.round((macros.protein * 4 * 100) / Math.max(1, targetCalories)))
                    : 0}% of calories
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground mb-1">Carbs</div>
                <div className="text-2xl font-bold">{macros.carbs}g</div>
                <div className="text-sm text-muted-foreground">
                  {targetCalories > 0 
                    ? Math.max(0, Math.round((macros.carbs * 4 * 100) / Math.max(1, targetCalories)))
                    : 0}% of calories
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm font-medium text-muted-foreground mb-1">Fats</div>
                <div className="text-2xl font-bold">{macros.fats}g</div>
                <div className="text-sm text-muted-foreground">
                  {targetCalories > 0 
                    ? Math.max(0, Math.round((macros.fats * 9 * 100) / Math.max(1, targetCalories)))
                    : 0}% of calories
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="nutrition-tips">
                <AccordionTrigger>Nutrition Tips</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Protein:</strong> Focus on lean sources like chicken, fish, tofu, legumes, and low-fat
                      dairy.
                    </p>
                    <p>
                      <strong>Carbohydrates:</strong> Choose complex carbs like whole grains, fruits, vegetables, and
                      legumes.
                    </p>
                    <p>
                      <strong>Fats:</strong> Include healthy fats from sources like avocados, nuts, seeds, and olive
                      oil.
                    </p>
                    <p>
                      <strong>Hydration:</strong> Drink at least 8 glasses of water daily to support metabolism and
                      overall health.
                    </p>
                    <p>
                      <strong>Meal Timing:</strong> Consider spreading your calories across 3-5 meals per day to
                      maintain energy levels.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exercise-tips">
                <AccordionTrigger>Exercise Recommendations</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Cardio:</strong> Include 150-300 minutes of moderate-intensity cardio per week.
                    </p>
                    <p>
                      <strong>Strength Training:</strong> Aim for 2-3 sessions per week targeting all major muscle
                      groups.
                    </p>
                    <p>
                      <strong>Flexibility:</strong> Incorporate stretching or yoga to improve mobility and reduce injury
                      risk.
                    </p>
                    <p>
                      <strong>Rest:</strong> Allow for adequate recovery between workouts and aim for 7-9 hours of
                      sleep.
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
