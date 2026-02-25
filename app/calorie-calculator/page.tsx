import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import SocialShare from "@/components/social-share"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Calculator, Flame, ActivitySquare, Utensils, Scale, Dumbbell, Heart, User } from "lucide-react"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
  description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
  keywords: 'calorie calculator, weight loss calculator, TDEE calculator, BMR calculator, macro calculator, diet planner',
  alternates: {
    canonical: '/calorie-calculator',
  },
}

export default function CalorieCalculatorPage() {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is this calorie calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate formulas for estimating BMR with an accuracy rate of ±10% for most people. It's more accurate than the older Harris-Benedict equation and is recommended by nutrition professionals."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between BMR and TDEE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic functions like breathing and circulation. TDEE (Total Daily Energy Expenditure) includes your BMR plus calories burned through daily activities, exercise, and digestion."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use the calorie results for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For weight loss, create a calorie deficit by eating 500-750 calories below your TDEE per day, which typically results in 1-1.5 pounds of weight loss per week. Always consult with a healthcare professional before starting any weight loss program."
        }
      },
      {
        "@type": "Question",
        "name": "Should I eat exactly the number of calories calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator provides estimates based on population averages. Use it as a starting point and adjust based on your actual results over 2-3 weeks. Individual metabolic rates can vary by 10-15% due to genetics, medical conditions, and other factors."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I recalculate my calorie needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recalculate your calorie needs every 10-15 pounds of weight loss or gain, when your activity level changes significantly, or every 3-4 months to account for metabolic adaptations."
        }
      }
    ]
  }

  return (
    <>
      {/* ============================================ */}
      {/* FAQ STRUCTURED DATA FOR RICH SNIPPETS     */}
      {/* ============================================ */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      {/* ============================================ */}
      {/* MAIN CALCULATOR PAGE CONTENT               */}
      {/* ============================================ */}
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">

          {/* ============================================ */}
          {/* HERO SECTION - CALCULATOR INTRODUCTION     */}
          {/* ============================================ */}
          <HeroSection
            h1="Calorie Calculator"
            description="Calculate your daily calorie needs accurately and create a personalized plan to reach your weight goals."
            trustLine="Scientifically backed formulas"
          />

          {/* ============================================ */}
          {/* INTERACTIVE CALCULATOR SECTION             */}
          {/* ============================================ */}
          <section aria-labelledby="calculator-heading">
            <h2 id="calculator-heading" className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Calorie Needs</h2>
            <CalorieCalculator />
          </section>



          {/* ============================================ */}
          {/* RELATED CALCULATORS SECTION                */}
          {/* ============================================ */}
          <section className="mt-12 md:mt-16" aria-labelledby="related-calculators-heading">
            <div className="text-center mb-6 md:mb-8">
              <h2 id="related-calculators-heading" className="text-2xl md:text-3xl font-bold tracking-tight">Related Calculators</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Explore our other fitness and health calculators to get a complete picture of your wellness journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
                <a href="/bmr-calculator" className="block h-full">
                  <CardContent className="p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">BMR Calculator</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest. Essential for creating effective fitness and nutrition plans.
                      </p>
                      <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                    </div>
                  </CardContent>
                </a>
              </Card>

              <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
                <a href="/body-fat-percentage-calculator" className="block h-full">
                  <CardContent className="p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Body Fat Percentage Calculator</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        Estimate your body fat percentage using proven measurement methods. Track your body composition and fitness progress effectively.
                      </p>
                      <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                    </div>
                  </CardContent>
                </a>
              </Card>

              <Card className="group hover:shadow-md transition-all duration-200 hover:border-primary/50">
                <a href="/bmi-calculator" className="block h-full">
                  <CardContent className="p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                        <Scale className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">BMI Calculator</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        Calculate your Body Mass Index to assess your weight category and understand your health status relative to your height and weight.
                      </p>
                      <span className="text-primary font-medium underline hover:no-underline">Calculate now →</span>
                    </div>
                  </CardContent>
                </a>
              </Card>
            </div>
          </section>

          {/* ============================================ */}
          {/* FREQUENTLY ASKED QUESTIONS SECTION         */}
          {/* ============================================ */}
          <section className="mt-12 md:mt-16" aria-labelledby="faq-heading">
            <div className="text-center mb-6 md:mb-8">
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Common questions about calorie calculations and how to use your results
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ============================================ */}
          {/* SEO DOMINATION CONTENT                       */}
          {/* ============================================ */}
          <SEOContent>
            <article>
              <h2 id="how-to-calculate-maintenance-calories">How to Calculate Your Maintenance Calories</h2>
              <p>
                Calculating your maintenance calories—the exact number of calories your body needs to maintain
                its current weight—is the fundamental starting point of any successful nutrition plan. Your daily
                caloric expenditure is determined by a combination of your Basal Metabolic Rate (BMR), the
                Thermic Effect of Food (TEF), and your physical activity level. Understanding this
                metric gives you complete control over your weight management journey, whether your goal is
                fat loss, muscle growth, or long-term health maintenance.
              </p>

              <h2 id="the-science">The Science: The Mifflin-St Jeor Equation</h2>
              <p>
                There are numerous mathematical models designed to estimate human metabolic rates, but modern
                clinical science generally relies on the <strong>Mifflin-St Jeor equation</strong>. Introduced in 1990,
                this formula has been extensively validated and is recommended by the Academy of Nutrition and Dietetics
                as the most accurate predictive equation for healthy adults.
              </p>
              <p>
                The formula calculates your BMR by taking your age, gender, height, and weight into account:
              </p>
              <ul>
                <li><strong>For Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5</li>
                <li><strong>For Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161</li>
              </ul>
              <p>
                Once the BMR is calculated, an activity multiplier (ranging from 1.2 for sedentary lifestyles
                up to 1.9 for highly active athletes) is applied to determine your Total Daily Energy Expenditure (TDEE).
                This calculator abstracts these complex formulas, delivering clinically accurate projections in milliseconds.
              </p>

              <h2 id="setting-goals">Fat Loss vs. Muscle Growth Targets</h2>

              <h3>Setting a Caloric Deficit for Weight Loss</h3>
              <p>
                To lose body fat, you must consume fewer calories than your TDEE, a state known as a <strong>caloric deficit</strong>.
                A universally accepted guideline is to eat 500 calories below your maintenance level. Over a week,
                this equates to a 3,500-calorie shortage, roughly translating to one pound of fat loss. While extreme
                deficits may yield faster short-term results, moderate deficits (15-20% below maintenance) are substantially
                more effective for preserving lean muscle mass and preventing metabolic adaptation (the "starvation mode" plateau).
              </p>

              <h3>Setting a Caloric Surplus for Muscle Growth</h3>
              <p>
                Conversely, building muscle requires a <strong>caloric surplus</strong>—consuming more calories
                than you burn. Hypertrophy requires excess energy to reconstruct muscle fibers torn during resistance training.
                A "lean bulk" approach involves a conservative surplus of 200 to 300 calories per day. This controlled intake
                minimizes unnecessary fat accumulation while providing sufficient energy for optimal gym performance and recovery.
              </p>

              <h2 id="macronutrients">The Role of Macronutrients</h2>
              <p>
                While total calories determine <em>whether</em> you lose or gain weight, your macronutrient breakdown
                determines <em>what</em> kind of weight you lose or gain. A well-optimized diet balances three primary macros:
              </p>
              <ul>
                <li><strong>Protein:</strong> Essential for muscle repair, immune function, and satiety. Aim for 0.8–1.0 grams per pound of body weight.</li>
                <li><strong>Fats:</strong> Critical for hormone production and nutrient absorption. Should comprise 20-30% of your total daily calories.</li>
                <li><strong>Carbohydrates:</strong> Your body's preferred energy source, particularly for high-intensity training. The remainder of your calories after protein and fat targets are met.</li>
              </ul>

              <p>
                Our calorie calculator goes beyond simple energy equilibrium by instantly providing macro breakdowns
                tailored exclusively to your stated athletic goals. By tracking both your caloric ceiling and macronutrient
                distribution, you build a sustainable, highly-effective physiological state.
              </p>
            </article>
          </SEOContent>
          {/* ============================================ */}
          {/* SOCIAL SHARING SECTION                     */}
          {/* ============================================ */}
          <aside className="mt-12 md:mt-16" aria-labelledby="social-share-heading">
            <div className="max-w-2xl mx-auto">
              <SocialShare
                url="https://www.calorietest.com/calorie-calculator"
                title="Free Calorie Calculator - Calculate Your Daily Calorie Needs"
                description="I just used this accurate calorie calculator to determine my daily calorie needs for my fitness goals. Try it out!"
              />
            </div>
          </aside>
        </div>
      </main>
    </>
  )
} 