import CalorieCalculator from "@/components/calorie-calculator"
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
        {/* Hero Section with special mobile layout */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mb-8 md:mb-12">
          {/* Content Column */}
          <div className="space-y-4">
            {/* Title with icon next to it on mobile */}
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl pr-3">
                Calorie Calculator
              </h1>
              
              {/* Mobile-only icon */}
              <div className="flex md:hidden">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/12 rounded-full animate-pulse"></div>
                  <div className="relative">
                    <div className="bg-primary/20 rounded-full p-3">
                      <Calculator className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Calculate your daily calorie needs accurately and create a personalized plan to reach your weight goals.
            </p>
            
            {/* Expandable SEO Content */}
            <div className="mt-4">
              <div className="group" data-state="closed">
                <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                
                <div className="prose dark:prose-invert max-w-none overflow-hidden transition-all duration-300 max-h-[40px] peer-checked:max-h-[1000px]">
                  <p className="mb-0">
                    Understanding your caloric needs is essential for achieving your health and fitness goals.
                  </p>
                  <p className="mt-4">
                    Whether you want to lose weight, gain muscle, or maintain your current physique, knowing your daily calorie requirements is the first step toward success.
                  </p>
                  <p className="mt-4">
                    Our comprehensive calorie calculator uses the Mifflin-St Jeor equation, one of the most accurate formulas available for estimating your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). The calculator takes into account your age, gender, height, weight, activity level, and specific goals to provide personalized recommendations.
                  </p>
                </div>
                
                <label htmlFor="seo-content-toggle" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/90 cursor-pointer mt-2">
                  <span className="peer-checked:hidden inline-flex items-center">Read more <ChevronDown className="h-4 w-4" /></span>
                  <span className="peer-checked:inline-flex hidden items-center">Read less <ChevronUp className="h-4 w-4" /></span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Desktop-only Right Column - Illustration */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/12 rounded-full animate-pulse"></div>
              <div className="relative">
                <div className="bg-primary/20 rounded-full p-8">
                  <Calculator className="h-32 w-32 text-primary" />
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
      </div>
    </main>
  )
} 