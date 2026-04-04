import ProteinCalculator from "@/components/protein-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { Beef, Egg, Fish, Shield, Zap, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Protein Intake Calculator | How Much Protein Do You Need?',
  description: 'Calculate your ideal daily protein intake based on your body weight, goal, and activity level. Find out exactly how much protein to eat to lose fat, build muscle, or maintain health.',
  keywords: 'protein intake calculator, how much protein do I need, daily protein calculator, protein for weight loss, protein for muscle building',
  alternates: { canonical: '/protein-intake-calculator' },
  openGraph: {
    title: 'Protein Intake Calculator | How Much Protein Do You Need?',
    description: 'Calculate your ideal daily protein intake based on your body weight, goal, and activity level.',
    url: '/protein-intake-calculator',
    siteName: 'CalorieTest',
    images: [{ url: '/calorie-calculator-og.png', width: 1200, height: 630, alt: 'Protein Intake Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protein Intake Calculator | How Much Protein Do You Need?',
    description: 'Calculate your ideal daily protein intake based on your body weight, goal, and activity level.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function ProteinIntakeCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much protein do I need per day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Protein needs vary by goal. For general health, 0.8g per kg of bodyweight is the minimum. For fat loss while preserving muscle, 2.0–2.4g/kg is recommended. For building muscle, 1.8–2.2g/kg is optimal. Active individuals always need more than sedentary ones."
        }
      },
      {
        "@type": "Question",
        "name": "Can you eat too much protein?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For healthy adults, consuming up to 2.5g of protein per kg of bodyweight appears safe. Excessive protein above this level simply gets used for energy rather than muscle synthesis, and may strain kidneys in people with pre-existing kidney disease. There is no benefit to going above 2.5g/kg."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best protein sources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-quality protein sources include chicken breast (31g/100g), salmon (25g/100g), eggs (6g each), Greek yoghurt (10g/100g), cottage cheese (11g/100g), tofu (8g/100g), and legumes (7–9g/100g). Animal sources are typically more bioavailable but plant sources can fully meet needs with variety."
        }
      },
      {
        "@type": "Question",
        "name": "Does protein intake timing matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Distributing protein evenly across 3–4 meals (rather than concentrating it in one meal) maximises muscle protein synthesis. Each meal should contain at least 20–40g of protein to stimulate a full anabolic response. Post-workout protein within 2 hours is beneficial but total daily intake matters most."
        }
      }
    ]
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Protein Intake Calculator", url: "/protein-intake-calculator" }]} />
      <SoftwareApplicationSchema
        name="Protein Intake Calculator"
        description="Calculate your ideal daily protein intake based on weight, goal, and activity."
        url="/protein-intake-calculator"
      />
      <Script id="protein-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Protein Intake Calculator"
            description="Find out exactly how many grams of protein you need per day based on your body weight, goal, and activity level."
            trustLine="Based on peer-reviewed sports nutrition research"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Daily Protein Target</h2>

          <ProteinCalculator />

          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why Protein Matters for Every Goal</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Protein is the only macronutrient that builds and repairs tissue: it plays a central role regardless of whether you're losing fat, gaining muscle, or staying healthy
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><TrendingDown className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Fat Loss</h3>
                      <p className="text-muted-foreground text-sm mt-1">High protein (2.0–2.4g/kg) prevents muscle loss during a calorie deficit. It also has the highest thermic effect: up to 30% of protein calories are burned during digestion.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Zap className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Muscle Building</h3>
                      <p className="text-muted-foreground text-sm mt-1">Protein provides the amino acid building blocks for muscle protein synthesis. Without adequate intake (1.8–2.2g/kg), training stimulus alone cannot produce meaningful muscle growth.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Shield className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">General Health</h3>
                      <p className="text-muted-foreground text-sm mt-1">The minimum 0.8g/kg prevents deficiency and supports immune function, hormone production, enzyme activity, and tissue repair. Most sedentary adults don't hit even this baseline.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <SEOContent>
            <article>
              <h2 id="how-much-protein">How Much Protein Do You Actually Need?</h2>
              <p>
                The answer depends almost entirely on your goal and activity level. The old RDA of 0.8g per kg of bodyweight was designed to prevent deficiency: not to optimise body composition. For anyone who exercises or has specific physique goals, the science points to much higher intakes.
              </p>
              <p>
                A comprehensive meta-analysis published in the <em>British Journal of Sports Medicine</em> (Morton et al., 2018) found that protein intakes above 1.62g/kg per day provided no additional benefit for muscle gains in resistance-trained individuals. However, for those in a caloric deficit, intakes of 2.0–2.4g/kg are needed to preserve lean mass while fat is being lost.
              </p>

              <h2 id="protein-for-fat-loss">Protein During Fat Loss: Why More Is Better</h2>
              <p>
                When you eat in a caloric deficit, your body can break down muscle tissue for energy: a process called muscle catabolism. Eating significantly more protein than usual is the primary nutritional tool for preventing this. The mechanism is straightforward: with ample amino acids available, the body has less need to source them from muscle breakdown.
              </p>
              <p>
                High protein also increases satiety. Protein is more filling per calorie than carbohydrates or fat, which means hitting a higher protein target naturally reduces hunger and makes the deficit easier to sustain.
              </p>

              <h2 id="timing">Protein Timing: Does It Matter?</h2>
              <p>
                Total daily protein intake matters most. However, distribution throughout the day does make a meaningful difference. Each meal that contains 20–40g of high-quality protein triggers a full muscle protein synthesis response. Eating 160g of protein in one meal is far less effective than spreading the same amount across four meals.
              </p>
              <p>
                Post-workout protein within a 2-hour window is beneficial, but the "anabolic window" is much wider than once believed. If you hit your daily target with evenly distributed meals, the timing of any individual serving is a minor variable.
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

          <RelatedCalculators currentPage="protein-intake-calculator" />
        </div>
      </main>
    </>
  )
}
