import Link from 'next/link'
import { Metadata } from 'next'
import { Calculator, Scale, Heart, User, TrendingDown, Flame, Dumbbell, Activity, Beef, PieChart, Droplets, Target, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap | CalorieTest.com',
  description: 'Complete sitemap of all free fitness calculators and articles on CalorieTest.com.',
  alternates: {
    canonical: '/sitemap-page',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const calculators = [
  {
    href: '/calorie-calculator',
    icon: Calculator,
    name: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs for weight loss, maintenance, or muscle gain.',
  },
  {
    href: '/bmr-calculator',
    icon: Heart,
    name: 'BMR Calculator',
    description: 'Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation.',
  },
  {
    href: '/bmi-calculator',
    icon: Scale,
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to determine your healthy weight range.',
  },
  {
    href: '/body-fat-percentage-calculator',
    icon: User,
    name: 'Body Fat Percentage Calculator',
    description: 'Estimate your body fat using the Navy and Army measurement formulas.',
  },
  {
    href: '/weight-loss-calculator',
    icon: TrendingDown,
    name: 'Weight Loss Calculator',
    description: 'Set a goal weight and target date to get your personalised daily calorie target.',
  },
  {
    href: '/calorie-deficit-calculator',
    icon: Flame,
    name: 'Calorie Deficit Calculator',
    description: 'Calculate a safe calorie deficit for sustainable fat loss.',
  },
  {
    href: '/maintenance-calorie-calculator',
    icon: Dumbbell,
    name: 'Maintenance Calorie Calculator',
    description: 'Find your TDEE, the number of calories to maintain your current weight.',
  },
  {
    href: '/tdee-calculator',
    icon: Activity,
    name: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure with activity multipliers.',
  },
  {
    href: '/protein-intake-calculator',
    icon: Beef,
    name: 'Protein Intake Calculator',
    description: 'Find your ideal daily protein intake based on your goal and activity level.',
  },
  {
    href: '/macro-calculator',
    icon: PieChart,
    name: 'Macro Calculator',
    description: 'Calculate your optimal protein, carbohydrate, and fat split for your goal.',
  },
  {
    href: '/water-intake-calculator',
    icon: Droplets,
    name: 'Water Intake Calculator',
    description: 'Calculate your daily water intake based on weight, exercise, and climate.',
  },
  {
    href: '/ideal-body-weight-calculator',
    icon: Target,
    name: 'Ideal Body Weight Calculator',
    description: 'Calculate your ideal body weight using four clinical formulas.',
  },
]

const articles = [
  {
    href: '/articles/how-accurate-are-calorie-calculators',
    name: 'How Accurate Are Calorie Calculators?',
    description: 'The science behind calorie calculation accuracy and how to get more reliable results.',
  },
  {
    href: '/articles/how-to-calculate-daily-calorie-needs',
    name: 'How to Calculate Daily Calorie Needs',
    description: 'A complete guide to calculating your TDEE and setting calorie targets for your goal.',
  },
]

const pages = [
  { href: '/', name: 'Home', description: 'Free online fitness and calorie calculators.' },
  { href: '/articles', name: 'Articles', description: 'Educational articles on nutrition and fitness.' },
  { href: '/about', name: 'About', description: 'About CalorieTest.com.' },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Sitemap</h1>
          <p className="text-muted-foreground text-lg">All pages on CalorieTest.com</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Calculators</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {calculators.map(({ href, icon: Icon, name, description }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                >
                  <div className="bg-primary/10 p-2 rounded-md mt-0.5 shrink-0 group-hover:bg-border transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Articles</h2>
          <ul className="flex flex-col gap-3">
            {articles.map(({ href, name, description }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                >
                  <div className="bg-primary/10 p-2 rounded-md mt-0.5 shrink-0 group-hover:bg-border transition-colors">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{name}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Pages</h2>
          <ul className="flex flex-col gap-3">
            {pages.map(({ href, name, description }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                >
                  <p className="font-medium group-hover:text-primary transition-colors">{name}</p>
                  <span className="text-muted-foreground text-sm">{description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
