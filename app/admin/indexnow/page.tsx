'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Copy, Download, Send, Key, Globe } from 'lucide-react'
import { generateIndexNowKey, getSiteUrls } from '@/lib/indexnow'

export default function IndexNowAdmin() {
  const [apiKey, setApiKey] = useState('')
  const [customUrls, setCustomUrls] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const generateKey = () => {
    const newKey = generateIndexNowKey()
    setApiKey(newKey)
  }

  const copyKey = () => {
    navigator.clipboard.writeText(apiKey)
  }

  const downloadKeyFile = () => {
    if (!apiKey) return
    
    const blob = new Blob([apiKey], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${apiKey}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const submitUrls = async () => {
    if (!apiKey) {
      setResult({ success: false, message: 'Please generate or enter an API key first' })
      return
    }

    setIsSubmitting(true)
    setResult(null)

    try {
      const urls = customUrls 
        ? customUrls.split('\n').filter(url => url.trim())
        : undefined

      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey, urls })
      })

      const data = await response.json()
      setResult({
        success: data.success,
        message: data.success ? data.message : data.error
      })
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to submit URLs'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const defaultUrls = getSiteUrls('https://www.calorietest.com')

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">IndexNow Management</h1>
        <p className="text-muted-foreground">
          Instantly notify search engines (Bing, Yandex, Naver) about content updates
        </p>
      </div>

      <div className="grid gap-6">
        {/* API Key Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              API Key Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="apiKey">IndexNow API Key</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="apiKey"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter existing key or generate new one"
                />
                <Button onClick={generateKey} variant="outline">
                  Generate
                </Button>
                <Button onClick={copyKey} variant="outline" disabled={!apiKey}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {apiKey && (
              <div className="space-y-2">
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> You must upload the key file to your website root.
                  </AlertDescription>
                </Alert>
                
                <div className="flex items-center gap-2 text-sm">
                  <span>File location:</span>
                  <code className="bg-muted px-2 py-1 rounded">
                    https://www.calorietest.com/{apiKey}.txt
                  </code>
                </div>
                
                <Button onClick={downloadKeyFile} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Key File
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* URL Submission */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Submit URLs to IndexNow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="urls">Custom URLs (optional)</Label>
              <Textarea
                id="urls"
                placeholder="Leave empty to submit all site URLs, or enter custom URLs (one per line)"
                value={customUrls}
                onChange={(e) => setCustomUrls(e.target.value)}
                rows={6}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Default: Will submit {defaultUrls.length} site URLs if left empty
              </p>
            </div>

            <Button 
              onClick={submitUrls} 
              disabled={!apiKey || isSubmitting}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Submitting...' : 'Submit to IndexNow'}
            </Button>

            {result && (
              <Alert variant={result.success ? "default" : "destructive"}>
                <AlertDescription>
                  {result.message}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Default URLs Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Default URLs ({defaultUrls.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-h-40 overflow-y-auto">
              <ul className="text-sm space-y-1">
                {defaultUrls.map((url, index) => (
                  <li key={index} className="font-mono text-muted-foreground">
                    {url}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ol className="list-decimal list-inside space-y-2">
              <li>Generate or enter your IndexNow API key above</li>
              <li>Download the key file and upload it to your website root directory</li>
              <li>Verify the file is accessible at: <code className="bg-muted px-1 rounded">https://www.calorietest.com/[your-key].txt</code></li>
              <li>Submit your URLs to notify search engines instantly</li>
              <li>Repeat step 4 whenever you publish new content or make updates</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 