import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Dumbbell, Utensils, Activity, Divide, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Maintenance Calorie Calculator | Find Your Daily Calorie Needs',
  description: 'Calculate your maintenance calories to maintain your current weight with our precise maintenance calorie calculator. Understand your TDEE and BMR for better nutrition planning.',
  keywords: 'maintenance calorie calculator, maintenance calories, TDEE calculator, BMR calculator, maintain weight, calorie maintenance',
  alternates: {
    canonical: '/maintenance-calorie-calculator',
  },
}

export default function MaintenanceCalorieCalculatorPage() {
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
                    <Dumbbell className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Maintenance Calorie Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Discover exactly how many calories you need to maintain your current weight.
                      </p>
                      <p className="leading-relaxed">
                        Maintenance calories are the exact number of calories your body needs to maintain its current weight. This value, also known as your Total Daily Energy Expenditure (TDEE), is influenced by several factors including your basal metabolic rate (BMR), activity level, age, gender, and body composition.
                      </p>
                      <p className="leading-relaxed">
                        Knowing your maintenance calorie needs is essential for maintaining your current weight after reaching your goals, creating a strategic starting point for weight loss or muscle gain, understanding your body's energy requirements, and planning effective meal plans and nutrition strategies.
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
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Maintenance Calories</h2>
        
        <CalorieCalculator initialGoal="maintain" />
        
        {/* Redesigned Tips Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to Use Your Maintenance Calorie Results</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Apply these strategies to effectively maintain your weight and optimize your health
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Focus on Balanced Nutrition</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Distribute your calories across all macronutrients - proteins, carbohydrates, and fats. A balanced intake ensures you get all the nutrients your body needs for optimal function.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ClipboardCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Monitor Your Weight</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Check your weight weekly to ensure you're maintaining. Small fluctuations are normal, but consistent changes may indicate your maintenance calories need adjustment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Divide className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Make Adjustments as Needed</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      If you notice unintended weight changes, adjust your calorie intake by 100-200 calories at a time until you find your true maintenance level.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Recalculate Periodically</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Maintenance calories can change with age, activity level, and body composition. Reassess every few months or after significant lifestyle changes.
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
                  <strong>Did you know?</strong> Your maintenance calorie needs are not static. They can shift based on changes in physical activity, muscle mass, age, hormone levels, and even environmental factors like temperature.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  For optimal health, aim to meet your calorie needs with nutrient-dense foods and maintain a consistent exercise routine that includes both cardiovascular and strength training activities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Related Calculators Section */}
        <RelatedCalculators currentPage="maintenance-calorie-calculator" />
      </div>
    </main>
  )
} 