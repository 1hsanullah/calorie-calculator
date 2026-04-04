import BMICalculator from "@/components/bmi-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { Scale, Calculator, Heart, Target, TrendingUp, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'BMI Calculator | Calculate Your Body Mass Index',
  description: 'Calculate your BMI (Body Mass Index) instantly with our free online calculator. Determine if you\'re underweight, normal weight, overweight, or obese based on your height and weight.',
  keywords: 'BMI calculator, body mass index calculator, weight calculator, health calculator, obesity calculator, underweight calculator',
  alternates: {
    canonical: '/bmi-calculator',
  },
  openGraph: {
    title: 'BMI Calculator | Calculate Your Body Mass Index',
    description: 'Calculate your BMI (Body Mass Index) instantly with our free online calculator. Determine your healthy weight range.',
    url: '/bmi-calculator',
    siteName: 'CalorieTest',
    images: [
      {
        url: '/calorie-calculator-og.png',
        width: 1200,
        height: 630,
        alt: 'BMI Calculator Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator | Calculate Your Body Mass Index',
    description: 'Calculate your BMI (Body Mass Index) instantly with our free online calculator. Determine your healthy weight range.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function BMICalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is BMI an accurate measure of health?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMI is a highly useful screening tool for general populations, but it has limitations at the individual level. It does not distinguish between muscle mass and fat mass, meaning athletes often register as 'overweight' despite being healthy."
        }
      },
      {
        "@type": "Question",
        "name": "What is considered a healthy BMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the World Health Organization (WHO), a healthy adult BMI falls between 18.5 and 24.9. A BMI below 18.5 is considered underweight, 25.0 to 29.9 is overweight, and 30.0 or higher is considered obese."
        }
      },
      {
        "@type": "Question",
        "name": "Do men and women use the same BMI formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, standard BMI calculations do not factor in biological sex or age for adults. The formula strictly relies on your height and weight, though women naturally carry slightly higher body fat percentages than men at the same BMI."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "BMI Calculator", url: "/bmi-calculator" }]} />
      <SoftwareApplicationSchema
        name="BMI Calculator"
        description="Calculate your Body Mass Index to determine if you're in a healthy weight range."
        url="/bmi-calculator"
      />
      <Script
        id="bmi-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="BMI Calculator"
            description="Calculate your Body Mass Index to determine if you're in a healthy weight range."
            trustLine="Widely used screening tool"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your BMI</h2>

          <BMICalculator />

          {/* Understanding BMI Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your BMI</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Learn how to interpret your BMI results and use them as part of a comprehensive health assessment
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
                      <h3 className="font-semibold text-lg">BMI Categories</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Underweight (below 18.5), Normal (18.5-24.9), Overweight (25-29.9), and Obese (30+). Each category has different health implications.
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
                      <h3 className="font-semibold text-lg">BMI Limitations</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        BMI doesn't account for muscle mass, bone density, or fat distribution. Athletes and elderly may get inaccurate readings.
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
                      <h3 className="font-semibold text-lg">Health Implications</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        BMI outside normal range may increase risk of heart disease, diabetes, and other conditions. Consult healthcare providers for guidance.
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
                      <h3 className="font-semibold text-lg">Beyond BMI</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Consider waist circumference, body fat percentage, and overall fitness level for a complete health picture.
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
                      <h3 className="font-semibold text-lg">Healthy Goals</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Focus on sustainable lifestyle changes including balanced nutrition, regular exercise, and adequate sleep for long-term health.
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
                    <strong>Important:</strong> BMI is a screening tool, not a diagnostic measure. It should be used alongside other health indicators for a complete assessment.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Always consult with healthcare professionals before making significant changes to your diet or exercise routine, especially if you have underlying health conditions.
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
              <h2 id="what-is-bmi">What is Body Mass Index (BMI)?</h2>
              <p>
                <strong>Body Mass Index (BMI)</strong> is a standardized, globally recognized screening tool used to categorize
                a person's weight in relation to their height. Developed in the 19th century by Belgian polymath Adolphe Quetelet,
                BMI provides a simple numeric value that helps public health authorities and medical professionals rapidly assess
                whether an adult falls into underweight, healthy weight, overweight, or obese ranges.
              </p>

              <h2 id="how-bmi-calculated">How is BMI Calculated?</h2>
              <p>
                The mathematical formula for BMI is universally consistent to ensure medical standardization.
                The calculation strictly involves two variables: your body mass and your vertical height.
              </p>
              <ul>
                <li><strong>Using the Metric System:</strong> BMI = weight (kg) ÷ [height (m)]²</li>
                <li><strong>Using the Imperial System:</strong> BMI = weight (lb) ÷ [height (in)]² × 703</li>
              </ul>
              <p>
                Our calculator algorithmically parses your input, regardless of which unit system you select,
                to provide an instantaneous, clinically accurate result down to the decimal point.
              </p>

              <h2 id="bmi-categories">Understanding BMI Categories</h2>
              <p>
                The World Health Organization (WHO) has established international classifications for adult BMI values.
                These cutoffs are statistically correlated with varying degrees of health risk across diverse populations:
              </p>
              <ul>
                <li><strong>Underweight (Less than 18.5):</strong> Being underweight can indicate malnutrition, a weakened immune system, or underlying medical conditions.</li>
                <li><strong>Healthy Weight (18.5 – 24.9):</strong> This range is generally associated with the lowest incidence of chronic metabolic and cardiovascular diseases.</li>
                <li><strong>Overweight (25.0 – 29.9):</strong> Indicates excess body weight. Being situated in this tier may heighten the risk of developing elevated cholesterol, high blood pressure, and type 2 diabetes.</li>
                <li><strong>Obese (30.0 or higher):</strong> Indicates a significantly elevated risk profile for severe conditions such as coronary artery disease, stroke, sleep apnea, and certain cancers.</li>
              </ul>

              <h2 id="limitations-of-bmi">Crucial Limitations of the BMI Scale</h2>
              <p>
                While BMI is exceptionally useful for sweeping epidemiological data and population health tracking,
                it suffers from distinct limitations at the individual clinical level. Above all, <strong>BMI cannot
                  distinguish between fat mass and lean muscle mass.</strong>
              </p>
              <p>
                For example, elite athletes, bodybuilders, and resistance trainers often carry a high amount of
                skeletal muscle tissue. Because muscle is significantly denser than adipose tissue (fat), these
                individuals frequently record an "Overweight" or even "Obese" BMI despite inherently low body fat
                percentages and exceptional metabolic health.
              </p>
              <p>
                Conversely, older adults (who experience sarcopenia, or age-related muscle loss) might test within
                a "Healthy" BMI range but simultaneously carry a remarkably high percentage of visceral fat, a condition
                informally referenced as 'skinny fat'. For this reason, modern health optimization advocates pairing
                BMI analysis with alternative metrics, such as our <strong>Body Fat Percentage Calculator</strong>,
                waist circumference measurements, and routine blood diagnostics.
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

          <RelatedCalculators currentPage="bmi-calculator" />
        </div>
      </main>
    </>
  )
} 