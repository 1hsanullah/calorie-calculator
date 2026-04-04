import BodyFatCalculator from "@/components/body-fat-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { User, Calculator, Heart, Ruler, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Body Fat Percentage Calculator | Estimate Your Body Fat',
  description: 'Calculate your body fat percentage using proven measurement methods. Track your body composition and fitness progress with our accurate body fat calculator.',
  keywords: 'body fat percentage calculator, body fat calculator, body composition calculator, Navy method, body fat measurement',
  alternates: {
    canonical: '/body-fat-percentage-calculator',
  },
  openGraph: {
    title: 'Body Fat Percentage Calculator | Estimate Your Body Fat',
    description: 'Calculate your body fat percentage using proven measurement methods. Track your body composition and fitness progress with our accurate body fat calculator.',
    url: '/body-fat-percentage-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: '/calorie-calculator-og.png',
        width: 1200,
        height: 630,
        alt: 'Body Fat Percentage Calculator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Fat Percentage Calculator | Estimate Your Body Fat',
    description: 'Calculate your body fat percentage using proven measurement methods. Track your body composition and fitness progress with our accurate body fat calculator.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function BodyFatPercentageCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the US Navy Body Fat formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The U.S. Navy formula is widely considered accurate to within 3-4% of clinical DEXA scans. While it is not perfect, its accessibility and ease of use make it one of the best tracking tools for evaluating body composition changes over time."
        }
      },
      {
        "@type": "Question",
        "name": "What is considered a healthy body fat percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthy body fat ranges differ fundamentally by sex. For men, a healthy range is typically 10-20%. For women, who biologically require more essential fat, a healthy range is typically 18-28%."
        }
      },
      {
        "@type": "Question",
        "name": "Why do women need more body fat than men?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Women naturally carry a higher percentage of essential fat (around 10-13% compared to 2-5% for men) to support reproductive functions, regulate estrogen levels, and maintain a healthy hormonal environment."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Body Fat Calculator", url: "/body-fat-percentage-calculator" }]} />
      <SoftwareApplicationSchema
        name="Body Fat Percentage Calculator"
        description="Estimate your body fat percentage using the Navy formula."
        url="/body-fat-percentage-calculator"
      />
      <Script
        id="body-fat-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Body Fat Percentage Calculator"
            description="Estimate your body fat percentage using scientifically validated measurement methods."
            trustLine="Navy & US Army formulas"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Body Fat Percentage</h2>

          <BodyFatCalculator />

          {/* Understanding Body Fat Percentage Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Body Fat Percentage</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Learn how to interpret your body fat percentage and use it to improve your health and fitness
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Target className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Healthy Ranges</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Men: 10-20% (athletes 6-13%), Women: 16-24% (athletes 14-20%). These ranges support optimal health and performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Ruler className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Measurement Methods</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Navy Method uses waist, neck, and height. US Army formula includes hip measurements for women. Both are accurate and practical.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Health Benefits</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Maintaining healthy body fat levels reduces disease risk, improves energy levels, and enhances physical performance and appearance.
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
                      <h3 className="font-semibold text-lg">Tracking Progress</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Monitor changes monthly rather than daily. Body fat percentage changes more slowly than weight but provides better insight into fitness progress.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <Calculator className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Accuracy Tips</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Measure at the same time of day, ensure consistent posture, and use the same measurement technique for reliable results.
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
                    <strong>Remember:</strong> Body fat percentage is just one metric of health. Focus on overall fitness, strength, and how you feel rather than achieving a specific number.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    These calculations provide estimates. For the most accurate body composition analysis, consider DEXA scans, hydrostatic weighing, or other professional methods.
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
              <h2 id="what-is-body-fat-percentage">What is Body Fat Percentage?</h2>
              <p>
                Your <strong>Body Fat Percentage</strong> is an anatomical metric that represents the total mass of fat
                divided by your total body mass. Unlike weight or BMI, which blindly clump muscle, bone, water, and fat
                into a single digit, analyzing your body composition provides a lucid window into your physiological health,
                athletic potential, and metabolic resilience.
              </p>
              <p>
                Body fat is biologically categorized into two subtypes:
              </p>
              <ul>
                <li><strong>Essential Fat:</strong> Necessary for life and reproductive functions. It insulates organs, regulates temperature, and stores vitamins. Men require roughly 2-5% essential fat, while women require 10-13%.</li>
                <li><strong>Storage Fat:</strong> Excess adipose tissue accumulated as energy reserves. While some storage fat is healthy and expected, excessive accumulation elevates the risk of chronic metabolic syndromes.</li>
              </ul>

              <h2 id="how-to-calculate-body-fat">How Our Body Fat Calculator Works</h2>
              <p>
                Clinical body composition analysis (such as DEXA scans or hydrostatic weighing) is highly accurate but
                often prohibitively expensive and inaccessible. To resolve this, the U.S. Military developed anthropometric
                formulas requiring only a simple measuring tape.
              </p>
              <p>
                Our calculator implements the widely validated <strong>U.S. Navy Body Fat Formula</strong>. By analyzing the
                circumferences of specific body parts against your height, the algorithm can estimate your body density and
                subsequent fat percentage with impressive accuracy (typically within 3-4% of clinical DEXA machines).
              </p>
              <ul>
                <li><strong>For Men:</strong> Evaluates the difference between the abdominal circumference (at the navel) and the neck circumference.</li>
                <li><strong>For Women:</strong> Evaluates the sum of waist and hip circumferences minus the neck circumference. Women inherently process adipose tissue differently due to estrogenic influences, storing more fat in the gluteofemoral region.</li>
              </ul>

              <h2 id="healthy-body-fat-ranges">Ideal Body Fat Ranges by Gender</h2>
              <p>
                "Healthy" is a spectrum that shifts based on your age and sex. Because women biologically require higher
                essential fat levels for estrogen production and potential childbearing, their ranges fundamentally differ from men's.
              </p>

              <h3>Target Ranges for Men</h3>
              <ul>
                <li><strong>Essential Fat:</strong> 2% – 5%</li>
                <li><strong>Athletes (Highly Defined):</strong> 6% – 13%</li>
                <li><strong>Fitness (Visible Definition):</strong> 14% – 17%</li>
                <li><strong>Average/Healthy:</strong> 18% – 24%</li>
                <li><strong>Overweight/Obese:</strong> 25%+</li>
              </ul>

              <h3>Target Ranges for Women</h3>
              <ul>
                <li><strong>Essential Fat:</strong> 10% – 13%</li>
                <li><strong>Athletes (Highly Defined):</strong> 14% – 20%</li>
                <li><strong>Fitness (Visible Definition):</strong> 21% – 24%</li>
                <li><strong>Average/Healthy:</strong> 25% – 31%</li>
                <li><strong>Overweight/Obese:</strong> 32%+</li>
              </ul>

              <h2 id="body-fat-vs-bmi">Why Body Fat Trumps BMI</h2>
              <p>
                The Body Mass Index (BMI) is famously flawed for anyone engaged in resistance training. If a 5’10” man
                weighs 210 lbs at 10% body fat, he is exceptionally lean and muscular. However, a standard BMI calculator
                will flag him as dangerously "Obese" (BMI 30).
              </p>
              <p>
                By tracking body fat percentage rather than absolute scale weight, you ensure that the dietary deficit
                you implement is actually stripping away adipose tissue and not cannibalizing hard-earned lean muscle mass.
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

          <RelatedCalculators currentPage="body-fat-percentage-calculator" />
        </div>
      </main>
    </>
  )
} 