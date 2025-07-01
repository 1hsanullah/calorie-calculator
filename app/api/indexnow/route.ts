import { NextRequest, NextResponse } from 'next/server'
import { submitToIndexNow, getSiteUrls } from '@/lib/indexnow'

export async function POST(request: NextRequest) {
  try {
    const { apiKey, urls } = await request.json()
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key is required' }, { status: 400 })
    }

    const host = 'www.calorietest.com'
    const urlsToSubmit = urls || getSiteUrls(`https://${host}`)
    
    const result = await submitToIndexNow(urlsToSubmit, apiKey, host)
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: `Successfully submitted ${result.count} URLs to IndexNow`,
        count: result.count 
      })
    } else {
      return NextResponse.json({ 
        success: false, 
        error: result.error 
      }, { status: 500 })
    }
  } catch (error) {
    console.error('IndexNow API error:', error)
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'IndexNow API endpoint - Use POST to submit URLs',
    host: 'www.calorietest.com',
    totalUrls: getSiteUrls('https://www.calorietest.com').length
  })
} 