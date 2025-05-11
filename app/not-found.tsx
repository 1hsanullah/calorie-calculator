import Link from 'next/link'
import { Calculator, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
      <div className="container max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <span className="text-5xl">🔍</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We couldn't find the page you were looking for.
          </p>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Try our popular calculators instead:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-3 px-4 justify-start" asChild>
                <Link href="/calorie-calculator" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <div className="text-left">
                    <span className="font-medium">Calorie Calculator</span>
                    <p className="text-xs text-muted-foreground">Calculate your daily calorie needs</p>
                  </div>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-3 px-4 justify-start" asChild>
                <Link href="/weight-loss-calculator" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <div className="text-left">
                    <span className="font-medium">Weight Loss Calculator</span>
                    <p className="text-xs text-muted-foreground">Plan your weight loss journey</p>
                  </div>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-3 px-4 justify-start" asChild>
                <Link href="/calorie-deficit-calculator" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <div className="text-left">
                    <span className="font-medium">Calorie Deficit Calculator</span>
                    <p className="text-xs text-muted-foreground">Calculate calories for weight loss</p>
                  </div>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-3 px-4 justify-start" asChild>
                <Link href="/maintenance-calorie-calculator" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <div className="text-left">
                    <span className="font-medium">Maintenance Calculator</span>
                    <p className="text-xs text-muted-foreground">Find your maintenance calories</p>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
} 