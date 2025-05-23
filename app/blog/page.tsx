import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { getAllPosts } from '@/lib/blog'
import BlogImage from '@/components/blog-image'

export const metadata: Metadata = {
  title: 'Blog | Health & Nutrition Tips | Calorie Calculator',
  description: 'Read our latest articles about nutrition, weight loss, calorie counting, and healthy lifestyle tips to help you reach your fitness goals.',
  keywords: 'calorie blog, nutrition blog, weight loss tips, healthy eating, fitness advice',
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert advice on nutrition, weight management, and healthy living
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden group hover:shadow-md transition-all duration-200">
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10">
                  <BlogImage 
                    src={post.image || '/images/blog/default-blog-image.jpg'} 
                    alt={post.title}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-medium">Read more →</span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
} 