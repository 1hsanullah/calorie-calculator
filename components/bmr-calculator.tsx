"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Calculator, Activity, Flame } from "lucide-react"

interface BMRResult {
  bmr: number
  tdeeValues: {
    sedentary: number
    lightlyActive: number
    moderatelyActive: number
    veryActive: number
    extraActive: number
  }
}

export default function BMRCalculator() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    weightUnit: "metric", // metric (kg) or imperial (lbs)
    heightFeet: "",
    heightInches: "",
    heightCm: "",
    heightUnit: "metric", // metric (cm) or imperial (feet/inches)
    gender: ""
  })
  
  const [result, setResult] = useState<BMRResult | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.age || parseInt(formData.age) < 10 || parseInt(formData.age) > 120) {
      newErrors.age = "Please enter a valid age between 10 and 120"
    }
    
    if (!formData.weight || parseFloat(formData.weight) <= 0) {
      newErrors.weight = "Please enter a valid weight"
    }
    
    // Height validation based on unit
    if (formData.heightUnit === "metric") {
      if (!formData.heightCm || parseFloat(formData.heightCm) <= 0) {
        newErrors.height = "Please enter a valid height in cm"
      }
    } else {
      if (!formData.heightFeet || parseInt(formData.heightFeet) <= 0) {
        newErrors.height = "Please enter valid feet"
      }
      if (!formData.heightInches || parseFloat(formData.heightInches) < 0 || parseFloat(formData.heightInches) >= 12) {
        newErrors.height = "Please enter valid inches (0-11.9)"
      }
    }
    
    if (!formData.gender) {
      newErrors.gender = "Please select your gender"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateBMR = () => {
    if (!validateForm()) return

    const age = parseInt(formData.age)
    const gender = formData.gender
    
    // Handle weight conversion
    let weight = parseFloat(formData.weight)
    if (formData.weightUnit === "imperial") {
      weight = weight * 0.453592 // lbs to kg
    }
    
    // Handle height conversion
    let height: number
    if (formData.heightUnit === "metric") {
      height = parseFloat(formData.heightCm)
    } else {
      const feet = parseInt(formData.heightFeet)
      const inches = parseFloat(formData.heightInches)
      height = (feet * 12 + inches) * 2.54 // Convert to cm
    }
    
    // Mifflin-St Jeor Equation
    let bmr: number
    if (gender === "male") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }
    
    // Calculate TDEE values
    const tdeeValues = {
      sedentary: Math.round(bmr * 1.2),
      lightlyActive: Math.round(bmr * 1.375),
      moderatelyActive: Math.round(bmr * 1.55),
      veryActive: Math.round(bmr * 1.725),
      extraActive: Math.round(bmr * 1.9)
    }
    
    setResult({
      bmr: Math.round(bmr),
      tdeeValues
    })
  }

  const resetForm = () => {
    setFormData({
      age: "",
      weight: "",
      weightUnit: "metric",
      heightFeet: "",
      heightInches: "",
      heightCm: "",
      heightUnit: "metric",
      gender: ""
    })
    setResult(null)
    setErrors({})
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            BMR Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                className={errors.age ? "border-red-500" : ""}
              />
              {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
            </div>

          </div>

          {/* Weight Input with Unit Selector */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                placeholder="70"
                value={formData.weight}
                onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                className={errors.weight ? "border-red-500" : ""}
              />
              {errors.weight && <p className="text-sm text-red-500">{errors.weight}</p>}
            </div>
            <div className="col-span-1 space-y-2">
              <Label>Unit</Label>
              <Select 
                value={formData.weightUnit} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, weightUnit: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">kg</SelectItem>
                  <SelectItem value="imperial">lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Height Input with Unit Selector */}
          <div className="grid grid-cols-3 gap-4">
            {formData.heightUnit === "metric" ? (
              <div className="col-span-2 space-y-2">
                <Label htmlFor="heightCm">Height</Label>
                <Input
                  id="heightCm"
                  type="number"
                  step="0.1"
                  placeholder="170"
                  value={formData.heightCm}
                  onChange={(e) => setFormData(prev => ({ ...prev, heightCm: e.target.value }))}
                  className={errors.height ? "border-red-500" : ""}
                />
                {errors.height && <p className="text-sm text-red-500">{errors.height}</p>}
              </div>
            ) : (
              <>
                <div className="col-span-1 space-y-2">
                  <Label>Feet</Label>
                  <Input
                    type="number"
                    placeholder="5"
                    min={1}
                    max={8}
                    value={formData.heightFeet}
                    onChange={(e) => setFormData(prev => ({ ...prev, heightFeet: e.target.value }))}
                    className={errors.height ? "border-red-500" : ""}
                  />
                </div>
                <div className="col-span-1 space-y-2">
                  <Label>Inches</Label>
                  <Input
                    type="number"
                    step="0.1"
                    placeholder="7"
                    min={0}
                    max={11}
                    value={formData.heightInches}
                    onChange={(e) => setFormData(prev => ({ ...prev, heightInches: e.target.value }))}
                    className={errors.height ? "border-red-500" : ""}
                  />
                  {errors.height && <p className="text-sm text-red-500">{errors.height}</p>}
                </div>
              </>
            )}
            <div className="col-span-1 space-y-2">
              <Label>Unit</Label>
              <Select 
                value={formData.heightUnit} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, heightUnit: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">cm</SelectItem>
                  <SelectItem value="imperial">ft/in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-6">
          </div>

          <div className="flex gap-3">
            <Button onClick={calculateBMR} className="flex-1">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate BMR
            </Button>
            <Button variant="outline" onClick={resetForm}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Heart className="h-5 w-5" />
              Your BMR Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* BMR Result */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">
                {result.bmr} calories/day
              </div>
              <p className="text-muted-foreground">
                Your Basal Metabolic Rate (BMR)
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This is the number of calories your body burns at complete rest
              </p>
            </div>

            {/* TDEE Values */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Total Daily Energy Expenditure (TDEE)
              </h3>
              <div className="grid gap-3">
                <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border">
                  <div>
                    <p className="font-medium">Sedentary (little/no exercise)</p>
                    <p className="text-sm text-muted-foreground">Desk job, no exercise</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {result.tdeeValues.sedentary} cal/day
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border">
                  <div>
                    <p className="font-medium">Lightly Active</p>
                    <p className="text-sm text-muted-foreground">Light exercise 1-3 days/week</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {result.tdeeValues.lightlyActive} cal/day
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border">
                  <div>
                    <p className="font-medium">Moderately Active</p>
                    <p className="text-sm text-muted-foreground">Moderate exercise 3-5 days/week</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {result.tdeeValues.moderatelyActive} cal/day
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border">
                  <div>
                    <p className="font-medium">Very Active</p>
                    <p className="text-sm text-muted-foreground">Hard exercise 6-7 days/week</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {result.tdeeValues.veryActive} cal/day
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg border">
                  <div>
                    <p className="font-medium">Extra Active</p>
                    <p className="text-sm text-muted-foreground">Very hard exercise, physical job</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {result.tdeeValues.extraActive} cal/day
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start gap-2">
                <Flame className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    Important Note
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    These calculations provide estimates based on the Mifflin-St Jeor equation. Individual metabolic rates can vary by 10-15% due to genetics, medical conditions, and other factors. For the most accurate measurement, consider consulting with a healthcare professional.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 