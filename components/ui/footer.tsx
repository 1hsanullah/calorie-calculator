import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border py-10 md:py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <p className="font-bold text-lg mb-2">CalorieTest</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Free online calculators to help you reach your health and fitness goals. Calculate your daily calorie needs, weight loss targets, and more.
            </p>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-xs">
              For educational purposes only. Always consult a healthcare professional before making significant changes to your diet or exercise routine.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">Calorie Tools</h3>
            <ul className="space-y-2">
              {[
                { href: '/calorie-calculator', label: 'Calorie Calculator' },
                { href: '/weight-loss-calculator', label: 'Weight Loss Calculator' },
                { href: '/calorie-deficit-calculator', label: 'Deficit Calculator' },
                { href: '/maintenance-calorie-calculator', label: 'Maintenance Calories' },
                { href: '/tdee-calculator', label: 'TDEE Calculator' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">Body & Nutrition</h3>
            <ul className="space-y-2">
              {[
                { href: '/bmr-calculator', label: 'BMR Calculator' },
                { href: '/bmi-calculator', label: 'BMI Calculator' },
                { href: '/body-fat-percentage-calculator', label: 'Body Fat Calculator' },
                { href: '/protein-intake-calculator', label: 'Protein Calculator' },
                { href: '/macro-calculator', label: 'Macro Calculator' },
                { href: '/water-intake-calculator', label: 'Water Intake Calculator' },
                { href: '/ideal-body-weight-calculator', label: 'Ideal Body Weight' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: '/articles', label: 'Articles & Guides' },
                { href: '/articles/how-accurate-are-calorie-calculators', label: 'Calculator Accuracy' },
                { href: '/about', label: 'About Us' },
                { href: '/sitemap-page', label: 'Sitemap' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CalorieTest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
