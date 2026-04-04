import BMRCalculator from "@/components/bmr-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { Heart, Calculator, User, Activity, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'BMR Calculator | Calculate Your Basal Metabolic Rate',
  description: 'Calculate your Basal Metabolic Rate (BMR) to understand how many calories your body burns at rest. Essential for accurate diet and fitness planning.',
  keywords: 'BMR calculator, basal metabolic rate, resting metabolic rate, RMR calculator, metabolism calculator, daily calories burned at rest',
  alternates: {
    canonical: '/bmr-calculator',
  },
  openGraph: {
    title: 'BMR Calculator | Calculate Your Basal Metabolic Rate',
    description: 'Calculate your Basal Metabolic Rate (BMR) to understand how many calories your body burns at rest. Essential for accurate diet and fitness planning.',
    url: '/bmr-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: '/calorie-calculator-og.png',
        width: 1200,
        height: 630,
        alt: 'BMR Calculator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMR Calculator | Calculate Your Basal Metabolic Rate',
    description: 'Calculate your Basal Metabolic Rate (BMR) to understand how many calories your body burns at rest. Essential for accurate diet and fitness planning.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function BMRCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Mifflin-St Jeor equation used in this BMR calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Mifflin-St Jeor equation is a formula used to estimate Basal Metabolic Rate (BMR) developed in 1990. It is widely considered by the clinical and sports nutrition communities to be the most accurate predictive equation for healthy adults."
        }
      },
      {
        "@type": "Question",
        "name": "How is BMR different from resting metabolic rate (RMR)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMR measures calories burned under strict resting conditions (usually after fasting and sleeping in a dark room), while RMR is measured under less restrictive resting conditions. Practically, they are within 10% of each other and often used interchangeably."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my BMR decrease as I get older?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMR naturally decreases with age primarily due to the gradual loss of lean muscle mass (sarcopenia). Muscle tissue is metabolically active and requires calories to maintain. As muscle decreases, so does your baseline caloric requirement."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "BMR Calculator", url: "/bmr-calculator" }]} />
      <SoftwareApplicationSchema
        name="BMR Calculator"
        description="Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest."
        url="/bmr-calculator"
      />
      <Script
        id="bmr-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="BMR Calculator"
            description="Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest."
            trustLine="Mifflin-St Jeor equation"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your BMR</h2>

          <BMRCalculator />

          {/* Understanding BMR Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your BMR</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Learn how to interpret and use your Basal Metabolic Rate for optimal health and fitness
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Calculator className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">What BMR Tells You</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        BMR shows the minimum calories needed for vital functions like breathing, circulation, and cell repair. It's your body's baseline energy requirement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <User className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Factors That Affect BMR</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Age, gender, height, weight, and muscle mass all influence your BMR. Men typically have higher BMRs than women due to greater muscle mass.
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
                      <h3 className="font-semibold text-lg">BMR vs TDEE</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        BMR is calories at rest, while TDEE includes activity. Multiply your BMR by an activity factor to get your total daily energy expenditure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Target className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Using BMR for Goals</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Use BMR as a foundation for creating calorie targets. Never eat below your BMR for extended periods as it can slow metabolism.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Boosting Your BMR</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Build muscle through strength training, stay hydrated, get adequate sleep, and eat enough protein to maintain a healthy metabolic rate.
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
                    <strong>Important:</strong> BMR calculations provide estimates based on population averages. Individual metabolic rates can vary by 10-15% due to genetics, medical conditions, and other factors.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For the most accurate measurement, consider getting a metabolic assessment from a healthcare professional or certified fitness facility with specialized equipment.
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
              <h2 id="what-is-bmr">What is Basal Metabolic Rate (BMR)?</h2>
              <p>
                Your <strong>Basal Metabolic Rate (BMR)</strong> is the precise amount of energy (measured in calories)
                that your body requires to perform its most basic, life-sustaining functions while at complete rest.
                Even if you were to sleep in bed for 24 hours without moving a muscle, your body still burns calories
                to keep your heart beating, your lungs breathing, your brain functioning, and your cellular environment
                regulated. For the average adult, BMR accounts for roughly 60% to 75% of total daily energy expenditure.
              </p>

              <h2 id="how-bmr-calculated">How is BMR Calculated?</h2>
              <p>
                Calculating your BMR requires taking into account your unique physiological data. This calculator
                utilizes the <strong>Mifflin-St Jeor equation</strong>, widely recognized by the clinical nutrition
                community as the most reliable formula for modern populations.
              </p>
              <p>
                The equation factors in four primary biological markers:
              </p>
              <ul>
                <li><strong>Weight:</strong> Larger bodies contain more tissue, requiring more energy to sustain.</li>
                <li><strong>Height:</strong> Taller individuals generally possess more surface area and total mass.</li>
                <li><strong>Age:</strong> As we grow older, metabolic rate naturally decelerates, primarily due to gradual muscle tissue loss.</li>
                <li><strong>Biological Sex:</strong> Men typically naturally carry a higher muscle-to-fat ratio than women, resulting in a 5-10% higher baseline metabolic demand.</li>
              </ul>

              <h2 id="bmr-vs-tdee">BMR vs. TDEE: Understanding the Difference</h2>
              <p>
                A common point of confusion in nutritional planning is the difference between BMR and TDEE (Total Daily Energy Expenditure).
                While BMR represents your caloric baseline at absolute rest, your <strong>TDEE</strong> is the actual, comprehensive number
                of calories you burn in a day when you factor in your lifestyle.
              </p>
              <p>
                Your TDEE is composed of your BMR plus:
              </p>
              <ul>
                <li><strong>NEAT (Non-Exercise Activity Thermogenesis):</strong> The micro-movements you make throughout the day, fidgeting, walking to the mailbox, typing.</li>
                <li><strong>TEF (Thermic Effect of Food):</strong> The energy your digestive tract expends to break down, absorb, and metabolize the food you eat (protein requires the highest energy to digest).</li>
                <li><strong>EAT (Exercise Activity Thermogenesis):</strong> The calories explicitly burned during your workouts, such as running or lifting weights.</li>
              </ul>
              <p>
                You find your TDEE by multiplying your BMR by an activity multiplier (usually ranging from 1.2 to 1.9).
              </p>

              <h2 id="how-to-use-bmr">How to Use Your BMR for Dieting</h2>
              <h3>The Golden Rule of Fat Loss</h3>
              <p>
                When setting up a diet for fat loss, your BMR acts as a critical safety floor. <strong>You should never consistently
                  consume fewer calories than your BMR.</strong> Dropping below this baseline starves your body of the essential
                energy it needs for vital organ function, prompting your metabolism to aggressively slow down to preserve energy, a
                survival mechanism commonly known as "starvation mode." Instead, create a caloric deficit from your TDEE, not your BMR.
              </p>

              <h3>Fueling for Muscle Hypertrophy</h3>
              <p>
                If your goal is to build lean tissue, understanding your BMR helps you calculate the precise surplus needed to
                drive anabolism without spilling over into excess fat storage. A 200–300 calorie surplus added on top of your TDEE
                is sufficient for optimal muscle synthesis while remaining metabolically healthy.
              </p>

              <h2 id="faq">Frequently Asked Questions</h2>
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="mb-4">
                  <h3>{item.name}</h3>
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </article>
          </SEOContent>

          <RelatedCalculators currentPage="bmr-calculator" />
        </div>
      </main>
    </>
  )
} 