import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Flame, Salad, Utensils, Trophy, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Calorie Deficit Calculator | Calculate Calories for Weight Loss',
  description: 'Use our calorie deficit calculator to determine exactly how many calories you need to consume for effective weight loss. Get a personalized plan based on your goals.',
  keywords: 'calorie deficit calculator, weight loss calculator, calorie deficit, how to create calorie deficit, caloric deficit',
  alternates: {
    canonical: 'https://calorietest.app/calorie-deficit-calculator',
  },
  openGraph: {
    title: 'Calorie Deficit Calculator | Calculate Calories for Weight Loss',
    description: 'Use our calorie deficit calculator to determine exactly how many calories you need to consume for effective weight loss. Get a personalized plan based on your goals.',
    url: 'https://calorietest.app/calorie-deficit-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: 'https://calorietest.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calorie Deficit Calculator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Deficit Calculator | Calculate Calories for Weight Loss',
    description: 'Use our calorie deficit calculator to determine exactly how many calories you need to consume for effective weight loss. Get a personalized plan based on your goals.',
    images: ['https://calorietest.app/og-image.jpg'],
  },
}

export default function CalorieDeficitCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How large should a calorie deficit be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A safe and sustainable calorie deficit is generally considered to be 15% to 20% below your maintenance calories (TDEE). This typically equates to a 500-calorie daily deficit, resulting in approximately 1 pound of fat loss per week."
        }
      },
      {
        "@type": "Question",
        "name": "Can a calorie deficit be too large?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While a 1,000-calorie deficit can yield 2 pounds of weight loss per week, dropping any lower significantly increases the risk of metabolic adaptation, muscle catabolism, severe fatigue, and hormonal disruption."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to track macros in a calorie deficit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While a sheer calorie deficit dictates weight loss, optimizing your macronutrients (specifically eating high protein) ensures that the weight losing is body fat rather than lean muscle tissue."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="deficit-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Calorie Deficit Calculator"
            description="Calculate the exact calorie deficit you need to achieve your weight loss goals effectively."
            trustLine="Personalized deficit planning"
          />

          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Calorie Deficit</h2>

          <CalorieCalculator initialGoal="target" />

          {/* Redesigned Tips Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to Use Your Calorie Deficit Results</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Follow these evidence-based strategies for effective and sustainable weight loss
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Salad className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Focus on Nutrient-Dense Foods</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Choose whole, nutrient-dense foods to feel satisfied on fewer calories. Vegetables, fruits, lean proteins, and whole grains provide more nutrients per calorie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Utensils className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Prioritize Protein</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Include plenty of protein in your diet to preserve muscle mass during weight loss. Protein also increases feelings of fullness, reducing hunger and cravings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Combine With Regular Exercise</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Pair your calorie deficit with regular physical activity for optimal results. Exercise helps preserve muscle mass and can enhance fat loss.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Be Patient and Consistent</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Sustainable weight loss takes time. Track your progress, stay consistent with your calorie goals, and adjust as needed based on your results.
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
                    <strong>Important note:</strong> While a calorie deficit is necessary for weight loss, going too low can slow your metabolism and lead to nutrient deficiencies. A moderate deficit of 500-1000 calories per day is generally recommended for safe, sustainable weight loss of 1-2 pounds per week.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Always consult with a healthcare professional before starting any significant weight loss program, especially if you have any underlying health conditions.
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
              <h2 id="what-is-a-calorie-deficit">What Exactly is a Calorie Deficit?</h2>
              <p>
                In the realm of nutritional science and thermodynamics, a <strong>calorie deficit</strong> is the fundamental
                biological state required for weight loss. It occurs when you systematically consume fewer calories (energy from food)
                than your body expends (energy burned through resting metabolism and physical activity).
              </p>
              <p>
                Because energy cannot simply disappear, your body is forced to locate an alternative fuel source to make up
                for the shortage in dietary energy. In a highly functional metabolism, the body will tap into stored adipose
                tissue (body fat), breaking down triglycerides into usable energy, thereby reducing your overall fat mass over time.
              </p>

              <h2 id="how-to-calculate-deficit">How to Calculate Your Caloric Deficit</h2>
              <p>
                Before establishing a deficit, you must first calculate your caloric baseline—known scientifically as your
                Total Daily Energy Expenditure (TDEE). This represents the total number of calories you burn entirely in a 24-hour period.
              </p>
              <p>
                Once your TDEE is firmly established, creating the deficit is straightforward math:
              </p>
              <ul>
                <li><strong>TDEE - Dietary Calorie Intake = Caloric Deficit</strong></li>
              </ul>
              <p>
                For example, if your maintenance calories (TDEE) sit at 2,500 per day, and you consume precisely 2,000 calories
                per day, you have successfully generated a 500-calorie deficit. Over a seven-day week, this yields a cumulative
                deficit of 3,500 calories. Because one pound of human fat tissue contains roughly 3,500 calories of stored energy,
                this math generally guarantees approximately one pound of pure fat loss per week.
              </p>

              <h2 id="how-large-should-deficit-be">How Large Should Your Deficit Be?</h2>
              <p>
                A common, yet highly detrimental mistake is aggressively cutting calories to accelerate results. Creating an
                excessively large deficit (often referred to as a "crash diet") triggers severe biological pushback.
              </p>

              <h3>The Risks of Extreme Deficits</h3>
              <ul>
                <li><strong>Metabolic Adaptation:</strong> Your thyroid downregulates hormones. Your Non-Exercise Activity Thermogenesis (NEAT) subconsciously plummets, meaning you stop fidgeting and moving without realizing it, dramatically reducing your TDEE.</li>
                <li><strong>Muscle Catabolism:</strong> Because the body requires immediate, vast amounts of energy, it will begin breaking down precious, metabolically expensive lean muscle tissue for fuel.</li>
                <li><strong>Endocrine Disruption:</strong> Testosterone levels dive, cortisol spikes, and hunger hormones (ghrelin) surge out of control.</li>
              </ul>

              <h3>The Sweet Spot: 15% to 20%</h3>
              <p>
                Sustainable, long-term body recomposition thrives on a moderate, clinical deficit. Peer-reviewed sports
                nutrition literature strongly advocates for a deficit equalling <strong>15% to 20% below your maintenance calories.</strong>
              </p>
              <p>
                If your TDEE is 2,500 calories:
              </p>
              <ul>
                <li>A 20% deficit lowers your daily target by 500 calories (Target: 2,000 calories).</li>
                <li>This ensures sustainable hunger management.</li>
                <li>It provides ample energy for resistance training.</li>
                <li>It maximally preserves existing muscle mass while stripping adipose tissue.</li>
              </ul>

              <h2 id="tracking-macronutrients">The Importance of Protein While in a Deficit</h2>
              <p>
                A calorie deficit guarantees weight loss, but it does not guarantee <em>fat</em> loss. To ensure that the weight
                dropping off the scale is fat rather than muscle, your macronutrient split—specifically your protein intake—must
                be optimized.
              </p>
              <p>
                Protein preserves lean tissue and carries the highest Thermic Effect of Food (TEF). This means up to 30% of the
                calories ingested from pure protein are burned off merely during the digestive process. When operating in a deficit,
                aim for a minimum of 0.8g to 1.0g of protein per pound of lean body weight to secure your muscle tissue against catabolism.
              </p>
            </article>
          </SEOContent>

          {/* Related Calculators Section */}
          <RelatedCalculators currentPage="calorie-deficit-calculator" />
        </div>
      </main>
    </>
  )
} 