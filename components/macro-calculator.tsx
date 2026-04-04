"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MacroResult {
  calories: number
  protein: { grams: number; calories: number; pct: number }
  carbs:   { grams: number; calories: number; pct: number }
  fat:     { grams: number; calories: number; pct: number }
  goal: string
}

const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 1.2,
  light:     1.375,
  moderate:  1.55,
  very:      1.725,
  extra:     1.9,
}

// protein / carbs / fat percentages by goal
const SPLITS: Record<string, [number, number, number]> = {
  "lose-fat":     [0.40, 0.30, 0.30],
  "maintain":     [0.30, 0.40, 0.30],
  "build-muscle": [0.30, 0.45, 0.25],
}

const GOAL_LABELS: Record<string, string> = {
  "lose-fat":     "Lose Fat",
  "maintain":     "Maintain Weight",
  "build-muscle": "Build Muscle",
}

export default function MacroCalculator() {
  const [age, setAge]               = useState("")
  const [gender, setGender]         = useState("")
  const [weight, setWeight]         = useState("")
  const [weightUnit, setWeightUnit] = useState("kg")
  const [heightCm, setHeightCm]     = useState("")
  const [heightFeet, setHeightFeet] = useState("")
  const [heightInches, setHeightInches] = useState("")
  const [heightUnit, setHeightUnit] = useState("cm")
  const [activity, setActivity]     = useState("")
  const [goal, setGoal]             = useState("")
  const [result, setResult]         = useState<MacroResult | null>(null)
  const [errors, setErrors]         = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!age || parseInt(age) < 10 || parseInt(age) > 120) e.age = "Enter a valid age (10–120)"
    if (!gender) e.gender = "Select a sex"
    if (!weight || parseFloat(weight) <= 0) e.weight = "Enter a valid weight"
    if (heightUnit === "cm") {
      if (!heightCm || parseFloat(heightCm) < 100) e.height = "Enter a valid height in cm"
    } else {
      if (!heightFeet || parseInt(heightFeet) < 3) e.height = "Enter a valid height in feet"
    }
    if (!activity) e.activity = "Select an activity level"
    if (!goal) e.goal = "Select a goal"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const calculate = () => {
    if (!validate()) return

    let weightKg = parseFloat(weight)
    if (weightUnit === "lbs") weightKg /= 2.205

    let heightCmVal: number
    if (heightUnit === "cm") {
      heightCmVal = parseFloat(heightCm)
    } else {
      heightCmVal = (parseInt(heightFeet) * 12 + (parseFloat(heightInches) || 0)) * 2.54
    }

    const ageNum = parseInt(age)

    // Mifflin-St Jeor BMR
    let bmr: number
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCmVal - 5 * ageNum + 5
    } else {
      bmr = 10 * weightKg + 6.25 * heightCmVal - 5 * ageNum - 161
    }

    const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity])
    const [pPct, cPct, fPct] = SPLITS[goal]

    const proteinCal = Math.round(tdee * pPct)
    const carbsCal   = Math.round(tdee * cPct)
    const fatCal     = Math.round(tdee * fPct)

    setResult({
      calories: tdee,
      protein: { grams: Math.round(proteinCal / 4), calories: proteinCal, pct: Math.round(pPct * 100) },
      carbs:   { grams: Math.round(carbsCal / 4),   calories: carbsCal,   pct: Math.round(cPct * 100) },
      fat:     { grams: Math.round(fatCal / 9),      calories: fatCal,     pct: Math.round(fPct * 100) },
      goal: GOAL_LABELS[goal],
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Age & Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="m-age">Age</Label>
              <Input id="m-age" inputMode="numeric" type="number" placeholder="e.g. 30" value={age} onChange={e => setAge(e.target.value)} />
              {errors.age && <p className="text-sm text-destructive">{errors.age}</p>}
            </div>
            <div className="space-y-1">
              <Label>Sex</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-sm text-destructive">{errors.gender}</p>}
            </div>
          </div>

          {/* Weight */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-1">
              <Label htmlFor="m-weight">Weight</Label>
              <Input id="m-weight" inputMode="numeric" type="number" placeholder={weightUnit === "kg" ? "e.g. 75" : "e.g. 165"} value={weight} onChange={e => setWeight(e.target.value)} />
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

          {/* Height */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Height</Label>
              <Select value={heightUnit} onValueChange={v => { setHeightUnit(v); setErrors({}) }}>
                <SelectTrigger className="w-32 h-7 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="imperial">ft / in</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {heightUnit === "cm" ? (
              <Input inputMode="numeric" type="number" placeholder="e.g. 175" value={heightCm} onChange={e => setHeightCm(e.target.value)} />
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Input inputMode="numeric" type="number" placeholder="Feet" value={heightFeet} onChange={e => setHeightFeet(e.target.value)} />
                <Input inputMode="numeric" type="number" placeholder="Inches" value={heightInches} onChange={e => setHeightInches(e.target.value)} />
              </div>
            )}
            {errors.height && <p className="text-sm text-destructive">{errors.height}</p>}
          </div>

          {/* Activity */}
          <div className="space-y-1">
            <Label>Activity Level</Label>
            <Select value={activity} onValueChange={setActivity}>
              <SelectTrigger><SelectValue placeholder="Select activity" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (desk job, no exercise)</SelectItem>
                <SelectItem value="light">Lightly Active (1–3 days/week)</SelectItem>
                <SelectItem value="moderate">Moderately Active (3–5 days/week)</SelectItem>
                <SelectItem value="very">Very Active (6–7 days/week)</SelectItem>
                <SelectItem value="extra">Extra Active (athlete / physical job)</SelectItem>
              </SelectContent>
            </Select>
            {errors.activity && <p className="text-sm text-destructive">{errors.activity}</p>}
          </div>

          {/* Goal */}
          <div className="space-y-1">
            <Label>Goal</Label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger><SelectValue placeholder="Select goal" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="lose-fat">Lose Fat</SelectItem>
                <SelectItem value="maintain">Maintain Weight</SelectItem>
                <SelectItem value="build-muscle">Build Muscle</SelectItem>
              </SelectContent>
            </Select>
            {errors.goal && <p className="text-sm text-destructive">{errors.goal}</p>}
          </div>

          <Button onClick={calculate} className="w-full" size="lg">
            Calculate My Macros
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-4">
          {/* Total calories */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Daily Calorie Target · {result.goal}</p>
              <p className="text-6xl font-extrabold text-primary">{result.calories}<span className="text-xl font-semibold ml-1">kcal</span></p>
            </CardContent>
          </Card>

          {/* Macro breakdown */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Protein", data: result.protein, color: "bg-blue-500" },
              { label: "Carbs",   data: result.carbs,   color: "bg-yellow-500" },
              { label: "Fat",     data: result.fat,      color: "bg-red-400" },
            ].map(({ label, data, color }) => (
              <Card key={label}>
                <CardContent className="p-4 text-center">
                  <div className={`w-2 h-2 rounded-full ${color} mx-auto mb-2`} />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-2xl font-bold">{data.grams}g</p>
                  <p className="text-xs text-muted-foreground">{data.pct}% · {data.calories} kcal</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual bar */}
          <Card>
            <CardContent className="p-5">
              <p className="text-sm font-medium mb-3">Macro Split</p>
              <div className="flex rounded-full overflow-hidden h-4">
                <div className="bg-blue-500"  style={{ width: `${result.protein.pct}%` }} />
                <div className="bg-yellow-500" style={{ width: `${result.carbs.pct}%` }} />
                <div className="bg-red-400"   style={{ width: `${result.fat.pct}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />Protein {result.protein.pct}%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />Carbs {result.carbs.pct}%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400 inline-block" />Fat {result.fat.pct}%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
