import { submitToIndexNow } from './indexnow'

// Store your IndexNow API key here (you can also use environment variables)
const INDEXNOW_API_KEY = process.env.INDEXNOW_API_KEY || ''
const SITE_HOST = 'www.calorietest.com'

// Automatically submit a URL to IndexNow
export async function autoSubmitToIndexNow(url: string) {
  if (!INDEXNOW_API_KEY) {
    console.warn('IndexNow API key not configured')
    return false
  }

  try {
    const result = await submitToIndexNow([url], INDEXNOW_API_KEY, SITE_HOST)
    if (result.success) {
      console.log(`Auto-submitted to IndexNow: ${url}`)
      return true
    } else {
      console.error(`Failed to auto-submit to IndexNow: ${url}`, result.error)
      return false
    }
  } catch (error) {
    console.error('Auto IndexNow submission error:', error)
    return false
  }
}

// Submit multiple URLs
export async function autoSubmitMultipleToIndexNow(urls: string[]) {
  if (!INDEXNOW_API_KEY) {
    console.warn('IndexNow API key not configured')
    return false
  }

  try {
    const result = await submitToIndexNow(urls, INDEXNOW_API_KEY, SITE_HOST)
    if (result.success) {
      console.log(`Auto-submitted ${urls.length} URLs to IndexNow`)
      return true
    } else {
      console.error(`Failed to auto-submit URLs to IndexNow`, result.error)
      return false
    }
  } catch (error) {
    console.error('Auto IndexNow submission error:', error)
    return false
  }
}

// Helper function to get full URL
export function getFullUrl(path: string): string {
  return `https://${SITE_HOST}${path.startsWith('/') ? path : '/' + path}`
} 