import BMICalculator from "@/components/bmi-calculator"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Scale, Calculator, Heart, Target, TrendingUp, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'BMI Calculator | Calculate Your Body Mass Index',
  description: 'Calculate your BMI (Body Mass Index) instantly with our free online calculator. Determine if you\'re underweight, normal weight, overweight, or obese based on your height and weight.',
  keywords: 'BMI calculator, body mass index calculator, weight calculator, health calculator, obesity calculator, underweight calculator',
  alternates: {
    canonical: '/bmi-calculator',
  },
}

export default function BMICalculatorPage() {
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
                  BMI Calculator
                </h1>
              </div>
              
              {/* Expandable Content - Centered */}
              <div className="max-w-3xl mx-auto">
                <div className="group" data-state="closed">
                  <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                  
                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Calculate your Body Mass Index to determine if you're in a healthy weight range.
                      </p>
                      <p className="leading-relaxed">
                        BMI (Body Mass Index) is a widely used screening tool that measures body fat based on your height and weight. It provides a quick assessment of whether you fall into a healthy weight range and is used by healthcare professionals worldwide as an initial screening tool for weight-related health risks.
                      </p>
                      <p className="leading-relaxed">
                        While BMI is useful for general health screening, it doesn't distinguish between muscle mass and fat mass, so it may not be accurate for athletes, elderly individuals, or those with high muscle mass. It's best used as one of several health indicators rather than a definitive measure of health.
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
        
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your BMI</h2>
        
        <BMICalculator />
        
        {/* Understanding BMI Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your BMI</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Learn how to interpret your BMI results and use them as part of a comprehensive health assessment
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
                    <h3 className="font-semibold text-lg">BMI Categories</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Underweight (below 18.5), Normal (18.5-24.9), Overweight (25-29.9), and Obese (30+). Each category has different health implications.
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
                    <h3 className="font-semibold text-lg">BMI Limitations</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      BMI doesn't account for muscle mass, bone density, or fat distribution. Athletes and elderly may get inaccurate readings.
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
                    <h3 className="font-semibold text-lg">Health Implications</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      BMI outside normal range may increase risk of heart disease, diabetes, and other conditions. Consult healthcare providers for guidance.
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
                    <h3 className="font-semibold text-lg">Beyond BMI</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Consider waist circumference, body fat percentage, and overall fitness level for a complete health picture.
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
                    <h3 className="font-semibold text-lg">Healthy Goals</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Focus on sustainable lifestyle changes including balanced nutrition, regular exercise, and adequate sleep for long-term health.
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
                  <strong>Important:</strong> BMI is a screening tool, not a diagnostic measure. It should be used alongside other health indicators for a complete assessment.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Always consult with healthcare professionals before making significant changes to your diet or exercise routine, especially if you have underlying health conditions.
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
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
              <a href="/body-fat-percentage-calculator" className="block h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Body Fat Calculator</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Get a more detailed body composition analysis with our body fat percentage calculator using proven measurement methods.
                    </p>
                    <span className="text-primary font-medium">Calculate now →</span>
                  </div>
                </CardContent>
              </a>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
              <a href="/calorie-calculator" className="block h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Calorie Calculator</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Calculate your daily calorie needs based on your BMI, activity level, and health goals for optimal nutrition planning.
                    </p>
                    <span className="text-primary font-medium">Calculate now →</span>
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