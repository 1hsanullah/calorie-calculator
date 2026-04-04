import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Dumbbell, Utensils, Activity, Divide, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Maintenance Calorie Calculator | Find Your Daily Calorie Needs',
  description: 'Calculate your maintenance calories to maintain your current weight with our precise maintenance calorie calculator. Understand your TDEE and BMR for better nutrition planning.',
  keywords: 'maintenance calorie calculator, maintenance calories, TDEE calculator, BMR calculator, maintain weight, calorie maintenance',
  alternates: {
    canonical: '/maintenance-calorie-calculator',
  },
  openGraph: {
    title: 'Maintenance Calorie Calculator | Find Your Daily Calorie Needs',
    description: 'Calculate your maintenance calories to maintain your current weight with our precise maintenance calorie calculator. Understand your TDEE and BMR.',
    url: '/maintenance-calorie-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: '/calorie-calculator-og.png',
        width: 1200,
        height: 630,
        alt: 'Maintenance Calorie Calculator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maintenance Calorie Calculator | Find Your Daily Calorie Needs',
    description: 'Calculate your maintenance calories to maintain your current weight with our precise maintenance calorie calculator. Understand your TDEE and BMR.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function MaintenanceCalorieCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are maintenance calories and TDEE the same thing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, maintenance calories are scientifically identical to your Total Daily Energy Expenditure (TDEE). They represent the exact number of calories your body burns in a 24-hour period."
        }
      },
      {
        "@type": "Question",
        "name": "Why do my maintenance calories change?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your maintenance calories fluctuate based on body composition changes (losing fat or gaining muscle), daily activity levels (NEAT), and age. As you lose weight, a smaller body requires fewer calories to sustain itself."
        }
      },
      {
        "@type": "Question",
        "name": "How long should a diet break at maintenance calories last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To effectively reverse metabolic adaptation, replenish glycogen stores, and normalize hormone levels during a prolonged fat loss phase, a maintenance diet break should last roughly 10 to 14 days."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Maintenance Calorie Calculator", url: "/maintenance-calorie-calculator" }]} />
      <SoftwareApplicationSchema
        name="Maintenance Calorie Calculator"
        description="Find your TDEE, the exact calories needed to maintain your current weight."
        url="/maintenance-calorie-calculator"
      />
      <Script
        id="maintenance-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Maintenance Calorie Calculator"
            description="Discover exactly how many calories you need to maintain your current weight."
            trustLine="Accurate TDEE calculation"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Maintenance Calories</h2>

          <CalorieCalculator initialGoal="maintain" />

          {/* Redesigned Tips Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to Use Your Maintenance Calorie Results</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Apply these strategies to effectively maintain your weight and optimize your health
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Utensils className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Focus on Balanced Nutrition</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Distribute your calories across all macronutrients - proteins, carbohydrates, and fats. A balanced intake ensures you get all the nutrients your body needs for optimal function.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <ClipboardCheck className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Monitor Your Weight</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Check your weight weekly to ensure you're maintaining. Small fluctuations are normal, but consistent changes may indicate your maintenance calories need adjustment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Divide className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Make Adjustments as Needed</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        If you notice unintended weight changes, adjust your calorie intake by 100-200 calories at a time until you find your true maintenance level.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Activity className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Recalculate Periodically</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Maintenance calories can change with age, activity level, and body composition. Reassess every few months or after significant lifestyle changes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg">
                    <strong>Did you know?</strong> Your maintenance calorie needs are not static. They can shift based on changes in physical activity, muscle mass, age, hormone levels, and even environmental factors like temperature.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For optimal health, aim to meet your calorie needs with nutrient-dense foods and maintain a consistent exercise routine that includes both cardiovascular and strength training activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ============================================ */}
          {/* SEO DOMINATION CONTENT                       */}
          {/* ============================================ */}
          <SEOContent>
            <article>
              <h2 id="what-are-maintenance-calories">What Are Maintenance Calories?</h2>
              <p>
                Your <strong>maintenance calories</strong> represent the exact energetic equilibrium of your body. It is the
                precise number of calories you must consume daily to ensure that your body weight neither increases nor decreases.
              </p>
              <p>
                In clinical nutrition, this point of equilibrium is referred to as your <strong>Total Daily Energy Expenditure (TDEE)</strong>.
                When your caloric intake perfectly matches your TDEE, you are in an "isocaloric" state. Operating at maintenance
                is often the unsung hero of the fitness world, it is the optimal metabolic zone for athletes seeking to maximize
                performance, recover from severe dieting phases, or simply live a healthy, sustainable lifestyle without the stress
                of tracking a deficit or surplus.
              </p>

              <h2 id="how-to-calculate-maintenance-calories">The Math Behind Maintenance</h2>
              <p>
                To find your maintenance threshold, our calculator first establishes your Basal Metabolic Rate (BMR) using the
                highly accurate <strong>Mifflin-St Jeor equation</strong>.
              </p>
              <ul>
                <li><strong>BMR:</strong> The calories your body burns at absolute rest to sustain life (breathing, organ function).</li>
              </ul>
              <p>
                Once your baseline BMR is established, the algorithm applies an activity multiplier based on your stated lifestyle.
                This encompasses your NEAT (Non-Exercise Activity Thermogenesis, like fidgeting and walking), TEF (Thermic Effect of Food),
                and EAT (Exercise Activity Thermogenesis). The sum of these factors provides your final maintenance calorie number.
              </p>

              <h2 id="when-to-eat-at-maintenance">When Should You Eat at Maintenance?</h2>
              <p>
                Many fitness enthusiasts mistakenly believe they must always be "bulking" or "cutting." In reality, spending
                dedicated phases at your maintenance calories is crucial for long-term health and physique retention.
              </p>

              <h3>1. The "Diet Break" Phase</h3>
              <p>
                Prolonged caloric deficits inevitably lead to metabolic adaptation, your body downregulates hormones like thyroid (T3)
                and testosterone, while aggressively increasing ghrelin (the hunger hormone) to prevent further weight loss. Taking a
                2-to-4 week "diet break" at true maintenance calories reverses this metabolic slowdown, replenishes glycogen stores,
                and prepares your body for another successful fat loss phase.
              </p>

              <h3>2. Body Recomposition</h3>
              <p>
                "Recomping" is the holy grail of fitness: losing body fat while simultaneously building muscle. While difficult
                for advanced bodybuilders, eating exactly at maintenance calories while engaging in a progressive overload
                resistance training program is the most effective way for beginners and intermediate lifters to fundamentally
                reshape their body composition without seeing the scale move.
              </p>

              <h3>3. Athletic Performance and Recovery</h3>
              <p>
                If your primary goal is performance, running faster, lifting heavier, or mastering a sport, operating in a calorie
                deficit will severely compromise your recovery. Eating at maintenance provides your central nervous system and
                muscular system with the exact substrate required to repair micro-tears and replenish ATP stores.
              </p>

              <h2 id="adjusting-maintenance-calories">Dynamic Maintenance: Why the Number Changes</h2>
              <p>
                Your maintenance calories are not a static number permanently etched in stone. They are highly dynamic.
                As you lose weight, your body physically shrinks, requiring fewer calories to sustain its mass, thereby lowering
                your maintenance threshold. Conversely, if you add 10 pounds of dense skeletal muscle, your maintenance calories
                will increase, as muscle is highly metabolically active tissue.
              </p>
              <p>
                We recommend using this calculator to re-assess your maintenance calories every 3 to 4 months, or following any
                fluctuation in body weight exceeding 5 pounds.
              </p>
            </article>
          </SEOContent>

          {/* Related Calculators Section */}
          <RelatedCalculators currentPage="maintenance-calorie-calculator" />
        </div>
      </main>
    </>
  )
} 