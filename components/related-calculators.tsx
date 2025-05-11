import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, Dumbbell, Scale, Flame } from 'lucide-react'

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
    id: 'weight-loss-calculator',
    title: 'Weight Loss Calculator',
    description: 'Find out how long it will take to reach your weight loss goal.',
    icon: Scale,
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
            <Link href={calculator.href} key={calculator.id} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {calculator.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
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