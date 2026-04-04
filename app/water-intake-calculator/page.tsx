import WaterIntakeCalculator from "@/components/water-intake-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import { BreadcrumbSchema } from "@/components/shared/breadcrumb-schema"
import { SoftwareApplicationSchema } from "@/components/shared/software-application-schema"
import { Metadata } from "next"
import { Droplets, Clock, Dumbbell, Brain, Zap, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/calculator/layouts/hero-section"
import { SEOContent } from "@/components/shared/seo-content-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Water Intake Calculator | How Much Water Should You Drink Per Day?',
  description: 'Calculate your ideal daily water intake based on your body weight, exercise level, and climate. Get a personalised hydration target in litres, ounces, and glasses.',
  keywords: 'water intake calculator, how much water should I drink, daily water intake, hydration calculator, water calculator',
  alternates: { canonical: '/water-intake-calculator' },
  openGraph: {
    title: 'Water Intake Calculator | How Much Water Should You Drink Per Day?',
    description: 'Calculate your ideal daily water intake based on your body weight, exercise level, and climate.',
    url: '/water-intake-calculator',
    siteName: 'CalorieTest',
    images: [{ url: '/calorie-calculator-og.png', width: 1200, height: 630, alt: 'Water Intake Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Intake Calculator | How Much Water Should You Drink Per Day?',
    description: 'Calculate your ideal daily water intake based on your body weight, exercise level, and climate.',
    images: ['/calorie-calculator-og.png'],
  },
}

export default function WaterIntakeCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the \"8 glasses a day\" rule accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The \"8 glasses a day\" (about 2 litres) is a rough guideline but not personalised. Your actual needs depend on your body weight, activity level, climate, and diet. A 50kg sedentary person in a cool climate needs far less than an 100kg athlete training in summer heat. Use a calculator to get a personalised target."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if I'm drinking enough water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Urine colour is the most reliable indicator. Pale yellow (like lemonade) means you're well hydrated. Dark yellow or amber means you need to drink more. Clear urine may indicate over-hydration. Thirst is also a reliable signal: if you feel thirsty, you're already mildly dehydrated."
        }
      },
      {
        "@type": "Question",
        "name": "Does coffee or tea count towards daily water intake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Despite the myth, caffeinated drinks like coffee and tea do count towards your fluid intake. While caffeine has a mild diuretic effect, the net fluid from a cup of coffee is still positive. Alcohol, however, is a diuretic and does not count: it increases fluid loss."
        }
      },
      {
        "@type": "Question",
        "name": "How much extra water do I need when exercising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Add approximately 500ml (17 fl oz) of water for every 30 minutes of moderate-to-vigorous exercise. For intense sessions lasting over an hour, consider an electrolyte drink to replace sodium lost through sweat, which plain water alone doesn't replace."
        }
      }
    ]
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Water Intake Calculator", url: "/water-intake-calculator" }]} />
      <SoftwareApplicationSchema
        name="Water Intake Calculator"
        description="Calculate your ideal daily water intake based on weight, exercise, and climate."
        url="/water-intake-calculator"
      />
      <Script id="water-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <HeroSection
            h1="Water Intake Calculator"
            description="Calculate exactly how much water you should drink per day based on your weight, exercise habits, and climate."
            trustLine="Based on WHO and scientific hydration guidelines"
          />

          <p className="text-sm text-muted-foreground mb-6">Last updated: April 2026</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Daily Water Intake</h2>

          <WaterIntakeCalculator />

          <div className="mt-12 md:mt-16">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why Hydration Affects Everything</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Even mild dehydration impairs physical and mental performance: here's what adequate hydration does for you
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Brain className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Mental Performance</h3>
                      <p className="text-muted-foreground text-sm mt-1">A 1–2% drop in hydration causes measurable declines in concentration, memory, and mood. Your brain is 75% water: it's one of the first organs to feel dehydration.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Dumbbell className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Exercise Performance</h3>
                      <p className="text-muted-foreground text-sm mt-1">Even 2% dehydration reduces strength by up to 10% and aerobic capacity by up to 20%. Muscles are approximately 76% water: hydration directly affects how well they contract.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Zap className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Metabolism & Fat Loss</h3>
                      <p className="text-muted-foreground text-sm mt-1">Studies show drinking 500ml of cold water temporarily increases metabolic rate by 24–30% for 60–90 minutes. Adequate hydration also supports kidney function and fat metabolism.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Clock className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Appetite Control</h3>
                      <p className="text-muted-foreground text-sm mt-1">Thirst and hunger signals overlap in the hypothalamus. Drinking water before meals reduces calorie intake by helping you distinguish true hunger from thirst-driven cravings.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Droplets className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Joint & Skin Health</h3>
                      <p className="text-muted-foreground text-sm mt-1">Synovial fluid (which lubricates joints) is primarily water. Adequate hydration maintains joint cushioning, reduces friction during movement, and supports skin elasticity and appearance.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted p-3 rounded-lg"><Sun className="h-6 w-6 text-foreground" /></div>
                    <div>
                      <h3 className="font-semibold text-lg">Temperature Regulation</h3>
                      <p className="text-muted-foreground text-sm mt-1">Sweating is your body's primary cooling mechanism. In hot weather or during intense exercise, fluid losses can reach 1–2 litres per hour, requiring proportionally higher intake.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <SEOContent>
            <article>
              <h2 id="how-much-water">How Much Water Do You Actually Need?</h2>
              <p>
                The commonly cited "8 glasses a day" (about 2 litres) is a rough population average: not a personalised recommendation. Your actual daily water requirement depends on your body size, physical activity, the climate you live in, and your diet (foods like fruits and vegetables contribute 20–30% of total daily fluid intake).
              </p>
              <p>
                The European Food Safety Authority (EFSA) recommends 2.0 litres per day for women and 2.5 litres per day for men under average sedentary conditions. The US National Academies recommend 2.7L and 3.7L respectively: a difference that accounts for higher average physical activity levels in the US population.
              </p>
              <p>
                This calculator uses a weight-based formula (33ml per kg of bodyweight as a baseline) and adjusts upward for exercise and heat exposure to produce a personalised target.
              </p>

              <h2 id="signs-of-dehydration">Signs You're Not Drinking Enough</h2>
              <p>
                Chronic mild dehydration is common and often goes unrecognised because the symptoms are easy to attribute to other causes:
              </p>
              <ul>
                <li><strong>Dark yellow or amber urine</strong>: the most reliable and immediate indicator. Aim for pale yellow.</li>
                <li><strong>Persistent fatigue</strong>: blood volume decreases with dehydration, reducing oxygen delivery to muscles and organs.</li>
                <li><strong>Headaches</strong>: the brain temporarily contracts when dehydrated, pulling away from the skull and triggering pain.</li>
                <li><strong>Difficulty concentrating</strong>: cognitive impairment is measurable at just 1% dehydration.</li>
                <li><strong>Dry skin and lips</strong>: the body prioritises fluid for vital organs, leaving skin under-hydrated.</li>
                <li><strong>Constipation</strong>: water is essential for moving food through the digestive tract.</li>
              </ul>

              <h2 id="hydration-tips">Practical Tips for Hitting Your Water Target</h2>
              <ul>
                <li>Start the day with 500ml on waking before coffee or food: overnight you lose water through breathing and can wake mildly dehydrated.</li>
                <li>Drink a glass of water before every meal. This improves hydration and can reduce meal calorie intake by 13% according to one study.</li>
                <li>Carry a reusable water bottle. Having water visible and accessible increases consumption by 25–30% compared to only drinking when thirsty.</li>
                <li>Set hourly reminders during sedentary work periods: it's easy to go 3–4 hours without drinking when focused on tasks.</li>
                <li>Eat water-dense foods: cucumbers (96% water), watermelon (92%), strawberries (91%), and lettuce (95%) contribute meaningfully to daily hydration.</li>
              </ul>

              <h2 id="faq-section">Frequently Asked Questions</h2>
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i}>
                  <h3>{item.name}</h3>
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </article>
          </SEOContent>

          <RelatedCalculators currentPage="water-intake-calculator" />
        </div>
      </main>
    </>
  )
}
