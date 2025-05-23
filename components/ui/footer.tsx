import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Calorie Calculators</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calorie-calculator" className="text-primary hover:underline">
                  Calorie Calculator
                </Link>
              </li>
              <li>
                <Link href="/weight-loss-calculator" className="text-primary hover:underline">
                  Weight Loss Calculator
                </Link>
              </li>
              <li>
                <Link href="/calorie-deficit-calculator" className="text-primary hover:underline">
                  Calorie Deficit Calculator
                </Link>
              </li>
              <li>
                <Link href="/maintenance-calorie-calculator" className="text-primary hover:underline">
                  Maintenance Calorie Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-primary hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/how-accurate-are-calorie-calculators" className="text-primary hover:underline">
                  Calorie Calculator Accuracy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Free online calculators to help you reach your health and fitness goals. Calculate your daily calorie needs, weight loss targets, and more.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Disclaimer</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The information provided is for educational purposes only. Always consult with a healthcare professional before making changes to your diet or exercise routine.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Calorie Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 