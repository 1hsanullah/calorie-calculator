import BodyFatCalculator from "@/components/body-fat-calculator"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, User, Calculator, Heart, Ruler, Target, TrendingUp, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Body Fat Percentage Calculator | Estimate Your Body Fat',
  description: 'Calculate your body fat percentage using proven measurement methods. Track your body composition and fitness progress with our accurate body fat calculator.',
  keywords: 'body fat percentage calculator, body fat calculator, body composition calculator, Navy method, body fat measurement',
  alternates: {
    canonical: '/body-fat-percentage-calculator',
  },
}

export default function BodyFatPercentageCalculatorPage() {
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
                    <User className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Body Fat Percentage Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Estimate your body fat percentage using scientifically validated measurement methods.
                      </p>
                      <p className="leading-relaxed">
                        Body fat percentage is a more accurate indicator of health and fitness than weight alone. It shows the proportion of your body weight that consists of fat versus lean mass (muscle, bone, organs, and water). Understanding your body composition helps you set realistic fitness goals and track progress effectively.
                      </p>
                      <p className="leading-relaxed">
                        Our calculator uses proven methods including the Navy Body Fat formula and US Army formula, which use simple body measurements to estimate body fat percentage. These methods are widely used by fitness professionals and military organizations for their accuracy and practicality.
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
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Body Fat Percentage</h2>
        
        <BodyFatCalculator />
        
        {/* Understanding Body Fat Percentage Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Body Fat Percentage</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Learn how to interpret your body fat percentage and use it to improve your health and fitness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Healthy Ranges</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Men: 10-20% (athletes 6-13%), Women: 16-24% (athletes 14-20%). These ranges support optimal health and performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Measurement Methods</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Navy Method uses waist, neck, and height. US Army formula includes hip measurements for women. Both are accurate and practical.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Health Benefits</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Maintaining healthy body fat levels reduces disease risk, improves energy levels, and enhances physical performance and appearance.
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
                    <h3 className="font-semibold text-lg">Tracking Progress</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Monitor changes monthly rather than daily. Body fat percentage changes more slowly than weight but provides better insight into fitness progress.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Accuracy Tips</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Measure at the same time of day, ensure consistent posture, and use the same measurement technique for reliable results.
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
                  <strong>Remember:</strong> Body fat percentage is just one metric of health. Focus on overall fitness, strength, and how you feel rather than achieving a specific number.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  These calculations provide estimates. For the most accurate body composition analysis, consider DEXA scans, hydrostatic weighing, or other professional methods.
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
                      Calculate your daily calorie needs to support your body composition goals. Get personalized nutrition recommendations.
                    </p>
                    <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                  </div>
                </CardContent>
              </a>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
              <a href="/bmr-calculator" className="block h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">BMR Calculator</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Calculate your Basal Metabolic Rate to understand your body's baseline calorie needs for optimal health and fitness planning.
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
                      Calculate your Body Mass Index to assess your weight category and complement your body composition analysis.
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