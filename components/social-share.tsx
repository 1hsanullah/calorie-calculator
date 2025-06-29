"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Twitter, Facebook, Linkedin, Link, Check } from "lucide-react"

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  className?: string
}

export default function SocialShare({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = "Calorie Calculator - Calculate Your Daily Calorie Needs",
  description = "Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals.",
  className = ""
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      
      // Track social share event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'share', {
          'method': 'copy_link',
          'content_type': 'calculator_page',
          'item_id': 'calorie_calculator'
        });
      }
      
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleSocialShare = (platform: string, link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
    
    // Track social share event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share', {
        'method': platform,
        'content_type': 'calculator_page',
        'item_id': 'calorie_calculator'
      });
    }
  }

  return (
    <Card className={`${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="h-4 w-4 text-primary" />
          <span className="font-medium text-sm">Share this calculator</span>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSocialShare('twitter', shareLinks.twitter)}
            className="flex items-center gap-2"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSocialShare('facebook', shareLinks.facebook)}
            className="flex items-center gap-2"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSocialShare('linkedin', shareLinks.linkedin)}
            className="flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Link className="h-4 w-4" />
                Copy Link
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 