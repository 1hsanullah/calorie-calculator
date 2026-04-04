"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplets } from "lucide-react"

interface WaterResult {
  litres: number
  oz: number
  cups: number
  glasses: number // 250ml glasses
  hourly: number  // ml per waking hour (16 hours)
}

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("")
  const [weightUnit, setWeightUnit] = useState("kg")
  const [exerciseMinutes, setExerciseMinutes] = useState("0")
  const [climate, setClimate] = useState("")
  const [result, setResult] = useState<WaterResult | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!weight || parseFloat(weight) <= 0) e.weight = "Enter a valid weight"
    if (!climate) e.climate = "Select a climate"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const calculate = () => {
    if (!validate()) return

    let weightKg = parseFloat(weight)
    if (weightUnit === "lbs") weightKg = weightKg / 2.205

    // Base: 33ml per kg of body weight (WHO / general guideline)
    let baseMl = weightKg * 33

    // Exercise adjustment: add 500ml per 30 min of exercise
    const exerciseMins = parseInt(exerciseMinutes) || 0
    const exerciseMl = Math.floor(exerciseMins / 30) * 500

    // Climate adjustment
    const climateAdj: Record<string, number> = {
      temperate: 0,
      warm: 350,
      hot: 700,
    }
    const climateMl = climateAdj[climate] ?? 0

    const totalMl = baseMl + exerciseMl + climateMl

    setResult({
      litres: parseFloat((totalMl / 1000).toFixed(1)),
      oz: Math.round(totalMl / 29.574),
      cups: Math.round(totalMl / 240),
      glasses: Math.round(totalMl / 250),
      hourly: Math.round(totalMl / 16),
    })
  }

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
              <Label htmlFor="w-weight">Body Weight</Label>
              <Input
                id="w-weight" inputMode="numeric"
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

          {/* Exercise */}
          <div className="space-y-1">
            <Label htmlFor="exercise">Daily Exercise (minutes)</Label>
            <Select value={exerciseMinutes} onValueChange={setExerciseMinutes}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="0">None</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
                <SelectItem value="90">90 minutes</SelectItem>
                <SelectItem value="120">120+ minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Climate */}
          <div className="space-y-1">
            <Label>Climate / Environment</Label>
            <Select value={climate} onValueChange={setClimate}>
              <SelectTrigger><SelectValue placeholder="Select climate" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="temperate">Temperate (cool / mild)</SelectItem>
                <SelectItem value="warm">Warm (20–30°C / 68–86°F)</SelectItem>
                <SelectItem value="hot">Hot or humid (30°C+ / 86°F+)</SelectItem>
              </SelectContent>
            </Select>
            {errors.climate && <p className="text-sm text-destructive">{errors.climate}</p>}
          </div>

          <Button onClick={calculate} className="w-full" size="lg">
            Calculate Water Intake
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-4">
          {/* Main result */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Daily Water Target</p>
              <div className="flex items-end justify-center gap-3">
                <p className="text-6xl font-extrabold text-primary">{result.litres}</p>
                <p className="text-2xl font-semibold text-primary mb-2">L</p>
              </div>
              <p className="text-muted-foreground mt-2">{result.oz} fl oz · {result.glasses} glasses (250ml) · {result.cups} cups</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Droplets className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Hourly target (16 waking hrs)</p>
                </div>
                <p className="text-3xl font-bold">{result.hourly} ml</p>
                <p className="text-xs text-muted-foreground mt-1">Roughly {Math.round(result.hourly / 250 * 10) / 10} glasses per hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Droplets className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">In fluid ounces</p>
                </div>
                <p className="text-3xl font-bold">{result.oz} oz</p>
                <p className="text-xs text-muted-foreground mt-1">{result.cups} standard cups (8 fl oz each)</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Simple Schedule to Hit Your Target</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>On waking (before coffee)</span><span className="font-medium">500 ml</span></div>
                <div className="flex justify-between"><span>With breakfast</span><span className="font-medium">250 ml</span></div>
                <div className="flex justify-between"><span>Mid-morning</span><span className="font-medium">250 ml</span></div>
                <div className="flex justify-between"><span>With lunch</span><span className="font-medium">500 ml</span></div>
                <div className="flex justify-between"><span>Afternoon</span><span className="font-medium">500 ml</span></div>
                <div className="flex justify-between"><span>With dinner</span><span className="font-medium">250 ml</span></div>
                <div className="flex justify-between border-t pt-2"><span className="font-medium">Schedule total</span><span className="font-medium">2,250 ml</span></div>
                <p className="text-xs text-muted-foreground pt-1">Adjust portions to reach your personal target. Add extra before/after exercise.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
