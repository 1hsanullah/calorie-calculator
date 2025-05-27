import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Flame, Salad, Utensils, Trophy, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Calorie Deficit Calculator | Calculate Calories for Weight Loss',
  description: 'Use our calorie deficit calculator to determine exactly how many calories you need to consume for effective weight loss. Get a personalized plan based on your goals.',
  keywords: 'calorie deficit calculator, weight loss calculator, calorie deficit, how to create calorie deficit, caloric deficit',
  alternates: {
    canonical: '/calorie-deficit-calculator',
  },
}

export default function CalorieDeficitCalculatorPage() {
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
                    <Flame className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Calorie Deficit Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Calculate the exact calorie deficit you need to achieve your weight loss goals effectively.
                      </p>
                      <p className="leading-relaxed">
                        A calorie deficit occurs when you consume fewer calories than your body burns. This forces your body to use stored fat for energy, resulting in weight loss. The recommended healthy calorie deficit for sustainable weight loss is 500-1000 calories per day, which typically results in 1-2 pounds of weight loss per week.
                      </p>
                      <p className="leading-relaxed">
                        Our calculator helps you determine your daily calorie needs and create a personalized calorie deficit plan based on your weight loss goals, taking into account your unique body metrics and activity level.
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
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Calorie Deficit</h2>
        
        <CalorieCalculator initialGoal="lose_gain" />
        
        {/* Redesigned Tips Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to Use Your Calorie Deficit Results</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Follow these evidence-based strategies for effective and sustainable weight loss
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Salad className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Focus on Nutrient-Dense Foods</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Choose whole, nutrient-dense foods to feel satisfied on fewer calories. Vegetables, fruits, lean proteins, and whole grains provide more nutrients per calorie.
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
                    <h3 className="font-semibold text-lg">Prioritize Protein</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Include plenty of protein in your diet to preserve muscle mass during weight loss. Protein also increases feelings of fullness, reducing hunger and cravings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Combine With Regular Exercise</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Pair your calorie deficit with regular physical activity for optimal results. Exercise helps preserve muscle mass and can enhance fat loss.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Be Patient and Consistent</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Sustainable weight loss takes time. Track your progress, stay consistent with your calorie goals, and adjust as needed based on your results.
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
                  <strong>Important note:</strong> While a calorie deficit is necessary for weight loss, going too low can slow your metabolism and lead to nutrient deficiencies. A moderate deficit of 500-1000 calories per day is generally recommended for safe, sustainable weight loss of 1-2 pounds per week.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Always consult with a healthcare professional before starting any significant weight loss program, especially if you have any underlying health conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Related Calculators Section */}
        <RelatedCalculators currentPage="calorie-deficit-calculator" />
      </div>
    </main>
  )
} 