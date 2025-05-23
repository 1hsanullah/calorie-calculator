import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { Card } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import BlogImage from '@/components/blog-image'

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {}
  }
  
  return {
    title: `${post.title} | Calorie Calculator Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: post.date,
      modifiedTime: post.lastUpdated || post.date,
      authors: ['Calorie Calculator'],
      section: 'Health & Nutrition',
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map(post => ({
    slug: post.slug,
  }))
}

// Function to process content and remove H1 title to avoid duplication
function removeFirstH1(content: string): string {
  // Simple regex to remove the first h1 heading and its content
  return content.replace(/<h1.*?>(.*?)<\/h1>/, '');
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // Remove H1 from content to avoid duplicate title
  const processedContent = removeFirstH1(post.content);
  
  // Fallback image if no image is provided
  const imageUrl = post.image || '/images/blog/default-blog-image.jpg';
  
  // Add structured data for this article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': imageUrl,
    'datePublished': post.date,
    'dateModified': post.lastUpdated || post.date,
    'author': {
      '@type': 'Organization',
      'name': 'Calorie Calculator',
      'url': 'https://www.calorietest.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Calorie Calculator',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.calorietest.com/favicon.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.calorietest.com/blog/${params.slug}`
    }
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/90 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all articles</span>
        </Link>
        
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {/* Featured Image with fallback */}
          <div className="relative h-[300px] md:h-[400px] w-full bg-gradient-to-r from-primary/5 to-primary/10">
            <BlogImage 
              src={imageUrl} 
              alt={post.title} 
              priority={true} 
            />
            
            {/* Image overlay with title for better readability */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-center drop-shadow-md">
                {post.title}
              </h1>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <header className="mb-8">
              <div className="text-muted-foreground mb-4">
                {formattedDate}
                {post.tags && post.tags.length > 0 && (
                  <span className="mx-2">•</span>
                )}
                {post.tags?.map((tag, index) => (
                  <span key={tag} className="text-primary text-sm">
                    {tag}{index < post.tags!.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              
              <p className="text-xl text-muted-foreground">
                {post.excerpt}
              </p>
            </header>
            
            <section className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: processedContent }} />
            
            {post.lastUpdated && (
              <div className="mt-8 text-sm text-muted-foreground">
                Last updated: {new Date(post.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  )
} 