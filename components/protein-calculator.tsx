"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Beef, Egg, Fish, Dumbbell } from "lucide-react"

interface ProteinResult {
  dailyGrams: number
  perMealGrams: number
  perKg: number
  calories: number
  goal: string
}

export default function ProteinCalculator() {
  const [weight, setWeight] = useState("")
  const [weightUnit, setWeightUnit] = useState("kg")
  const [goal, setGoal] = useState("")
  const [activityLevel, setActivityLevel] = useState("")
  const [result, setResult] = useState<ProteinResult | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const goalLabels: Record<string, string> = {
    "general-health": "General Health",
    "lose-fat": "Lose Fat (preserve muscle)",
    "maintain-muscle": "Maintain Muscle",
    "build-muscle": "Build Muscle",
  }

  // g per kg of bodyweight ranges by goal
  const proteinRanges: Record<string, { min: number; max: number }> = {
    "general-health": { min: 0.8, max: 1.0 },
    "lose-fat":       { min: 2.0, max: 2.4 },
    "maintain-muscle":{ min: 1.6, max: 2.0 },
    "build-muscle":   { min: 1.8, max: 2.2 },
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!weight || parseFloat(weight) <= 0) e.weight = "Enter a valid weight"
    if (!goal) e.goal = "Select a goal"
    if (!activityLevel) e.activityLevel = "Select an activity level"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const calculate = () => {
    if (!validate()) return

    let weightKg = parseFloat(weight)
    if (weightUnit === "lbs") weightKg = weightKg / 2.205

    const range = proteinRanges[goal]
    // Use midpoint of range
    const gPerKg = (range.min + range.max) / 2
    const dailyGrams = Math.round(weightKg * gPerKg)
    const perMealGrams = Math.round(dailyGrams / 3)
    const calories = dailyGrams * 4

    setResult({
      dailyGrams,
      perMealGrams,
      perKg: parseFloat(gPerKg.toFixed(1)),
      calories,
      goal: goalLabels[goal],
    })
  }

  const foodSources = [
    { name: "Chicken breast (100g)", protein: 31, icon: Beef },
    { name: "Large egg", protein: 6, icon: Egg },
    { name: "Salmon fillet (100g)", protein: 25, icon: Fish },
    { name: "Greek yoghurt (200g)", protein: 20, icon: Dumbbell },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Weight */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-1">
              <Label htmlFor="weight">Body Weight</Label>
              <Input
                id="weight" inputMode="numeric"
                type="number"
                placeholder={weightUnit === "kg" ? "e.g. 75" : "e.g. 165"}
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
              {errors.weight && <p className="text-sm text-destructive">{errors.weight}</p>}
            </div>
            <div className="space-y-1">
              <Label>Unit</Label>
              <Select value={weightUnit} onValueChange={setWeightUnit}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lbs">lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Goal */}
          <div className="space-y-1">
            <Label>Your Goal</Label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger><SelectValue placeholder="Select goal" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="general-health">General Health</SelectItem>
                <SelectItem value="lose-fat">Lose Fat (preserve muscle)</SelectItem>
                <SelectItem value="maintain-muscle">Maintain Muscle</SelectItem>
                <SelectItem value="build-muscle">Build Muscle</SelectItem>
              </SelectContent>
            </Select>
            {errors.goal && <p className="text-sm text-destructive">{errors.goal}</p>}
          </div>

          {/* Activity */}
          <div className="space-y-1">
            <Label>Activity Level</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger><SelectValue placeholder="Select activity level" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (desk job, no exercise)</SelectItem>
                <SelectItem value="light">Lightly Active (1–3 days/week)</SelectItem>
                <SelectItem value="moderate">Moderately Active (3–5 days/week)</SelectItem>
                <SelectItem value="very">Very Active (6–7 days/week)</SelectItem>
                <SelectItem value="extra">Extra Active (athlete / physical job)</SelectItem>
              </SelectContent>
            </Select>
            {errors.activityLevel && <p className="text-sm text-destructive">{errors.activityLevel}</p>}
          </div>

          <Button onClick={calculate} className="w-full" size="lg">
            Calculate Protein Intake
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-4">
          {/* Main result */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Daily Protein Target</p>
              <p className="text-6xl font-extrabold text-primary">{result.dailyGrams}<span className="text-2xl font-semibold ml-1">g</span></p>
              <p className="text-muted-foreground mt-2">Goal: {result.goal}</p>
              <p className="text-sm text-muted-foreground mt-1">{result.perKg} g per kg of body weight · {result.calories} kcal from protein</p>
            </CardContent>
          </Card>

          {/* Breakdown cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">Per meal (3 meals/day)</p>
                <p className="text-3xl font-bold mt-1">{result.perMealGrams}g</p>
                <p className="text-xs text-muted-foreground mt-1">Aim for at least {result.perMealGrams}g of protein at each main meal</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">Calories from protein</p>
                <p className="text-3xl font-bold mt-1">{result.calories} kcal</p>
                <p className="text-xs text-muted-foreground mt-1">Protein provides 4 calories per gram</p>
              </CardContent>
            </Card>
          </div>

          {/* Food sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How to Hit {result.dailyGrams}g of Protein</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {foodSources.map(({ name, protein, icon: Icon }) => {
                const servings = Math.ceil(result!.dailyGrams / protein)
                return (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">{name}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{servings} × = {protein * servings}g</span>
                  </div>
                )
              })}
              <p className="text-xs text-muted-foreground pt-2 border-t">Mix sources throughout the day — no single food needs to cover your entire target.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
