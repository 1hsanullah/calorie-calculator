import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, Scale, BookOpen, Heart, User, TrendingDown, Flame, Dumbbell, Target, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie & Fitness Calculators | Free Health & Wellness Tools',
  description: 'Free online fitness calculators including calorie, BMR, body fat percentage, weight loss, and more. Comprehensive tools to help you reach your health goals.',
  keywords: 'calorie calculator, BMR calculator, body fat percentage calculator, weight loss calculator, calorie deficit calculator, maintenance calorie calculator, TDEE calculator, fitness calculators',
  alternates: {
    canonical: '/',
  },
}

const calculators = [
  {
    href: '/calorie-calculator',
    icon: Calculator,
    title: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs based on your age, gender, height, weight, and activity level. Get personalised macronutrient recommendations.',
  },
  {
    href: '/bmr-calculator',
    icon: Heart,
    title: 'BMR Calculator',
    description: 'Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest. Essential for accurate diet planning.',
  },
  {
    href: '/body-fat-percentage-calculator',
    icon: User,
    title: 'Body Fat Calculator',
    description: 'Estimate your body fat percentage using scientifically validated measurement methods. Track body composition over time.',
  },
  {
    href: '/bmi-calculator',
    icon: Scale,
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to determine if you are in a healthy weight range. Quick assessment based on height and weight.',
  },
  {
    href: '/weight-loss-calculator',
    icon: TrendingDown,
    title: 'Weight Loss Calculator',
    description: 'Set a goal weight and a target date. We calculate exactly how many calories to eat each day to get there on time.',
  },
  {
    href: '/calorie-deficit-calculator',
    icon: Flame,
    title: 'Calorie Deficit Calculator',
    description: 'Calculate your optimal calorie deficit for safe, sustainable fat loss. Find the right balance without losing muscle.',
  },
  {
    href: '/maintenance-calorie-calculator',
    icon: Dumbbell,
    title: 'Maintenance Calorie Calculator',
    description: 'Find your Total Daily Energy Expenditure (TDEE): the number of calories needed to maintain your current weight.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-foreground selection:text-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CalorieTest",
            "url": "https://www.calorietest.com",
            "logo": "https://www.calorietest.com/favicon.svg",
            "description": "Free online fitness calculators to help you reach your health and fitness goals. Calculate calories, BMR, BMI, body fat, and more.",
            "sameAs": []
          })
        }}
      />

      {/* ── Hero ── */}
      <section className="container mx-auto px-4 pt-20 pb-14 md:pt-28 md:pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border bg-muted text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground" />
          </span>
          Scientifically Accurate
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-5 text-foreground">
          Fitness Calculators
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Free tools to calculate your calories, macros, body fat, and more.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-left">
          <Target className="h-4 w-4 text-foreground shrink-0" aria-hidden="true" />
          <span className="text-muted-foreground">
            <strong className="text-foreground font-semibold">New:</strong>{' '}
            <Link href="/weight-loss-calculator" className="underline underline-offset-2 hover:text-foreground transition-colors">
              Weight Loss Calculator
            </Link>{' '}
            now lets you set a goal date and calculates your daily target backwards from your deadline.
          </span>
        </div>
      </section>

      {/* ── Calculator Grid ── */}
      <section aria-label="Calculators" className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {calculators.map(({ href, icon: Icon, title, description }) => (
            <Link key={href} href={href} className="group block">
              <Card className="h-full border border-border bg-card hover:bg-muted transition-colors duration-200 cursor-pointer">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-muted group-hover:bg-border p-2.5 rounded-lg w-fit mb-4 transition-colors duration-200">
                    <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground/60 group-hover:text-foreground group-hover:gap-2 transition-all duration-200">
                    Calculate now
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="container mx-auto px-4 pb-20">
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold tracking-tight mb-1">Educational Resources</h2>
          <p className="text-muted-foreground mb-6">Articles on nutrition, calorie counting, and weight management</p>

          <Link href="/articles" className="group block">
            <Card className="border border-border bg-card hover:bg-muted transition-colors duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted group-hover:bg-border p-2.5 rounded-lg shrink-0 transition-colors duration-200">
                    <BookOpen className="h-5 w-5 text-foreground" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                      Explore Our Articles
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Expert guides on nutrition, weight management, and healthy living — including{' '}
                      <span className="underline underline-offset-2">How Accurate Are Calorie Calculators?</span>
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5" aria-hidden="true" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-10 max-w-2xl mx-auto">
          Our calculators provide accurate estimates. Always consult a healthcare professional before making significant changes to your diet or exercise routine.
        </p>
      </section>
    </main>
  )
}
