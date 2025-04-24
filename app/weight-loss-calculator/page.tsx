import CalorieCalculator from "@/components/calorie-calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
  description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed, timeframes, and get tailored recommendations.',
  keywords: 'weight loss calculator, diet calculator, lose weight calculator, fat loss calculator, weight loss planner, calorie deficit',
  alternates: {
    canonical: '/weight-loss-calculator',
  },
}

export default function WeightLossCalculatorPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#E0E0E0" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Weight Loss Calculator</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Plan your weight loss journey with precision using our weight loss calculator. Set realistic goals, determine your ideal calorie intake, and create a personalized timeline to reach your target weight.
          </p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">How Our Weight Loss Calculator Works</h2>
          <p className="mb-4">
            Our weight loss calculator uses scientific formulas to determine your daily calorie needs and how many calories you should consume to lose weight safely and effectively. The calculator takes into account your:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Current weight, height, age, and gender</li>
            <li>Activity level and lifestyle factors</li>
            <li>Target weight goal</li>
            <li>Desired timeframe or rate of weight loss</li>
          </ul>
          <p className="mb-4">
            For healthy, sustainable weight loss, experts recommend losing 1-2 pounds (0.5-1 kg) per week. This typically requires a calorie deficit of 500-1000 calories per day.
          </p>
        </div>
        
        <CalorieCalculator initialGoal="lose_gain" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Tips for Successful Weight Loss</h2>
          <p className="mb-4">
            Your weight loss calculator results provide the foundation for your journey. Here are some evidence-based strategies to help you succeed:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Focus on whole foods</strong> - Prioritize fruits, vegetables, lean proteins, and whole grains to feel fuller on fewer calories</li>
            <li><strong>Stay hydrated</strong> - Drinking water before meals can reduce hunger and boost metabolism</li>
            <li><strong>Prioritize protein</strong> - Higher protein intake helps preserve muscle mass during weight loss and increases satiety</li>
            <li><strong>Include strength training</strong> - Building muscle increases your metabolic rate and improves body composition</li>
            <li><strong>Get adequate sleep</strong> - Poor sleep can disrupt hunger hormones and lead to increased cravings</li>
            <li><strong>Track your progress</strong> - Monitor your food intake and weight changes to stay accountable</li>
          </ul>
          <p>
            Remember that weight loss is rarely linear - you may experience plateaus or fluctuations. Focus on consistency and be patient with the process for long-term success.
          </p>
        </div>
      </div>
    </main>
  )
} 