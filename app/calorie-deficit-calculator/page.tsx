import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Scale, Salad, Utensils, Trophy, BarChart } from "lucide-react"
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
        {/* Hero Section with special mobile layout */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mb-8 md:mb-12">
          {/* Content Column */}
          <div className="space-y-4">
            {/* Title with icon next to it on mobile */}
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl pr-3">
                Calorie Deficit Calculator
              </h1>
              
              {/* Mobile-only icon */}
              <div className="flex md:hidden">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/12 rounded-full animate-pulse"></div>
                  <div className="relative">
                    <div className="bg-primary/20 rounded-full p-3">
                      <Scale className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Calculate the exact calorie deficit you need to achieve your weight loss goals effectively.
            </p>
            
            {/* Expandable SEO Content */}
            <div className="mt-4">
              <div className="group" data-state="closed">
                <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                
                <div className="prose dark:prose-invert max-w-none overflow-hidden transition-all duration-300 max-h-[40px] peer-checked:max-h-[1000px]">
                  <p className="mb-0">
                    A calorie deficit occurs when you consume fewer calories than your body burns.
                  </p>
                  <p className="mt-4">
                    This forces your body to use stored fat for energy, resulting in weight loss. The recommended healthy calorie deficit for sustainable weight loss is 500-1000 calories per day, which typically results in 1-2 pounds of weight loss per week.
                  </p>
                  <p className="mt-4">
                    Our calculator helps you determine your daily calorie needs and create a personalized calorie deficit plan based on your weight loss goals, taking into account your unique body metrics and activity level.
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
                  <Scale className="h-32 w-32 text-primary" />
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