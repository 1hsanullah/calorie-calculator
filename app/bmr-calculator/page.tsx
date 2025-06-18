import BMRCalculator from "@/components/bmr-calculator"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Heart, Calculator, User, Activity, Target, TrendingUp, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'BMR Calculator | Calculate Your Basal Metabolic Rate',
  description: 'Calculate your Basal Metabolic Rate (BMR) to understand how many calories your body burns at rest. Use our accurate BMR calculator for better fitness planning.',
  keywords: 'BMR calculator, basal metabolic rate calculator, metabolism calculator, calories burned at rest, BMR formula',
  alternates: {
    canonical: '/bmr-calculator',
  },
}

export default function BMRCalculatorPage() {
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
                    <Heart className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  BMR Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest.
                      </p>
                      <p className="leading-relaxed">
                        Your BMR represents the minimum number of calories your body needs to maintain basic physiological functions like breathing, circulation, cell production, and brain function while at complete rest. This accounts for about 60-75% of your total daily calorie expenditure.
                      </p>
                      <p className="leading-relaxed">
                        Our calculator uses the scientifically validated Mifflin-St Jeor equation, which is considered one of the most accurate formulas for estimating BMR. Understanding your BMR is essential for creating effective nutrition and fitness plans, whether your goal is weight loss, weight gain, or maintenance.
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
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your BMR</h2>
        
        <BMRCalculator />
        
        {/* Understanding BMR Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your BMR</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Learn how to interpret and use your Basal Metabolic Rate for optimal health and fitness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">What BMR Tells You</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      BMR shows the minimum calories needed for vital functions like breathing, circulation, and cell repair. It's your body's baseline energy requirement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Factors That Affect BMR</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Age, gender, height, weight, and muscle mass all influence your BMR. Men typically have higher BMRs than women due to greater muscle mass.
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
                    <h3 className="font-semibold text-lg">BMR vs TDEE</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      BMR is calories at rest, while TDEE includes activity. Multiply your BMR by an activity factor to get your total daily energy expenditure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Using BMR for Goals</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Use BMR as a foundation for creating calorie targets. Never eat below your BMR for extended periods as it can slow metabolism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Boosting Your BMR</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Build muscle through strength training, stay hydrated, get adequate sleep, and eat enough protein to maintain a healthy metabolic rate.
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
                  <strong>Important:</strong> BMR calculations provide estimates based on population averages. Individual metabolic rates can vary by 10-15% due to genetics, medical conditions, and other factors.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  For the most accurate measurement, consider getting a metabolic assessment from a healthcare professional or certified fitness facility with specialized equipment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Related Calculators Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Related Calculators</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore our other fitness and health calculators to get a complete picture of your wellness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
              <a href="/calorie-calculator" className="block h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Calorie Calculator</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Calculate your daily calorie needs based on your BMR and activity level. Get personalized recommendations for your fitness goals.
                    </p>
                    <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                  </div>
                </CardContent>
              </a>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
              <a href="/body-fat-percentage-calculator" className="block h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Body Fat Percentage Calculator</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Estimate your body fat percentage using proven measurement methods. Track your body composition progress.
                    </p>
                    <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                  </div>
                </CardContent>
              </a>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
              <a href="/bmi-calculator" className="block h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Scale className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">BMI Calculator</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Calculate your Body Mass Index to assess your weight category and understand your health status.
                    </p>
                    <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                  </div>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 