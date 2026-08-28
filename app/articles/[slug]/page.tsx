import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { ArrowLeft, Clock } from 'lucide-react'

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Calorie Calculator Articles`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    alternates: {
      canonical: `/articles/${slug}`,
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug)

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
  const processedContent = removeFirstH1(post.content || '');

  // Image used for structured data / social cards only (not as a visual hero)
  const imageUrl = post.image || '/calorie-calculator-og.png';

  // Estimate reading time from the article body (~200 words/min)
  const wordCount = processedContent.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

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
      '@id': `https://www.calorietest.com/articles/${slug}`
    }
  }

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all articles</span>
        </Link>

        <article>
          {/* Editorial header */}
          <header className="mb-10 md:mb-12">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground border-t border-border pt-5">
              <time dateTime={post.date}>{formattedDate}</time>
              <span aria-hidden="true" className="text-border">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {readingTime} min read
              </span>
            </div>
          </header>

          <section
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl md:prose-h2:text-3xl prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {post.lastUpdated && (
            <div className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
              Last updated: {new Date(post.lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </article>
      </div>
    </main>
  )
} 