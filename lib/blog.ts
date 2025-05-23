import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  lastUpdated?: string
  image: string
  excerpt: string
  content: string
  tags?: string[]
}

export async function getAllPosts(): Promise<Post[]> {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map(async fileName => {
        // Remove ".md" or ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx?$/, '')
        
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
        
        // Combine the data with the slug
        return {
          slug,
          title: matterResult.data.title,
          date: matterResult.data.date,
          lastUpdated: matterResult.data.lastUpdated,
          image: matterResult.data.image,
          excerpt: matterResult.data.excerpt,
          tags: matterResult.data.tags,
        }
      })
  )
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return null
  }
  
  // Try both .md and .mdx extensions
  let fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
  }
  
  // Read markdown file as string
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  
  // Combine the data with the slug and content
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    lastUpdated: matterResult.data.lastUpdated,
    image: matterResult.data.image,
    excerpt: matterResult.data.excerpt,
    content: contentHtml,
    tags: matterResult.data.tags,
  }
} 