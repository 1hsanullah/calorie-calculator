import CalorieCalculator from "@/components/calorie-calculator"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
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
