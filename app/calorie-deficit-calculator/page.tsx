import CalorieCalculator from "@/components/calorie-calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Calorie Deficit Calculator | Calculate Calories for Weight Loss',
  description: 'Use our calorie deficit calculator to determine exactly how many calories you need to consume for effective weight loss. Get a personalized plan based on your goals.',
  keywords: 'calorie deficit calculator, weight loss calculator, calorie deficit, how to create calorie deficit, caloric deficit',
  alternates: {
    canonical: '/calorie-deficit-calculator',
  },
}

export default function CalorieDeficitCalculatorPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#E0E0E0" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Calorie Deficit Calculator</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Calculate the exact calorie deficit you need to achieve your weight loss goals. Our calorie deficit calculator helps you determine how many calories to cut to lose weight effectively and sustainably.
          </p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">What is a Calorie Deficit?</h2>
          <p className="mb-4">
            A calorie deficit occurs when you consume fewer calories than your body burns. This forces your body to use stored fat for energy, resulting in weight loss. The recommended healthy calorie deficit for sustainable weight loss is 500-1000 calories per day, which typically results in 1-2 pounds of weight loss per week.
          </p>
          <p>
            Use the calculator below to determine your daily calorie needs and create a personalized calorie deficit plan based on your weight loss goals.
          </p>
        </div>
        
        <CalorieCalculator initialGoal="lose_gain" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">How to Use Your Calorie Deficit Results</h2>
          <p className="mb-4">
            The calculator provides your recommended daily calorie intake to achieve your weight loss goals. For sustainable results:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Focus on nutrient-dense, whole foods to feel satisfied on fewer calories</li>
            <li>Include plenty of protein to preserve muscle mass during weight loss</li>
            <li>Combine your calorie deficit with regular physical activity for optimal results</li>
            <li>Stay consistent and patient - sustainable weight loss takes time</li>
          </ul>
          <p>
            Remember that while a calorie deficit is necessary for weight loss, going too low can slow your metabolism and lead to nutrient deficiencies. Always aim for a moderate, sustainable approach.
          </p>
        </div>
      </div>
    </main>
  )
} 