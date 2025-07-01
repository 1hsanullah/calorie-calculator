import crypto from 'crypto'

// Generate a random IndexNow API key
export function generateIndexNowKey(): string {
  return crypto.randomBytes(16).toString('hex')
}

// Submit URLs to IndexNow
export async function submitToIndexNow(urls: string[], apiKey: string, host: string) {
  const indexNowEndpoint = 'https://api.indexnow.org/indexnow'
  
  const payload = {
    host: host,
    key: apiKey,
    keyLocation: `https://${host}/${apiKey}.txt`,
    urlList: urls
  }

  try {
    const response = await fetch(indexNowEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (response.ok) {
      console.log('Successfully submitted to IndexNow:', urls.length, 'URLs')
      return { success: true, count: urls.length }
    } else {
      console.error('IndexNow submission failed:', response.status, response.statusText)
      return { success: false, error: `HTTP ${response.status}` }
    }
  } catch (error) {
    console.error('IndexNow submission error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get all site URLs for submission
export function getSiteUrls(baseUrl: string): string[] {
  const urls = [
    baseUrl,
    `${baseUrl}/calorie-calculator`,
    `${baseUrl}/bmr-calculator`,
    `${baseUrl}/body-fat-percentage-calculator`,
    `${baseUrl}/bmi-calculator`,
    `${baseUrl}/weight-loss-calculator`,
    `${baseUrl}/calorie-deficit-calculator`,
    `${baseUrl}/maintenance-calorie-calculator`,
    `${baseUrl}/about`,
    `${baseUrl}/blog`,
    `${baseUrl}/blog/how-to-calculate-daily-calorie-needs`,
    `${baseUrl}/blog/how-accurate-are-calorie-calculators`,
  ]
  
  return urls
} 