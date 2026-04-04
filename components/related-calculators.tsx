import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, Dumbbell, Scale, Flame, Heart, User, TrendingDown, Activity, Beef, PieChart, Droplets, Target } from 'lucide-react'

interface RelatedCalculatorsProps {
  currentPage: string
}

const calculators = [
  {
    id: 'calorie-calculator',
    title: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs based on your goals.',
    icon: Calculator,
    href: '/calorie-calculator'
  },
  {
    id: 'bmr-calculator',
    title: 'BMR Calculator',
    description: 'Calculate your Basal Metabolic Rate and daily energy expenditure.',
    icon: Heart,
    href: '/bmr-calculator'
  },
  {
    id: 'body-fat-percentage-calculator',
    title: 'Body Fat Calculator',
    description: 'Estimate your body fat percentage using measurements.',
    icon: User,
    href: '/body-fat-percentage-calculator'
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to assess your weight category.',
    icon: Scale,
    href: '/bmi-calculator'
  },
  {
    id: 'weight-loss-calculator',
    title: 'Weight Loss Calculator',
    description: 'Set a target date and get a day-by-day calorie plan to reach your goal weight.',
    icon: TrendingDown,
    href: '/weight-loss-calculator'
  },
  {
    id: 'calorie-deficit-calculator',
    title: 'Calorie Deficit Calculator',
    description: 'Calculate your optimal calorie deficit for weight loss.',
    icon: Flame,
    href: '/calorie-deficit-calculator'
  },
  {
    id: 'maintenance-calorie-calculator',
    title: 'Maintenance Calorie Calculator',
    description: 'Determine the calories needed to maintain your current weight.',
    icon: Dumbbell,
    href: '/maintenance-calorie-calculator'
  },
  {
    id: 'tdee-calculator',
    title: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure — calories burned per day.',
    icon: Activity,
    href: '/tdee-calculator'
  },
  {
    id: 'protein-intake-calculator',
    title: 'Protein Calculator',
    description: 'Find your ideal daily protein intake for your goal and body weight.',
    icon: Beef,
    href: '/protein-intake-calculator'
  },
  {
    id: 'macro-calculator',
    title: 'Macro Calculator',
    description: 'Calculate your daily protein, carbs, and fat targets in grams.',
    icon: PieChart,
    href: '/macro-calculator'
  },
  {
    id: 'water-intake-calculator',
    title: 'Water Intake Calculator',
    description: 'Find out how much water you should drink per day.',
    icon: Droplets,
    href: '/water-intake-calculator'
  },
  {
    id: 'ideal-body-weight-calculator',
    title: 'Ideal Body Weight Calculator',
    description: 'Find your healthy weight range using four clinical formulas.',
    icon: Target,
    href: '/ideal-body-weight-calculator'
  }
]

export function RelatedCalculators({ currentPage }: RelatedCalculatorsProps) {
  // Filter out the current page
  const relatedCalculators = calculators.filter(calc => calc.id !== currentPage)
  
  return (
    <div className="mt-12 md:mt-16">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Related Calculators</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore our other calculators to help you reach your health and fitness goals
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedCalculators.map((calculator) => {
          const Icon = calculator.icon
          
          return (
            <Link href={calculator.href} key={calculator.id} className="group cursor-pointer block">
              <Card className="h-full border border-border bg-card hover:bg-muted transition-colors duration-200 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-muted group-hover:bg-border p-2.5 rounded-lg shrink-0 transition-colors duration-200">
                      <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-200 text-sm">
                        {calculator.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                        {calculator.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 