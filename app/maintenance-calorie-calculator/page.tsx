import CalorieCalculator from "@/components/calorie-calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Maintenance Calorie Calculator | Find Your Daily Calorie Needs',
  description: 'Calculate your maintenance calories to maintain your current weight with our precise maintenance calorie calculator. Understand your TDEE and BMR for better nutrition planning.',
  keywords: 'maintenance calorie calculator, maintenance calories, TDEE calculator, BMR calculator, maintain weight, calorie maintenance',
  alternates: {
    canonical: '/maintenance-calorie-calculator',
  },
}

export default function MaintenanceCalorieCalculatorPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#E0E0E0" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Maintenance Calorie Calculator</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover exactly how many calories you need to maintain your current weight. Our maintenance calorie calculator provides personalized results based on your body metrics and activity level.
          </p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Understanding Maintenance Calories</h2>
          <p className="mb-4">
            Maintenance calories are the exact number of calories your body needs to maintain its current weight. This value, also known as your Total Daily Energy Expenditure (TDEE), is influenced by several factors including your basal metabolic rate (BMR), activity level, age, gender, and body composition.
          </p>
          <p>
            Knowing your maintenance calorie needs is essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Maintaining your current weight after reaching your goals</li>
            <li>Creating a strategic starting point for weight loss or muscle gain</li>
            <li>Understanding your body's energy requirements</li>
            <li>Planning effective meal plans and nutrition strategies</li>
          </ul>
        </div>
        
        <CalorieCalculator initialGoal="maintain" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">How to Use Your Maintenance Calorie Results</h2>
          <p className="mb-4">
            Your calculated maintenance calories represent the number of calories you should consume daily to maintain your current weight. For optimal health:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Focus on balanced nutrition across all macronutrients</li>
            <li>Monitor your weight weekly to ensure you're maintaining</li>
            <li>Adjust your calorie intake if you notice unintended weight changes</li>
            <li>Remember that maintenance calories can change with age, activity level, and body composition</li>
          </ul>
          <p>
            Maintenance calories are not static - they can change as your lifestyle, activity level, or body composition changes. Recalculate periodically to stay on track with your goals.
          </p>
        </div>
      </div>
    </main>
  )
} 