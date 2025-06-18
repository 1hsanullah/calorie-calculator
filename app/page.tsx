import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, Dumbbell, Scale, Flame, BookOpen, Heart, User, TrendingDown } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie & Fitness Calculators | Free Health & Wellness Tools',
  description: 'Free online fitness calculators including calorie, BMR, body fat percentage, weight loss, and more. Comprehensive tools to help you reach your health goals.',
  keywords: 'calorie calculator, BMR calculator, body fat percentage calculator, weight loss calculator, calorie deficit calculator, maintenance calorie calculator, TDEE calculator, fitness calculators',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Calorie & Fitness Calculators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive free tools to help you reach your health, fitness, and wellness goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/calorie-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Calculator className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Calorie Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Calculate your daily calorie needs based on your age, gender, height, weight, and activity level.
                    Get personalized macronutrient recommendations for your goals.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/bmr-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">BMR Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest.
                    Essential for creating effective fitness and nutrition plans.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/body-fat-percentage-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <User className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Body Fat Percentage Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Estimate your body fat percentage using proven measurement methods. Track your body composition
                    and fitness progress effectively.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/bmi-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Scale className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">BMI Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Calculate your Body Mass Index to determine if you're in a healthy weight range. Quick and easy
                    assessment based on your height and weight.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/weight-loss-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <TrendingDown className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Weight Loss Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Plan your weight loss journey with precision. Calculate how long it will take to reach your target weight
                    and get a personalized calorie plan.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/calorie-deficit-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Flame className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Calorie Deficit Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Calculate the exact calorie deficit you need for effective weight loss. Determine how many calories 
                    to consume daily to reach your goals.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/maintenance-calorie-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Dumbbell className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Maintenance Calorie Calculator</h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Discover exactly how many calories you need to maintain your current weight. Understand your body's
                    energy requirements for optimal health.
                  </p>
                  <span className="text-primary font-medium underline hover:no-underline">Calculate now</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
        
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Educational Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about nutrition, calorie counting, and healthy weight management
            </p>
          </div>
          
          <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <Link href="/blog" className="block">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Explore Our Blog
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Read expert articles about nutrition, weight management, and healthy living. Our latest article 
                      "<Link href="/blog/how-accurate-are-calorie-calculators" className="text-primary hover:underline">How Accurate Are Calorie Calculators?</Link>" 
                      explains the science behind calorie calculations and how to get the most reliable results.
                    </p>
                    <span className="text-primary font-medium underline hover:no-underline">View all articles</span>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Our calculators provide accurate estimates to help you reach your health and fitness goals.
            Always consult with a healthcare professional before making significant changes to your diet or exercise routine.
          </p>
        </div>
      </div>
    </main>
  )
}
