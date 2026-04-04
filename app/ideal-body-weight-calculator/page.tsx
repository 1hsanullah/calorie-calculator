import IdealBodyWeightCalculator from "@/components/ideal-body-weight-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { Scale, Target, AlertCircle, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Ideal Body Weight Calculator | Find Your Healthy Weight',
  description: 'Calculate your ideal body weight using four clinical formulas: Devine, Robinson, Miller, and Hamwi. Get a personalised healthy weight range based on your height and sex.',
  keywords: 'ideal body weight calculator, healthy weight calculator, IBW calculator, what should I weigh, ideal weight for height',
  alternates: { canonical: '/ideal-body-weight-calculator' },
  openGraph: {
    title: 'Ideal Body Weight Calculator | Find Your Healthy Weight',
    description: 'Calculate your ideal body weight using four clinical formulas: Devine, Robinson, Miller, and Hamwi.',
    url: '/ideal-body-weight-calculator',
    siteName: 'CalorieTest',
    images: [{ url: '/calorie-calculator-og.png', width: 1200, height: 630, alt: 'Ideal Body Weight Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Body Weight Calculator | Find Your Healthy Weight',
    description: 'Calculate your ideal body weight using four clinical formulas: Devine, Robinson, Miller, and Hamwi.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function IdealBodyWeightCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an ideal body weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideal body weight (IBW) is a clinically derived estimate of the weight associated with the lowest health risk for a person of a given height and sex. It is not a cosmetic standard: it reflects the weight range statistically linked to the best health outcomes, lowest disease risk, and optimal physiological function."
        }
      },
      {
        "@type": "Question",
        "name": "Which ideal body weight formula is most accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No single formula is definitively most accurate for all populations. The Devine formula is the most widely used in clinical and medical settings. The Robinson formula is considered a refinement of Devine. The average of all four formulas is generally the most balanced estimate. The BMI 18.5–24.9 healthy range provides a complementary view."
        }
      },
      {
        "@type": "Question",
        "name": "Should I try to reach my ideal body weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IBW is a reference point, not a personal target. Many people: particularly athletes and those with high muscle mass: are healthy well above their calculated IBW. Focus on health markers (blood pressure, blood glucose, cholesterol, energy levels) rather than fixating on a formula-derived number. If your current weight is within 10–15% of your IBW range, you are likely at a healthy weight."
        }
      },
      {
        "@type": "Question",
        "name": "Is ideal body weight the same as healthy BMI weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not exactly. IBW formulas give a single target number, while BMI-based healthy weight is a range (18.5–24.9). The IBW formulas typically target the lower-middle of the healthy BMI range. Our calculator shows both so you can see how they compare for your height."
        }
      }
    ]
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Ideal Body Weight Calculator", url: "/ideal-body-weight-calculator" }]} />
      <SoftwareApplicationSchema
        name="Ideal Body Weight Calculator"
        description="Calculate your ideal body weight using four clinical formulas."
        url="/ideal-body-weight-calculator"
      />
      <Script id="ibw-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Ideal Body Weight Calculator"
            description="Find your ideal body weight using four validated clinical formulas: and see how each compares to your healthy BMI weight range."
            trustLine="Devine, Robinson, Miller & Hamwi formulas"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Ideal Body Weight</h2>

          <IdealBodyWeightCalculator />

          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How to Interpret Your Result</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Ideal body weight is a clinical reference point: not a cosmetic target
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Target className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">It's a Range, Not a Number</h3>
                      <p className="text-muted-foreground text-sm mt-1">The four formulas give different answers: that spread is intentional. Your "ideal" weight is best understood as the range between the lowest and highest formula result, rather than any single figure.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><AlertCircle className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Athletes Often Exceed IBW</h3>
                      <p className="text-muted-foreground text-sm mt-1">These formulas were developed on general populations and don't account for muscle mass. A 90kg bodybuilder may have 12% body fat and excellent health despite being far above their calculated IBW.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Scale className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Compare with BMI Range</h3>
                      <p className="text-muted-foreground text-sm mt-1">The healthy BMI weight range (18.5–24.9) provides a wider reference. If you're within that range you're statistically at the lowest health risk: regardless of which specific IBW formula says.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><TrendingUp className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Use It to Set a Goal</h3>
                      <p className="text-muted-foreground text-sm mt-1">IBW is most useful as a starting point for setting a weight loss or gain target. Use it alongside a <a href="/calorie-calculator" className="text-primary underline">calorie calculator</a> to build a plan to reach your target weight.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <SEOContent>
            <article>
              <h2 id="what-is-ibw">What Is Ideal Body Weight?</h2>
              <p>
                Ideal body weight (IBW) is a clinically derived estimate of the weight most associated with optimal health for a person of a given height and biological sex. Unlike BMI, which gives a range, IBW formulas produce a single number. Unlike arbitrary appearance-based standards, IBW is grounded in population health data linking certain weight ranges to the lowest rates of chronic disease, hospitalisation, and mortality.
              </p>
              <p>
                IBW is widely used in medicine for calculating drug dosages, ventilator settings, and nutritional requirements in clinical care: contexts where a single reference weight is more practical than a range.
              </p>

              <h2 id="four-formulas">The Four IBW Formulas Explained</h2>
              <p>
                Each formula was developed independently by different researchers for different purposes, which is why they produce slightly different values. All use height as the primary input, with sex-specific constants.
              </p>
              <ul>
                <li>
                  <strong>Devine Formula (1974)</strong>: the most widely used in clinical settings, originally developed to estimate ideal weight for medication dosing. Men: 50 + 2.3 × (inches over 5 ft). Women: 45.5 + 2.3 × (inches over 5 ft).
                </li>
                <li>
                  <strong>Robinson Formula (1983)</strong>: a refinement of Devine using a broader dataset. Men: 52 + 1.9 × (inches over 5 ft). Women: 49 + 1.7 × (inches over 5 ft).
                </li>
                <li>
                  <strong>Miller Formula (1983)</strong>: tends to produce slightly higher estimates; uses a larger multiplier per inch of height. Men: 56.2 + 1.41 × (inches over 5 ft). Women: 53.1 + 1.36 × (inches over 5 ft).
                </li>
                <li>
                  <strong>Hamwi Formula (1964)</strong>: the oldest of the four, originally developed to estimate caloric requirements for diabetic patients. Men: 48 + 2.7 × (inches over 5 ft). Women: 45.4 + 2.2 × (inches over 5 ft).
                </li>
              </ul>

              <h2 id="limitations">Limitations of Ideal Body Weight Formulas</h2>
              <p>
                All IBW formulas have the same fundamental limitation: they use only height and sex. They ignore body composition, frame size, age, and ethnicity: variables that meaningfully affect what a "healthy" weight looks like for a specific individual.
              </p>
              <p>
                A trained athlete with high muscle mass may be 20kg above their calculated IBW while having an excellent health profile. Conversely, someone at their "ideal" weight with high body fat and low muscle mass (called "skinny fat" or normal-weight obesity) can have poor metabolic health.
              </p>
              <p>
                Use IBW as a rough directional reference: not a prescriptive target. If your current weight falls within 10–15% of your IBW range, you are likely at a healthy weight. Focus on health markers (blood pressure, fasting glucose, cholesterol, energy levels) rather than a specific number on the scale.
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

          <RelatedCalculators currentPage="ideal-body-weight-calculator" />
        </div>
      </main>
    </>
  )
}
