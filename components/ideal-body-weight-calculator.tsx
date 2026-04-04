"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scale } from "lucide-react"

interface IBWResult {
  devine: number
  robinson: number
  miller: number
  hamwi: number
  average: number
  bmiRange: { min: number; max: number }
  heightCm: number
}

export default function IdealBodyWeightCalculator() {
  const [heightCm, setHeightCm] = useState("")
  const [heightFeet, setHeightFeet] = useState("")
  const [heightInches, setHeightInches] = useState("")
  const [heightUnit, setHeightUnit] = useState("cm")
  const [gender, setGender] = useState("")
  const [result, setResult] = useState<IBWResult | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (heightUnit === "cm") {
      if (!heightCm || parseFloat(heightCm) < 100 || parseFloat(heightCm) > 250) e.height = "Enter a height between 100 and 250 cm"
    } else {
      if (!heightFeet || parseInt(heightFeet) < 3 || parseInt(heightFeet) > 8) e.height = "Enter valid feet (3–8)"
    }
    if (!gender) e.gender = "Select a gender"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const calculate = () => {
    if (!validate()) return

    let cm: number
    if (heightUnit === "cm") {
      cm = parseFloat(heightCm)
    } else {
      const ft = parseInt(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      cm = (ft * 12 + inches) * 2.54
    }

    const totalInches = cm / 2.54
    const inchesOver5ft = totalInches - 60 // inches over 5 feet
    const m = cm / 100

    let devine: number, robinson: number, miller: number, hamwi: number

    if (gender === "male") {
      devine   = 50   + 2.3  * inchesOver5ft
      robinson = 52   + 1.9  * inchesOver5ft
      miller   = 56.2 + 1.41 * inchesOver5ft
      hamwi    = 48   + 2.7  * inchesOver5ft
    } else {
      devine   = 45.5 + 2.3  * inchesOver5ft
      robinson = 49   + 1.7  * inchesOver5ft
      miller   = 53.1 + 1.36 * inchesOver5ft
      hamwi    = 45.4 + 2.2  * inchesOver5ft
    }

    // Clamp negative values for very short heights
    devine   = Math.max(devine,   30)
    robinson = Math.max(robinson, 30)
    miller   = Math.max(miller,   30)
    hamwi    = Math.max(hamwi,    30)

    const average = (devine + robinson + miller + hamwi) / 4

    // Healthy BMI range 18.5–24.9
    const bmiMin = Math.round(18.5 * m * m)
    const bmiMax = Math.round(24.9 * m * m)

    setResult({
      devine:   Math.round(devine),
      robinson: Math.round(robinson),
      miller:   Math.round(miller),
      hamwi:    Math.round(hamwi),
      average:  Math.round(average),
      bmiRange: { min: bmiMin, max: bmiMax },
      heightCm: Math.round(cm),
    })
  }

  const toKgLbs = (kg: number) => `${kg} kg / ${Math.round(kg * 2.205)} lbs`

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Height unit toggle */}
          <div className="space-y-1">
            <Label>Height Unit</Label>
            <Select value={heightUnit} onValueChange={v => { setHeightUnit(v); setErrors({}) }}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cm">Centimetres (cm)</SelectItem>
                <SelectItem value="imperial">Feet & Inches</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {heightUnit === "cm" ? (
            <div className="space-y-1">
              <Label htmlFor="ibw-height-cm">Height (cm)</Label>
              <Input
                id="ibw-height-cm" inputMode="numeric"
                type="number"
                placeholder="e.g. 175"
                value={heightCm}
                onChange={e => setHeightCm(e.target.value)}
              />
              {errors.height && <p className="text-sm text-destructive">{errors.height}</p>}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="ibw-feet">Feet</Label>
                <Input id="ibw-feet" inputMode="numeric" type="number" placeholder="e.g. 5" value={heightFeet} onChange={e => setHeightFeet(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="ibw-inches">Inches</Label>
                <Input id="ibw-inches" inputMode="numeric" type="number" placeholder="e.g. 9" value={heightInches} onChange={e => setHeightInches(e.target.value)} />
              </div>
              {errors.height && <p className="text-sm text-destructive col-span-2">{errors.height}</p>}
            </div>
          )}

          {/* Gender */}
          <div className="space-y-1">
            <Label>Biological Sex</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger><SelectValue placeholder="Select sex" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && <p className="text-sm text-destructive">{errors.gender}</p>}
          </div>

          <Button onClick={calculate} className="w-full" size="lg">
            Calculate Ideal Body Weight
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-4">
          {/* Average / summary */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Average Ideal Body Weight</p>
              <p className="text-5xl font-extrabold text-primary">{result.average} kg</p>
              <p className="text-muted-foreground mt-2">{Math.round(result.average * 2.205)} lbs · based on 4 clinical formulas</p>
            </CardContent>
          </Card>

          {/* Formula breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Scale className="h-4 w-4" />
                Results by Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Devine Formula (1974)", value: result.devine, note: "Most widely used in clinical settings" },
                { label: "Robinson Formula (1983)", value: result.robinson, note: "Refined for general population" },
                { label: "Miller Formula (1983)", value: result.miller, note: "Tends to give higher estimates" },
                { label: "Hamwi Formula (1964)", value: result.hamwi, note: "Originally developed for insulin dosing" },
              ].map(({ label, value, note }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{value} kg</p>
                    <p className="text-xs text-muted-foreground">{Math.round(value * 2.205)} lbs</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* BMI-based healthy range */}
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-1">Healthy Weight Range (BMI 18.5–24.9)</h3>
              <p className="text-2xl font-bold text-primary mt-1">
                {result.bmiRange.min}–{result.bmiRange.max} kg
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {Math.round(result.bmiRange.min * 2.205)}–{Math.round(result.bmiRange.max * 2.205)} lbs · for {result.heightCm} cm height
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                BMI-based ranges don't distinguish between muscle and fat. Athletes and heavily muscled individuals may sit above the "normal" BMI range while being in excellent health.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
