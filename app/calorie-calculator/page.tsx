import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Calculator, Flame, ActivitySquare, Utensils, Scale, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
  description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
  keywords: 'calorie calculator, weight loss calculator, TDEE calculator, BMR calculator, macro calculator, diet planner',
  alternates: {
    canonical: '/calorie-calculator',
  },
}

export default function CalorieCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section - Clean and Modern */}
        <div className="relative mb-12 md:mb-16">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
          
          <div className="relative px-6 py-8 md:px-8 md:py-10">
            <div className="max-w-5xl mx-auto">
              {/* Header with icon - Side by Side Layout */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calculator className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Calorie Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Calculate your daily calorie needs accurately and create a personalized plan to reach your weight goals.
                      </p>
                      <p className="leading-relaxed">
                        Understanding your caloric needs is essential for achieving your health and fitness goals. Whether you want to lose weight, gain muscle, or maintain your current physique, knowing your daily calorie requirements is the first step toward success.
                      </p>
                      <p className="leading-relaxed">
                        Our comprehensive calorie calculator uses the Mifflin-St Jeor equation, one of the most accurate formulas available for estimating your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). The calculator takes into account your age, gender, height, weight, activity level, and specific goals to provide personalized recommendations.
                      </p>
                    </div>
                  </div>
                  
                  <label htmlFor="seo-content-toggle" className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/5 rounded-lg cursor-pointer transition-all duration-200">
                    <span className="peer-checked:hidden inline-flex items-center gap-1">
                      Learn more <ChevronDown className="w-4 h-4" />
                    </span>
                    <span className="peer-checked:inline-flex hidden items-center gap-1">
                      Show less <ChevronUp className="w-4 h-4" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Calorie Needs</h2>
        
        <CalorieCalculator />
        
        {/* Redesigned Understanding Your Results Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your Results</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Your calculator provides detailed insights to help you reach your fitness goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Flame className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">BMR</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Basal Metabolic Rate is the number of calories your body needs at complete rest to maintain basic functions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ActivitySquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">TDEE</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Total Daily Energy Expenditure includes your BMR plus additional calories burned through daily activities and exercise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Target Calories</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Your recommended daily calorie intake based on your weight goals - whether to lose, gain, or maintain.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Macronutrients</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Suggested protein, carbs, and fat intake to optimize your nutrition based on your calorie target.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">BMI</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Body Mass Index provides a measurement of your weight relative to your height as a general health indicator.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg">
                  <strong>How to use these results:</strong> Create a nutrition plan that aligns with your goals. For weight loss, aim for a moderate calorie deficit. For weight gain, consume a calorie surplus. For weight maintenance, match your calorie intake to your TDEE.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Remember that these calculations provide estimates. Monitor your progress and adjust your plan as needed. Consult with a healthcare professional before making significant changes to your diet or exercise routine.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Related Calculators Section */}
        <RelatedCalculators currentPage="calorie-calculator" />
      </div>
    </main>
  )
} 