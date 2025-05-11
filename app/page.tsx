import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, Dumbbell, Scale, Flame } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie & Weight Loss Calculators | Free Fitness Tools',
  description: 'Free online calorie and weight loss calculators to help you reach your health and fitness goals. Calculate calories, plan your weight loss, and more.',
  keywords: 'calorie calculator, weight loss calculator, calorie deficit calculator, maintenance calorie calculator, TDEE calculator, BMR calculator',
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
            Calorie & Weight Loss Calculators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Free online tools to help you reach your health and fitness goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
            <Link href="/weight-loss-calculator" className="block h-full">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <Scale className="h-7 w-7 text-primary" />
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
