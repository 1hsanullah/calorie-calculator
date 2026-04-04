import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { Activity, Dumbbell, Utensils, Scale, Brain, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'TDEE Calculator | Calculate Total Daily Energy Expenditure',
  description: 'Calculate your Total Daily Energy Expenditure (TDEE): the exact number of calories your body burns every day. Essential for weight loss, muscle gain, and maintenance.',
  keywords: 'TDEE calculator, total daily energy expenditure, TDEE, how to calculate TDEE, calories burned per day, maintenance calories',
  alternates: {
    canonical: '/tdee-calculator',
  },
  openGraph: {
    title: 'TDEE Calculator | Calculate Total Daily Energy Expenditure',
    description: 'Calculate your Total Daily Energy Expenditure (TDEE): the exact number of calories your body burns every day.',
    url: '/tdee-calculator',
    siteName: 'CalorieTest',
    images: [{ url: '/calorie-calculator-og.png', width: 1200, height: 630, alt: 'TDEE Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator | Calculate Total Daily Energy Expenditure',
    description: 'Calculate your Total Daily Energy Expenditure (TDEE): the exact number of calories your body burns every day.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function TDEECalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is TDEE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories your body burns in a 24-hour period, accounting for your basal metabolic rate (BMR) plus all physical activity, including exercise, daily movement, and the energy used to digest food."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between TDEE and BMR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest: just to keep your heart beating, lungs breathing, and organs functioning. TDEE is BMR multiplied by an activity factor, meaning it represents your full real-world calorie burn including all movement throughout the day."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use my TDEE to lose weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To lose weight, eat below your TDEE. A deficit of 500 calories per day below your TDEE will result in approximately 1 pound of fat loss per week. Never eat below your BMR for extended periods, as this causes muscle loss and metabolic slowdown."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my TDEE change over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your TDEE changes as your body weight changes, as you age, and as your activity level shifts. If you lose weight, your TDEE decreases because a lighter body burns fewer calories. Recalculate your TDEE every 4–6 weeks to keep your targets accurate."
        }
      }
    ]
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "TDEE Calculator", url: "/tdee-calculator" }]} />
      <SoftwareApplicationSchema
        name="TDEE Calculator"
        description="Calculate your Total Daily Energy Expenditure."
        url="/tdee-calculator"
      />
      <Script
        id="tdee-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="TDEE Calculator"
            description="Calculate your Total Daily Energy Expenditure: the number of calories your body burns every day based on your size and activity level."
            trustLine="Mifflin-St Jeor + activity multipliers"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your TDEE</h2>

          <CalorieCalculator initialGoal="maintain" />

          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your TDEE Result</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Your TDEE is the foundation of every nutrition plan: here is how to apply it
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Scale className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">TDEE = Maintenance</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Eating exactly your TDEE keeps your weight perfectly stable. This is your baseline: every goal is built by adjusting above or below this number.
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
                      <h3 className="font-semibold text-lg">Activity Level Matters Most</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        The activity multiplier is the biggest variable in your TDEE. A sedentary person and a very active person of the same size can have TDEEs that differ by 700–1,000+ calories per day.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Utensils className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">TDEE − 500 = Fat Loss</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Eating 500 calories below your TDEE creates a deficit of 3,500 calories per week: approximately 1 lb of fat loss. This is the single most reliable weight loss formula.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Dumbbell className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">TDEE + 200 = Muscle Gain</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        A lean bulk requires only a modest surplus of 200–300 calories above TDEE. Larger surpluses add fat, not more muscle: muscle synthesis has a biological ceiling.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <RefreshCw className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Recalculate Regularly</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Your TDEE changes as your body weight changes. Recalculate every 4–6 weeks, or any time your weight shifts by more than 5 lbs (2.5 kg), to keep your targets accurate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Brain className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">It Is an Estimate</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        All TDEE formulas carry ±10% variance. If your weight is not responding as expected after 3 weeks of accurate tracking, adjust your intake by 100–150 calories and reassess.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <SEOContent>
            <article>
              <h2 id="what-is-tdee">What is TDEE and Why Does It Matter?</h2>
              <p>
                Total Daily Energy Expenditure (TDEE) is the single most important number in nutrition. It represents the total calories your body burns over a complete 24-hour period: not just during exercise, but throughout everything you do: sleeping, walking, digesting food, working, and exercising.
              </p>
              <p>
                Understanding your TDEE gives you a precise, personalised calorie target for any goal. Want to lose fat? Eat below it. Want to build muscle? Eat slightly above it. Want to stay exactly as you are? Eat exactly at it.
              </p>

              <h2 id="tdee-vs-bmr">TDEE vs BMR: What Is the Difference?</h2>
              <p>
                Your <strong>BMR (Basal Metabolic Rate)</strong> is the number of calories your body burns at complete rest: the minimum energy needed to keep your heart beating, lungs breathing, and organs functioning. Think of it as the calorie cost of being alive.
              </p>
              <p>
                Your <strong>TDEE</strong> is your BMR multiplied by an activity factor that accounts for all real-world movement. For a sedentary office worker, TDEE is roughly 1.2× their BMR. For an athlete training twice a day, it can reach 1.9× their BMR. This is why two people of identical height and weight can have dramatically different calorie needs.
              </p>

              <h2 id="activity-multipliers">The Five Activity Levels Explained</h2>
              <p>
                Choosing the right activity multiplier is the most consequential decision when calculating TDEE. Most people underestimate their activity level, which leads to an underestimated TDEE and unexpected weight loss stalls.
              </p>
              <ul>
                <li><strong>Sedentary (×1.2):</strong> Desk job, no intentional exercise, minimal daily movement.</li>
                <li><strong>Lightly active (×1.375):</strong> Light exercise 1–3 days per week, or a job with moderate walking.</li>
                <li><strong>Moderately active (×1.55):</strong> Exercise 3–5 days per week at moderate intensity.</li>
                <li><strong>Very active (×1.725):</strong> Hard exercise 6–7 days per week, or physically demanding job.</li>
                <li><strong>Extra active (×1.9):</strong> Very hard exercise daily, or two-a-day training sessions.</li>
              </ul>
              <p>
                If you are unsure, choose the level below what you think you are. It is easier to add calories back once you see your weight response than to cut them after stalling.
              </p>

              <h2 id="how-to-use-tdee">How to Apply Your TDEE to Your Goal</h2>
              <p>
                Once you have your TDEE, building a nutrition plan is straightforward arithmetic:
              </p>
              <ul>
                <li><strong>Fat loss:</strong> Subtract 300–500 calories from TDEE for a moderate deficit (0.5–1 lb loss per week). Subtract up to 750–1,000 for a more aggressive cut, but never below your BMR.</li>
                <li><strong>Maintenance:</strong> Eat at TDEE. Track for two weeks: if weight is stable, your TDEE estimate is accurate.</li>
                <li><strong>Muscle gain:</strong> Add 200–300 calories above TDEE for a lean bulk that minimises fat gain while supporting muscle protein synthesis.</li>
              </ul>
            </article>
          </SEOContent>

          <SEOContent>
            <section>
              <h2 id="faq">Frequently Asked Questions</h2>
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="mb-4">
                  <h3>{item.name}</h3>
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </section>
          </SEOContent>

          <RelatedCalculators currentPage="tdee-calculator" />
        </div>
      </main>
    </>
  )
}
