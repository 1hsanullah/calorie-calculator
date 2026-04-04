import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { CalendarDays, Target, TrendingDown, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
  description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed, timeframes, and get tailored recommendations.',
  keywords: 'weight loss calculator, diet calculator, lose weight calculator, fat loss calculator, weight loss planner, calorie deficit',
  alternates: {
    canonical: '/weight-loss-calculator',
  },
  openGraph: {
    title: 'Weight Loss Calculator | Plan Your Weight Loss Journey',
    description: 'Our weight loss calculator helps you create a personalized plan to achieve your target weight. Calculate calories needed and timeframes.',
    url: '/weight-loss-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: '/calorie-calculator-og.png',
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
    images: ['/calorie-calculator-og.png'],
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
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Weight Loss Calculator", url: "/weight-loss-calculator" }]} />
      <SoftwareApplicationSchema
        name="Weight Loss Calculator"
        description="Plan your weight loss by setting a goal weight and target date."
        url="/weight-loss-calculator"
      />
      <Script
        id="weight-loss-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Weight Loss Calculator"
            description="Enter your goal weight and a target date: we'll calculate exactly how many calories to eat every day to get there on time."
            trustLine="The only calculator that plans around your deadline"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Set Your Goal Weight and Target Date</h2>

          <CalorieCalculator initialGoal="target" />

          {/* How the date-based planning works */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to Use the Target Date Feature</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Most calorie calculators tell you how long it will take. This one lets you choose when: and works backwards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <CalendarDays className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pick a Meaningful Date</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Choose a real deadline: a holiday, wedding, reunion, or personal milestone. Having a fixed date creates urgency and dramatically improves adherence compared to open-ended goals.
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
                      <h3 className="font-semibold text-lg">Check the Required Deficit</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        The calculator divides your total weight loss by the days remaining to find the required daily deficit. If the result is above 1,000 cal/day, your date is too aggressive: push it back.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <TrendingDown className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Hit Your Daily Calorie Target</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Your personalised daily calorie number is the single figure to hit every day. Track it with an app like MyFitnessPal or Cronometer. Consistency beats perfection.
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
                      <h3 className="font-semibold text-lg">Recalculate Every 4–6 Weeks</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        As you lose weight your TDEE drops. Come back, enter your new weight, and recalculate. This keeps your target accurate as your body changes throughout the journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <AlertCircle className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">If You Fall Behind</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Don't slash calories further: you'll trigger muscle loss and metabolic slowdown. Instead, add 20–30 minutes of daily walking to increase your calorie burn and close the gap.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <CheckCircle2 className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Plan for the Last 2 Weeks</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Increase protein to 1g per pound of bodyweight in the final two weeks to retain muscle while the deficit is steepest. Add resistance training if you aren't already.
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
                    <strong>The safe range:</strong> A required deficit under 500 cal/day means your date is comfortably achievable. Between 500–1,000 cal/day is aggressive but doable with discipline. Above 1,000 cal/day: extend the deadline. No goal date is worth losing muscle mass or crashing your metabolism.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <SEOContent>
            <article>
              <h2 id="why-a-target-date-works">Why Setting a Target Date Beats an Open-Ended Goal</h2>
              <p>
                Research in behavioural psychology consistently shows that vague goals produce vague results. "I want to lose weight eventually" is not a plan: it is a wish. A specific target date transforms the equation entirely. When you commit to reaching a particular weight by a fixed calendar date, you create a concrete constraint that forces your plan to be mathematically honest.
              </p>
              <p>
                This calculator works backwards from your deadline. Rather than asking "how long will this take?", it answers the more useful question: <strong>"Given my deadline, what do I need to eat every single day?"</strong>
              </p>

              <h2 id="how-the-date-calculation-works">The Maths Behind the Date-Based Plan</h2>
              <p>
                The algorithm uses three steps to generate your personalised daily calorie target:
              </p>
              <ol>
                <li><strong>Your BMR</strong> is calculated using the Mifflin-St Jeor equation: the most clinically validated formula available: based on your age, sex, weight, and height.</li>
                <li><strong>Your TDEE</strong> (Total Daily Energy Expenditure) is derived by multiplying your BMR by your activity level multiplier. This is your true maintenance: the number of calories that keeps your weight exactly stable.</li>
                <li><strong>Your required deficit</strong> is calculated by dividing your total weight loss target (in calories: each kilogram of fat ≈ 7,700 kcal) by the number of days remaining until your target date. This daily deficit is then subtracted from your TDEE to produce your daily calorie target.</li>
              </ol>

              <h2 id="choosing-a-realistic-date">How to Choose a Realistic Target Date</h2>
              <p>
                The single biggest mistake when setting a target date is choosing one that requires an unsafe deficit. A safe and effective deficit sits between <strong>300 and 750 calories per day</strong> for most people. The absolute clinical maximum is 1,000 calories per day, and only for those with a large amount to lose.
              </p>
              <p>
                Use this as a quick sanity check before committing to your date:
              </p>
              <ul>
                <li>Multiply the kilograms you want to lose by 7,700 (calories per kg of fat).</li>
                <li>Divide that number by your required daily deficit (e.g. 500).</li>
                <li>The result is the minimum number of days your goal realistically requires.</li>
              </ul>
              <p>
                For example: losing 10 kg requires burning approximately 77,000 calories above intake. At a 500-calorie daily deficit, that takes 154 days: just over 5 months. If your chosen date is only 8 weeks away, the calculator will show a deficit above 1,375 calories per day, which is unsafe. Push the date to at least 5.5 months out.
              </p>

              <h2 id="what-happens-when-you-plateau">What to Do When the Scale Stops Moving</h2>
              <p>
                Plateaus are not failures: they are a predictable biological event. As your body weight drops, your TDEE decreases because a lighter body burns fewer calories at rest and during movement. A plan that was a 500-calorie deficit in month one may be only a 300-calorie deficit by month three, simply because you've lost weight.
              </p>
              <p>
                The correct response is to return to this calculator, enter your current (lower) weight, and recalculate. Your new daily target will be slightly lower, restoring the full deficit. Do this every 4–6 weeks or whenever the scale stalls for more than two weeks.
              </p>
              <p>
                Do not respond to a plateau by drastically cutting calories. Severe restriction below 1,200 calories (women) or 1,500 calories (men) reliably triggers muscle catabolism and hormonal disruption that makes future fat loss harder, not easier.
              </p>
            </article>
          </SEOContent>

          {/* Related Calculators Section */}
          <RelatedCalculators currentPage="weight-loss-calculator" />
        </div>
      </main>
    </>
  )
} 