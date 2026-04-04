import MacroCalculator from "@/components/macro-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { PieChart, Beef, Wheat, Droplets } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Macro Calculator | Calculate Your Protein, Carbs & Fat Targets',
  description: 'Calculate your daily macronutrient targets: protein, carbohydrates, and fat in grams: personalised to your body, activity level, and goal.',
  keywords: 'macro calculator, macronutrient calculator, protein carbs fat calculator, IIFYM calculator, flexible dieting calculator, macros for weight loss',
  alternates: { canonical: '/macro-calculator' },
  openGraph: {
    title: 'Macro Calculator | Calculate Your Protein, Carbs & Fat Targets',
    description: 'Calculate your daily macronutrient targets personalised to your body, activity level, and goal.',
    url: '/macro-calculator',
    siteName: 'CalorieTest',
    images: [{ url: '/calorie-calculator-og.png', width: 1200, height: 630, alt: 'Macro Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macro Calculator | Calculate Your Protein, Carbs & Fat Targets',
    description: 'Calculate your daily macronutrient targets personalised to your body, activity level, and goal.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function MacroCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are macros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Macros (macronutrients) are the three main nutrient categories that provide calories: protein (4 kcal/g), carbohydrates (4 kcal/g), and fat (9 kcal/g). Every food you eat is made up of some combination of these three. Tracking macros means hitting specific gram targets for each, rather than just counting total calories."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use my macro results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a food tracking app such as MyFitnessPal or Cronometer to log everything you eat. The app will show your protein, carbs, and fat totals for the day. Aim to hit (or come close to) your targets for each macro. Total calories matter most, but hitting protein is the highest priority."
        }
      },
      {
        "@type": "Question",
        "name": "Why is protein the most important macro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Protein is the only macronutrient that builds and repairs muscle tissue. It also has the highest thermic effect (you burn 20–30% of protein calories just digesting it) and is the most satiating macro. For most goals: fat loss, muscle gain, or maintenance: hitting your protein target is the single most important macro priority."
        }
      },
      {
        "@type": "Question",
        "name": "Can I adjust the macro split?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The splits this calculator uses (e.g. 40/30/30 for fat loss) are evidence-based starting points, not rigid rules. Some people do well on lower carb approaches; others perform better with more carbs and less fat. Keep protein high and adjust carbs and fat to your preference and food tolerances."
        }
      }
    ]
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Macro Calculator", url: "/macro-calculator" }]} />
      <SoftwareApplicationSchema
        name="Macro Calculator"
        description="Calculate your ideal macronutrient split for your fitness goal."
        url="/macro-calculator"
      />
      <Script id="macro-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Macro Calculator"
            description="Calculate your daily protein, carbohydrate, and fat targets in grams: personalised to your body size, activity level, and goal."
            trustLine="Mifflin-St Jeor TDEE + evidence-based macro splits"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Macros</h2>

          <MacroCalculator />

          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding the Three Macronutrients</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Each macro plays a distinct role: knowing what each does helps you understand why the splits change with your goal
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full"><Beef className="h-6 w-6 text-blue-600" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Protein · 4 kcal/g</h3>
                      <p className="text-muted-foreground text-sm mt-1">Builds and repairs muscle tissue. Highest satiety per calorie. Highest thermic effect (20–30% burned during digestion). Always the top priority regardless of goal.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full"><Wheat className="h-6 w-6 text-yellow-600" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Carbohydrates · 4 kcal/g</h3>
                      <p className="text-muted-foreground text-sm mt-1">Primary fuel for the brain and high-intensity exercise. Stored as glycogen in muscles and liver. Higher carb intake supports better gym performance and recovery.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full"><Droplets className="h-6 w-6 text-red-500" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Fat · 9 kcal/g</h3>
                      <p className="text-muted-foreground text-sm mt-1">Essential for hormone production (including testosterone), fat-soluble vitamin absorption, and cell membrane health. Never drop below 20% of total calories from fat.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <SEOContent>
            <article>
              <h2 id="what-is-macro-tracking">What Is Macro Tracking (IIFYM)?</h2>
              <p>
                Macro tracking: often called "If It Fits Your Macros" (IIFYM) or flexible dieting: is a nutrition approach where you hit daily gram targets for protein, carbohydrates, and fat rather than following a rigid meal plan. Any food can be eaten as long as your macro totals for the day are met.
              </p>
              <p>
                This approach is more sustainable than eliminating entire food groups because it removes the psychological "forbidden food" effect. Research consistently shows that dietary adherence is the single strongest predictor of long-term success: and a flexible approach dramatically improves adherence.
              </p>

              <h2 id="how-splits-work">How Macro Splits Are Calculated</h2>
              <p>
                The calculator first determines your TDEE (Total Daily Energy Expenditure) using the Mifflin-St Jeor equation plus an activity multiplier. It then divides those calories into protein, carbohydrate, and fat proportions based on your goal:
              </p>
              <ul>
                <li><strong>Fat loss (40/30/30):</strong> Higher protein preserves muscle mass during the deficit. Moderate carbs sustain training performance. Fat fills the remaining calories.</li>
                <li><strong>Maintenance (30/40/30):</strong> Balanced split supporting general health and sustainable eating patterns at calorie equilibrium.</li>
                <li><strong>Muscle gain (30/45/25):</strong> More carbohydrates to fuel resistance training sessions and promote glycogen replenishment, which supports recovery and growth.</li>
              </ul>

              <h2 id="tracking-macros">How to Track Your Macros Effectively</h2>
              <p>
                Use a food logging app: MyFitnessPal, Cronometer, and MacroFactor are the most popular. Weigh food on a kitchen scale rather than estimating portion sizes; visual estimates are notoriously inaccurate and account for most tracking errors.
              </p>
              <p>
                Prioritise hitting your protein target every day. If your carbs or fat are slightly off, total calories and protein will drive 90% of your results. Once protein is consistently met, refine carbs and fat.
              </p>

              <h2 id="faq-section">Frequently Asked Questions</h2>
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i}>
                  <h3>{item.name}</h3>
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </article>
          </SEOContent>

          <RelatedCalculators currentPage="macro-calculator" />
        </div>
      </main>
    </>
  )
}
