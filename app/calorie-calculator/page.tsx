import CalorieCalculator from "@/components/calorie-calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
  description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
  keywords: 'calorie calculator, weight loss calculator, TDEE calculator, BMR calculator, macro calculator, diet planner',
  alternates: {
    canonical: '/calorie-calculator',
  },
}

export default function CalorieCalculatorPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#E0E0E0" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Calorie Calculator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate how many calories you need to consume daily to reach your weight goals.
          </p>
        </div>
        <CalorieCalculator />
      </div>
    </main>
  )
} 