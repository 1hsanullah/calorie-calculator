"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Scale, Calculator, Target, Info } from "lucide-react"

interface BMIResult {
  bmi: number
  category: string
  healthyRange: string
  categoryColor: string
}

export default function BMICalculator() {
  const [formData, setFormData] = useState({
    weight: "",
    weightUnit: "metric", // metric (kg) or imperial (lbs)
    heightFeet: "",
    heightInches: "",
    heightCm: "",
    heightUnit: "metric" // metric (cm) or imperial (feet/inches)
  })
  
  const [result, setResult] = useState<BMIResult | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
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
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) {
      return { category: "Underweight", color: "text-blue-600" }
    } else if (bmi < 25) {
      return { category: "Normal weight", color: "text-green-600" }
    } else if (bmi < 30) {
      return { category: "Overweight", color: "text-yellow-600" }
    } else {
      return { category: "Obese", color: "text-red-600" }
    }
  }

  const calculateBMI = () => {
    if (!validateForm()) return

    // Handle weight conversion
    let weight = parseFloat(formData.weight)
    if (formData.weightUnit === "imperial") {
      weight = weight * 0.453592 // lbs to kg
    }
    
    // Handle height conversion
    let height: number
    if (formData.heightUnit === "metric") {
      height = parseFloat(formData.heightCm) / 100 // cm to meters
    } else {
      const feet = parseInt(formData.heightFeet)
      const inches = parseFloat(formData.heightInches)
      height = ((feet * 12 + inches) * 2.54) / 100 // Convert to meters
    }
    
    // Calculate BMI
    const bmi = weight / (height * height)
    const categoryInfo = getBMICategory(bmi)
    
    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category: categoryInfo.category,
      categoryColor: categoryInfo.color,
      healthyRange: "18.5 - 24.9"
    })
  }

  const resetForm = () => {
    setFormData({
      weight: "",
      weightUnit: "metric",
      heightFeet: "",
      heightInches: "",
      heightCm: "",
      heightUnit: "metric"
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
            BMI Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  About BMI
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  BMI (Body Mass Index) is a measure of body fat based on height and weight. 
                  It's a useful screening tool but doesn't directly measure body fat percentage or muscle mass.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculateBMI} className="flex-1">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate BMI
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
              <Scale className="h-5 w-5" />
              Your BMI Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">
                {result.bmi}
              </div>
              <p className="text-muted-foreground">
                Body Mass Index
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Category</h3>
                </div>
                <p className={`text-lg font-medium ${result.categoryColor}`}>
                  {result.category}
                </p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Healthy Range</h3>
                </div>
                <p className="text-lg font-medium">{result.healthyRange}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">BMI Categories:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="font-medium text-blue-700 dark:text-blue-300">Underweight</div>
                  <div className="text-blue-600 dark:text-blue-400">Below 18.5</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="font-medium text-green-700 dark:text-green-300">Normal</div>
                  <div className="text-green-600 dark:text-green-400">18.5 - 24.9</div>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="font-medium text-yellow-700 dark:text-yellow-300">Overweight</div>
                  <div className="text-yellow-600 dark:text-yellow-400">25 - 29.9</div>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="font-medium text-red-700 dark:text-red-300">Obese</div>
                  <div className="text-red-600 dark:text-red-400">30 and above</div>
                </div>
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
                    BMI is a screening tool and may not be accurate for athletes, elderly, or those with high muscle mass. 
                    For a complete health assessment, consult with a healthcare professional.
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