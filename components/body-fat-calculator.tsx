"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Calculator, Target, Info } from "lucide-react"

interface BodyFatResult {
  bodyFatPercentage: number
  category: string
  method: string
  healthyRange: string
}

export default function BodyFatCalculator() {
  const [formData, setFormData] = useState({
    age: "",
    heightFeet: "",
    heightInches: "",
    heightCm: "",
    neck: "",
    waist: "",
    hip: "",
    gender: "",
    heightUnit: "metric", // metric (cm) or imperial (feet/inches)
    circumferenceUnit: "metric" // metric (cm) or imperial (inches)
  })
  
  const [result, setResult] = useState<BodyFatResult | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.age || parseInt(formData.age) < 10 || parseInt(formData.age) > 120) {
      newErrors.age = "Please enter a valid age between 10 and 120"
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
    
    if (!formData.neck || parseFloat(formData.neck) <= 0) {
      newErrors.neck = "Please enter a valid neck measurement"
    }
    
    if (!formData.waist || parseFloat(formData.waist) <= 0) {
      newErrors.waist = "Please enter a valid waist measurement"
    }
    
    if (formData.gender === "female" && (!formData.hip || parseFloat(formData.hip) <= 0)) {
      newErrors.hip = "Please enter a valid hip measurement"
    }
    
    if (!formData.gender) {
      newErrors.gender = "Please select your gender"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const getBodyFatCategory = (bodyFat: number, gender: string) => {
    if (gender === "male") {
      if (bodyFat < 6) return "Essential Fat (Very Low)"
      if (bodyFat < 14) return "Athletes"
      if (bodyFat < 18) return "Fitness"
      if (bodyFat < 25) return "Average"
      return "Obese"
    } else {
      if (bodyFat < 14) return "Essential Fat (Very Low)"
      if (bodyFat < 21) return "Athletes"
      if (bodyFat < 25) return "Fitness"
      if (bodyFat < 32) return "Average"
      return "Obese"
    }
  }

  const getHealthyRange = (gender: string) => {
    return gender === "male" ? "10-20%" : "16-24%"
  }

  const calculateBodyFat = () => {
    if (!validateForm()) return

    const gender = formData.gender
    
    // Calculate height in cm
    let height: number
    if (formData.heightUnit === "metric") {
      height = parseFloat(formData.heightCm)
    } else {
      const feet = parseInt(formData.heightFeet)
      const inches = parseFloat(formData.heightInches)
      height = (feet * 12 + inches) * 2.54 // Convert to cm
    }
    
    // Handle circumference measurements
    let neck = parseFloat(formData.neck)
    let waist = parseFloat(formData.waist)
    let hip = formData.hip ? parseFloat(formData.hip) : 0
    
    // Convert circumferences to cm if needed
    if (formData.circumferenceUnit === "imperial") {
      neck = neck * 2.54
      waist = waist * 2.54
      if (hip > 0) hip = hip * 2.54
    }
    
    // Use Navy Method by default (most accurate)
    let bodyFatPercentage: number
    const method = "Navy Method"
    
    if (gender === "male") {
      bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
    } else {
      bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450
    }
    
    bodyFatPercentage = Math.max(3, Math.min(50, bodyFatPercentage))
    
    const category = getBodyFatCategory(bodyFatPercentage, gender)
    const healthyRange = getHealthyRange(gender)
    
    setResult({
      bodyFatPercentage: Math.round(bodyFatPercentage * 10) / 10,
      category,
      method,
      healthyRange
    })
  }

  const resetForm = () => {
    setFormData({
      age: "",
      heightFeet: "",
      heightInches: "",
      heightCm: "",
      neck: "",
      waist: "",
      hip: "",
      gender: "",
      heightUnit: "metric",
      circumferenceUnit: "metric"
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
            Body Fat Percentage Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
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

          {/* Circumference Inputs with Unit Selector */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="neck">Neck Circumference</Label>
              <Input
                id="neck"
                type="number"
                step="0.1"
                placeholder={formData.circumferenceUnit === "metric" ? "Measure around neck" : "Measure around neck"}
                value={formData.neck}
                onChange={(e) => setFormData(prev => ({ ...prev, neck: e.target.value }))}
                className={errors.neck ? "border-red-500" : ""}
              />
              {errors.neck && <p className="text-sm text-red-500">{errors.neck}</p>}
            </div>
            <div className="col-span-1 space-y-2">
              <Label>Unit</Label>
              <Select 
                value={formData.circumferenceUnit} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, circumferenceUnit: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">cm</SelectItem>
                  <SelectItem value="imperial">inches</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="waist">Waist Circumference</Label>
              <Input
                id="waist"
                type="number"
                step="0.1"
                placeholder={formData.circumferenceUnit === "metric" ? "Measure at narrowest point" : "Measure at narrowest point"}
                value={formData.waist}
                onChange={(e) => setFormData(prev => ({ ...prev, waist: e.target.value }))}
                className={errors.waist ? "border-red-500" : ""}
              />
              {errors.waist && <p className="text-sm text-red-500">{errors.waist}</p>}
            </div>
            <div className="col-span-1 space-y-2">
              <Label>Unit</Label>
              <Select 
                value={formData.circumferenceUnit} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, circumferenceUnit: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">cm</SelectItem>
                  <SelectItem value="imperial">inches</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {formData.gender === "female" && (
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="hip">Hip Circumference</Label>
                <Input
                  id="hip"
                  type="number"
                  step="0.1"
                  placeholder={formData.circumferenceUnit === "metric" ? "Measure at widest point" : "Measure at widest point"}
                  value={formData.hip}
                  onChange={(e) => setFormData(prev => ({ ...prev, hip: e.target.value }))}
                  className={errors.hip ? "border-red-500" : ""}
                />
                {errors.hip && <p className="text-sm text-red-500">{errors.hip}</p>}
              </div>
              <div className="col-span-1 space-y-2">
                <Label>Unit</Label>
                <Select 
                  value={formData.circumferenceUnit} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, circumferenceUnit: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metric">cm</SelectItem>
                    <SelectItem value="imperial">inches</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}



          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  Measurement Tips
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 mt-1 space-y-1">
                  <li>• <strong>Neck:</strong> Measure just below the Adam's apple</li>
                  <li>• <strong>Waist:</strong> Measure at the narrowest point, usually at navel level</li>
                  {formData.gender === "female" && (
                    <li>• <strong>Hip:</strong> Measure at the widest point of the hips</li>
                  )}
                  <li>• Take measurements in the morning for consistency</li>
                  <li>• Measure over skin or tight-fitting clothing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculateBodyFat} className="flex-1">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Body Fat
            </Button>
            <Button variant="outline" onClick={resetForm}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <User className="h-5 w-5" />
              Your Body Fat Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">
                {result.bodyFatPercentage}%
              </div>
              <p className="text-muted-foreground">
                Estimated Body Fat Percentage
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Calculated using {result.method}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Category</h3>
                </div>
                <p className="text-lg font-medium">{result.category}</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Healthy Range</h3>
                </div>
                <p className="text-lg font-medium">{result.healthyRange}</p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    Important Note
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    This calculator provides estimates based on body measurements. Results may vary from more accurate methods like DEXA scans. For precise analysis, consult with a healthcare professional.
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