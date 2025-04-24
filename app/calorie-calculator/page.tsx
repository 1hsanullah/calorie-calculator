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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Calculate how many calories you need to consume daily to reach your weight goals. Our advanced calorie calculator provides personalized recommendations based on your body and lifestyle.
          </p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Calculate Your Calorie Needs</h2>
          <p className="mb-4">
            Understanding your caloric needs is essential for achieving your health and fitness goals. Whether you want to lose weight, gain muscle, or maintain your current physique, knowing your daily calorie requirements is the first step toward success.
          </p>
          <p className="mb-4">
            Our comprehensive calorie calculator uses the Mifflin-St Jeor equation, one of the most accurate formulas available for estimating your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). The calculator takes into account your age, gender, height, weight, activity level, and specific goals to provide personalized recommendations.
          </p>
        </div>
        
        <CalorieCalculator />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Understanding Your Results</h2>
          <p className="mb-4">
            Your calculator results include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>BMR (Basal Metabolic Rate)</strong> - The calories your body needs at complete rest</li>
            <li><strong>TDEE (Total Daily Energy Expenditure)</strong> - Your total daily calorie burn including activity</li>
            <li><strong>Target Calories</strong> - The recommended daily calorie intake for your specific goal</li>
            <li><strong>Macronutrient Breakdown</strong> - Suggested protein, carbs, and fat intake</li>
            <li><strong>BMI (Body Mass Index)</strong> - A measurement of your weight relative to your height</li>
          </ul>
          <p>
            Use these insights to create a nutrition plan that aligns with your goals. For weight loss, aim for a moderate calorie deficit. For weight gain, consume a calorie surplus. For weight maintenance, match your calorie intake to your TDEE.
          </p>
        </div>
      </div>
    </main>
  )
} 