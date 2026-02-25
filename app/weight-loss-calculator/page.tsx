import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Scale, Apple, Dumbbell, Droplets, BedIcon, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
  description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed, timeframes, and get tailored recommendations.',
  keywords: 'weight loss calculator, diet calculator, lose weight calculator, fat loss calculator, weight loss planner, calorie deficit',
  alternates: {
    canonical: 'https://calorietest.app/weight-loss-calculator',
  },
  openGraph: {
    title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
    description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed and timeframes.',
    url: 'https://calorietest.app/weight-loss-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: 'https://calorietest.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Weight Loss Calculator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
    description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed and timeframes.',
    images: ['https://calorietest.app/og-image.jpg'],
  },
}

export default function WeightLossCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast is it safe to lose weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The CDC and clinical dietitians highly recommend a weight loss pace of 1 to 2 pounds per week. Losing weight faster than this typically results in muscle loss, severe fatigue, and nutritional deficiencies."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my weight loss stalling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weight loss plateaus occur because your metabolism naturally adapts to smaller body mass and lower caloric intake. To break a plateau, recalculate your maintenance calories at your new lower weight, slightly increase physical activity, or take a 2-week diet break."
        }
      },
      {
        "@type": "Question",
        "name": "Can I target belly fat specifically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Spot reduction is a myth. When you operate in a caloric deficit, your biological genetics determine where your body pulls stored fat from. You must reduce overall body fat percentage to see a reduction in stubborn areas."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="weight-loss-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Weight Loss Calculator"
            description="Plan your weight loss journey with precision. Create a personalized timeline to reach your target weight."
            trustLine="Evidence-based recommendations"
          />

          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Weight Loss Plan</h2>

          <CalorieCalculator initialGoal="cut" />

          {/* Redesigned Tips Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tips for Successful Weight Loss</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Evidence-based strategies to help you achieve sustainable weight loss results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Apple className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Focus on Whole Foods</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Prioritize fruits, vegetables, lean proteins, and whole grains to feel fuller on fewer calories. These nutrient-dense foods support overall health during weight loss.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Droplets className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Stay Hydrated</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Drinking water before meals can reduce hunger and boost metabolism. Aim for 8-10 glasses daily, and consider replacing caloric beverages with water.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Include Strength Training</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Building muscle increases your metabolic rate and improves body composition. Aim for 2-3 strength training sessions per week targeting all major muscle groups.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BedIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Get Adequate Sleep</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Poor sleep can disrupt hunger hormones and lead to increased cravings. Aim for 7-9 hours of quality sleep each night to support your weight loss efforts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Track Your Progress</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Monitor your food intake and weight changes to stay accountable. Use apps, journals, or photos to document your journey and identify patterns.
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
                    <strong>Remember:</strong> Weight loss is rarely linear - you may experience plateaus or fluctuations. Focus on consistency and be patient with the process for long-term success.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    The most successful weight loss approaches combine calorie management, regular physical activity, and behavioral changes. Small, sustainable adjustments to your lifestyle are more effective than drastic short-term changes.
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
              <h2 id="how-weight-loss-works">The Science of Weight Loss</h2>
              <p>
                At its core, weight loss is governed by the undeniable laws of thermodynamics. To reduce your body mass,
                you must establish a <strong>caloric deficit</strong>—a state where your daily energy expenditure exceeds
                your daily energy intake. When this energetic shortfall occurs, your body is biochemically forced to mobilize
                stored energy (adipose tissue) to keep your vital organs and muscles functioning.
              </p>

              <h2 id="calculating-daily-targets">How this Calculator Generates Your Plan</h2>
              <p>
                Our Weight Loss Calculator takes the guesswork out of dieting by instantly generating a robust, personalized
                timeline for your specific goals. Here is exactly how the algorithm operates:
              </p>
              <ol>
                <li><strong>Calculates BMR:</strong> Using the clinically validated Mifflin-St Jeor equation, it determines your Basal Metabolic Rate based on your age, sex, weight, and height.</li>
                <li><strong>Calculates TDEE:</strong> It multiplies your BMR by an activity factor to determine your Total Daily Energy Expenditure (your maintenance calories).</li>
                <li><strong>Applies the Deficit:</strong> Based on how fast you wish to lose weight (e.g., 1 lb or 2 lbs per week), it subtracts the appropriate amount of calories (500 to 1,000) from your TDEE.</li>
                <li><strong>Projects the Timeline:</strong> It calculates exactly how many weeks it will take to hit your goal weight if you adhere strictly to the daily caloric target.</li>
              </ol>

              <h2 id="setting-safe-goals">Setting Safe and Sustainable Targets</h2>
              <p>
                A major pitfall in weight loss journeys is excessive impatience. While it is mathematically possible to lose
                weight rapidly through extreme starvation diets, this approach is universally condemned by medical professionals
                and sports scientists due to the overwhelming likelihood of severe metabolic rebound.
              </p>

              <h3>The 1-2 Pound Rule</h3>
              <p>
                The Centers for Disease Control and Prevention (CDC) and the American College of Sports Medicine (ACSM) strongly
                recommend a weight loss rate of <strong>1 to 2 pounds per week</strong>.
              </p>
              <ul>
                <li><strong>1 lb per week:</strong> Requires a daily deficit of 500 calories. Highest retention of muscle mass; excellent energy levels; highly sustainable.</li>
                <li><strong>2 lbs per week:</strong> Requires a daily deficit of 1,000 calories. Considered the maximum safe limit for most individuals. May result in lowered energy and requires strict macro tracking to prevent muscle loss.</li>
              </ul>
              <p>
                Attempting to lose more than 2 pounds per week significantly increases the risk of gallstones, nutritional
                deficiencies, severe lethargy, and the catabolism (breakdown) of lean muscle tissue.
              </p>

              <h2 id="plateaus-and-adjustments">Navigating Weight Loss Plateaus</h2>
              <p>
                As you lose weight, your body becomes smaller. Because a smaller body requires less energy to move and sustain
                itself, your TDEE naturally decreases. Additionally, prolonged caloric restriction triggers a survival mechanism
                known as <em>adaptive thermogenesis</em>, where your body subconsciously slows down non-exercise movements to
                conserve energy.
              </p>
              <p>
                If the scale hasn't moved for two to three weeks, you have likely hit a plateau. To break through:
              </p>
              <ul>
                <li><strong>Recalculate:</strong> Input your new, lighter body weight into this calculator to find your newly adjusted, lower caloric target.</li>
                <li><strong>Increase Output:</strong> Rather than dropping food intake further, artificially increase your TDEE by adding an extra 2,000 steps to your daily routine or extending your cardio sessions by 15 minutes.</li>
                <li><strong>Diet Break:</strong> Consider raising your calories to your new maintenance level for 10-14 days to reset your metabolic hormones before returning to a deficit.</li>
              </ul>
            </article>
          </SEOContent>

          {/* Related Calculators Section */}
          <RelatedCalculators currentPage="weight-loss-calculator" />
        </div>
      </main>
    </>
  )
} 