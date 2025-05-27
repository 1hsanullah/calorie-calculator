import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Scale, Apple, Dumbbell, Droplets, BedIcon, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
  description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed, timeframes, and get tailored recommendations.',
  keywords: 'weight loss calculator, diet calculator, lose weight calculator, fat loss calculator, weight loss planner, calorie deficit',
  alternates: {
    canonical: '/weight-loss-calculator',
  },
}

export default function WeightLossCalculatorPage() {
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
                    <Scale className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Weight Loss Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Plan your weight loss journey with precision. Create a personalized timeline to reach your target weight.
                      </p>
                      <p className="leading-relaxed">
                        Our weight loss calculator helps you determine your daily calorie needs for effective weight loss. The calculator takes into account your current weight, height, age, gender, activity level, target weight goal, and desired timeframe to provide personalized recommendations.
                      </p>
                      <p className="leading-relaxed">
                        For healthy, sustainable weight loss, experts recommend losing 1-2 pounds (0.5-1 kg) per week. This typically requires a calorie deficit of 500-1000 calories per day. Our calculator helps you find the right balance for your specific goals.
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
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Weight Loss Plan</h2>
        
        <CalorieCalculator initialGoal="lose_gain" />
        
        {/* Redesigned Tips Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tips for Successful Weight Loss</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Evidence-based strategies to help you achieve sustainable weight loss results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Apple className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Focus on Whole Foods</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Prioritize fruits, vegetables, lean proteins, and whole grains to feel fuller on fewer calories. These nutrient-dense foods support overall health during weight loss.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Stay Hydrated</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Drinking water before meals can reduce hunger and boost metabolism. Aim for 8-10 glasses daily, and consider replacing caloric beverages with water.
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
                    <h3 className="font-semibold text-lg">Include Strength Training</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Building muscle increases your metabolic rate and improves body composition. Aim for 2-3 strength training sessions per week targeting all major muscle groups.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BedIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Get Adequate Sleep</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Poor sleep can disrupt hunger hormones and lead to increased cravings. Aim for 7-9 hours of quality sleep each night to support your weight loss efforts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Track Your Progress</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Monitor your food intake and weight changes to stay accountable. Use apps, journals, or photos to document your journey and identify patterns.
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
                  <strong>Remember:</strong> Weight loss is rarely linear - you may experience plateaus or fluctuations. Focus on consistency and be patient with the process for long-term success.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  The most successful weight loss approaches combine calorie management, regular physical activity, and behavioral changes. Small, sustainable adjustments to your lifestyle are more effective than drastic short-term changes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Related Calculators Section */}
        <RelatedCalculators currentPage="weight-loss-calculator" />
      </div>
    </main>
  )
} 