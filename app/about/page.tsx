import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About Calorie Calculator | The Person Behind CalorieTest.com',
  description: 'Learn about the creator of CalorieTest.com, their background in software engineering, and the mission behind our calorie calculation tools.',
  keywords: 'about calorie calculator, CalorieTest.com creator, computer science graduate, nutrition tools developer, health technology',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The person behind CalorieTest.com
          </p>
        </div>
        
        <Card className="mb-12">
          <CardContent className="p-8 md:p-10">
            <div className="md:flex items-start gap-8">
              {/* Professional headshot */}
              <div className="mb-6 md:mb-0 flex-shrink-0">
                <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-primary/10 mx-auto md:mx-0">
                  <Image
                    src="/images/profile_image.png"
                    alt="Ihsanullah"
                    width={200}
                    height={200}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Ihsanullah</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    Software Engineer
                  </span>
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    Computer Science Graduate
                  </span>
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    Fitness Enthusiast
                  </span>
                </div>
                
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p>
                    I'm a software engineer and computer science graduate with an interest in health and fitness. After noticing that many popular calorie calculator apps lacked core features and didn't have a modern, clean design, I decided to create CalorieTest.com.
                  </p>
                  
                  <p>
                    My goal was to build a comprehensive suite of calculators with a better user experience - tools that are both visually appealing and functionally superior to what was available. My background in computer science enabled me to implement precise calculation algorithms while creating a clean, modern interface.
                  </p>
                  
                  <p>
                    CalorieTest.com was born from the belief that nutritional tools should be accessible, accurate, and easy to use. Whether you're looking to lose weight, build muscle, or maintain your current physique, my goal is to provide you with reliable tools that make the process clearer and more manageable.
                  </p>
                </div>
                
                <div className="text-muted-foreground italic">
                  "I believe that nutrition tools should be based on science, not trends. These calculators are designed to give you accurate, personalized guidance in a clean, modern interface."
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">My Mission</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                With CalorieTest.com, my mission is to provide individuals with accurate, science-based tools for managing their nutrition and achieving their health goals. I believe that reliable information presented clearly is the foundation of any successful fitness journey.
              </p>
              <p>
                These calculators are built on established scientific formulas and designed to be:
              </p>
              <ul>
                <li><strong>Accurate</strong> - Using proven equations like the Mifflin-St Jeor formula</li>
                <li><strong>User-friendly</strong> - Intuitive interfaces that anyone can use</li>
                <li><strong>Educational</strong> - Providing context and explanation alongside results</li>
                <li><strong>Modern</strong> - Clean design that makes information easy to understand</li>
              </ul>
              <p>
                I'm committed to continuous improvement and expanding the suite of tools to better serve your health and fitness needs.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Link 
            href="/blog/how-accurate-are-calorie-calculators" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/90"
          >
            <span>Read more about the science behind our calculators</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
} 