import CalorieCalculator from "@/components/calorie-calculator"
import { RelatedCalculators } from "@/components/related-calculators"
import SocialShare from "@/components/social-share"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Calculator, Flame, ActivitySquare, Utensils, Scale, Dumbbell, Heart, User } from "lucide-react"
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
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 py-8 md:py-12">
          
          {/* ============================================ */}
          {/* HERO SECTION - CALCULATOR INTRODUCTION     */}
          {/* ============================================ */}
          <header className="relative mb-12 md:mb-16">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
            
            <div className="relative px-6 py-8 md:px-8 md:py-10">
              <div className="max-w-5xl mx-auto">
                {/* Header with icon - Side by Side Layout */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calculator className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm -z-10"></div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    Calorie Calculator
                  </h1>
                </div>
                
                {/* Expandable Content - Centered */}
                <div className="max-w-3xl mx-auto">
                  <div className="group" data-state="closed">
                    <input type="checkbox" id="seo-content-toggle" className="peer hidden" />
                    
                    <div className="overflow-hidden transition-all duration-500 ease-out max-h-[32px] peer-checked:max-h-[800px]">
                      <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg leading-relaxed">
                          Calculate your daily calorie needs accurately and create a personalized plan to reach your weight goals.
                        </p>
                        <p className="leading-relaxed">
                          Understanding your caloric needs is essential for achieving your health and fitness goals. Whether you want to lose weight, gain muscle, or maintain your current physique, knowing your daily calorie requirements is the first step toward success.
                        </p>
                        <p className="leading-relaxed">
                          Our comprehensive calorie calculator uses the Mifflin-St Jeor equation, one of the most accurate formulas available for estimating your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). The calculator takes into account your age, gender, height, weight, activity level, and specific goals to provide personalized recommendations.
                        </p>
                      </div>
                    </div>
                    
                    <label htmlFor="seo-content-toggle" className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/5 rounded-lg cursor-pointer transition-all duration-200">
                      <span className="peer-checked:hidden inline-flex items-center gap-1">
                        Learn more <ChevronDown className="w-4 h-4" />
                      </span>
                      <span className="peer-checked:inline-flex hidden items-center gap-1">
                        Show less <ChevronUp className="w-4 h-4" />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          {/* ============================================ */}
          {/* INTERACTIVE CALCULATOR SECTION             */}
          {/* ============================================ */}
          <section aria-labelledby="calculator-heading">
            <h2 id="calculator-heading" className="text-xl md:text-2xl font-semibold mb-4">Calculate Your Calorie Needs</h2>
            <CalorieCalculator />
          </section>
          
          {/* ============================================ */}
          {/* RESULTS EXPLANATION SECTION                */}
          {/* ============================================ */}
          <section className="mt-12 md:mt-16" aria-labelledby="results-heading">
            <div className="text-center mb-6 md:mb-8">
              <h2 id="results-heading" className="text-2xl md:text-3xl font-bold tracking-tight">Understanding Your Results</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Your calculator provides detailed insights to help you reach your fitness goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Flame className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">BMR</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Basal Metabolic Rate is the number of calories your body needs at complete rest to maintain basic functions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ActivitySquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">TDEE</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Total Daily Energy Expenditure includes your BMR plus additional calories burned through daily activities and exercise.
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
                      <h3 className="font-semibold text-lg">Target Calories</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Your recommended daily calorie intake based on your weight goals - whether to lose, gain, or maintain.
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
                      <h3 className="font-semibold text-lg">Macronutrients</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Suggested protein, carbs, and fat intake to optimize your nutrition based on your calorie target.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Scale className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">BMI</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Body Mass Index provides a measurement of your weight relative to your height as a general health indicator.
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
                    <strong>How to use these results:</strong> Create a nutrition plan that aligns with your goals. For weight loss, aim for a moderate calorie deficit. For weight gain, consume a calorie surplus. For weight maintenance, match your calorie intake to your TDEE.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Remember that these calculations provide estimates. Monitor your progress and adjust your plan as needed. Consult with a healthcare professional before making significant changes to your diet or exercise routine.
                  </p>
                </div>
              </CardContent>
            </Card>
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