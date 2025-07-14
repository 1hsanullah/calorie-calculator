import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/ui/footer'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
  description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
  keywords: 'calorie calculator, weight loss calculator, TDEE calculator, BMR calculator, macro calculator, diet planner',
  authors: [{ name: 'Ihsanullah' }],
  generator: 'Next.js',
  applicationName: 'Calorie Calculator',
  referrer: 'origin-when-cross-origin',
  creator: 'Ihsanullah',
  publisher: 'Ihsanullah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.calorietest.com'),
  alternates: {
    canonical: '/calorie-calculator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.calorietest.com',
    siteName: 'Calorie Calculator',
    title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
    description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
    images: [
      {
        url: '/calorie-calculator-og.png',
        width: 1200,
        height: 630,
        alt: 'Calorie Calculator - Free Online Tool for Daily Calorie Needs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
    description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals.',
    images: ['/calorie-calculator-og.png'],
  },
  verification: {
    google: 'google-site-verification=YOUR_VERIFICATION_CODE', // Replace with your actual code when you have it
  },
  category: 'health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        {/* ============================================ */}
        {/* FAVICON AND ICON CONFIGURATION             */}
        {/* ============================================ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* ============================================ */}
        {/* THEME AND BROWSER CONFIGURATION            */}
        {/* ============================================ */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />
        
        {/* ============================================ */}
        {/* STRUCTURED DATA - SCHEMA.ORG JSON-LD      */}
        {/* ============================================ */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.calorietest.com/calorie-calculator",
  "mainEntityOfPage": {
    "@id": "https://www.calorietest.com/calorie-calculator"
  },
  "name": "Calorie Calculator | Calculate Your Daily Calorie Needs",
  "alternateName": "Daily Calorie Calculator",
  "description": "Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.",
  "disambiguatingDescription": "Professional-grade calorie calculator webpage featuring an interactive BMR and TDEE calculator tool, comprehensive educational content, and personalized nutrition recommendations for effective weight management.",
  "url": "https://www.calorietest.com/calorie-calculator",
  "hasPart": [
    {
      "@type": "WebPageElement",
      "@id": "https://www.calorietest.com/calorie-calculator#hero-section",
      "name": "Calculator Introduction",
      "description": "Hero section introducing the calorie calculator with key benefits and usage instructions"
    },
    {
      "@type": "WebPageElement",
      "@id": "https://www.calorietest.com/calorie-calculator#calculator-tool",
      "name": "Interactive Calorie Calculator",
      "description": "Main calculator interface for BMR, TDEE, and personalized calorie recommendations"
    },
    {
      "@type": "WebPageElement",
      "@id": "https://www.calorietest.com/calorie-calculator#educational-content",
      "name": "Educational Content Section",
      "description": "Comprehensive information about calorie calculations, weight management, and nutrition science"
    },
    {
      "@type": "WebPageElement",
      "@id": "https://www.calorietest.com/calorie-calculator#faq-section",
      "name": "FAQ Section",
      "description": "Frequently asked questions about calorie calculations and weight management"
    },
    {
      "@type": "WebPageElement",
      "@id": "https://www.calorietest.com/calorie-calculator#related-calculators",
      "name": "Related Health Calculators",
      "description": "Links to additional health and fitness calculation tools"
    }
  ],
  "relatedLink": [
    "https://www.calorietest.com/bmr-calculator",
    "https://www.calorietest.com/body-fat-percentage-calculator",
    "https://www.calorietest.com/bmi-calculator",
    "https://www.calorietest.com/weight-loss-calculator",
    "https://www.calorietest.com/calorie-deficit-calculator",
    "https://www.calorietest.com/maintenance-calorie-calculator"
  ],
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://www.calorietest.com/#website",
    "name": "Calorie Calculator",
    "publisher": {
      "@type": "Person",
      "@id": "https://www.calorietest.com/#publisher",
      "name": "Ihsanullah"
    },
    "copyrightHolder": {
      "@type": "Person",
      "@id": "https://www.calorietest.com/#copyrightHolder",
      "name": "Ihsanullah"
    },
    "url": "https://www.calorietest.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.calorietest.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  "mainEntity": {
    "@type": "WebApplication",
    "@id": "https://www.calorietest.com/calorie-calculator#webapplication",
    "name": "Calorie Calculator",
    "sameAs": "https://www.wikidata.org/wiki/Q135267297",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Wikidata ID",
      "value": "Q135267297"
    },
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Modern web browser with JavaScript enabled",
    "isAccessibleForFree": true,
    "description": "Calculate your daily calorie needs based on age, gender, weight, height, and activity level. Uses the Mifflin-St Jeor equation to provide accurate BMR and TDEE calculations with personalized recommendations for weight loss, maintenance, or muscle gain.",
    "disambiguatingDescription": "Comprehensive calorie calculator that determines your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the scientifically validated Mifflin-St Jeor equation. Provides personalized calorie targets, macronutrient recommendations, and BMI calculations for effective weight management.",
    "hasPart": [
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#input-form",
        "name": "Personal Information Input Form",
        "description": "Interactive form to collect user's age, gender, weight, height, and activity level for calorie calculation"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#bmr-calculator",
        "name": "BMR Calculator Engine",
        "description": "Basal Metabolic Rate calculation using the Mifflin-St Jeor equation"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#tdee-calculator",
        "name": "TDEE Calculator Engine",
        "description": "Total Daily Energy Expenditure calculation based on BMR and activity level"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#results-display",
        "name": "Results Display Panel",
        "description": "Comprehensive display of calorie needs, weight goals, and macronutrient recommendations"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#bmi-calculator",
        "name": "BMI Calculator Component",
        "description": "Body Mass Index calculation and categorization based on height and weight"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#macronutrient-breakdown",
        "name": "Macronutrient Breakdown Tool",
        "description": "Personalized protein, carbohydrate, and fat recommendations based on calorie targets"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#weight-timeline",
        "name": "Weight Goal Timeline Calculator",
        "description": "Target date and weight change rate planning with realistic timeline projections"
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.calorietest.com/calorie-calculator#faq-section",
        "name": "Frequently Asked Questions",
        "description": "Educational content about calorie calculations, BMR, TDEE, and weight management"
      }
    ],
    "author": {
      "@type": "Person",
      "name": "Ihsanullah"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Calorie",
        "sameAs": "https://en.wikipedia.org/wiki/Calorie"
      },
      {
        "@type": "Thing",
        "name": "Basal Metabolic Rate",
        "sameAs": "https://en.wikipedia.org/wiki/Basal_metabolic_rate"
      },
      {
        "@type": "Thing",
        "name": "Total Daily Energy Expenditure",
        "description": "The total number of calories a person burns in a day including BMR and activity."
      },
      {
        "@type": "Thing",
        "name": "Mifflin-St Jeor Equation",
        "description": "The scientifically validated formula used to calculate resting energy expenditure."
      },
      {
        "@type": "Thing",
        "name": "Weight Management",
        "sameAs": "https://en.wikipedia.org/wiki/Weight_management"
      },
      {
        "@type": "Thing",
        "name": "Body Mass Index",
        "sameAs": "https://en.wikipedia.org/wiki/Body_mass_index"
      }
    ],
    "copyrightHolder": {
      "@id": "https://www.calorietest.com/#copyrightHolder"
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/UseAction",
      "userInteractionCount": 156890
    },
    "featureList": [
      "BMR (Basal Metabolic Rate) calculation using Mifflin-St Jeor equation",
      "TDEE (Total Daily Energy Expenditure) calculation",
      "Multiple activity level options (sedentary to very active)",
      "Weight loss and weight gain calorie recommendations",
      "Target date and weight change rate planning",
      "BMI calculation and categorization",
      "Macronutrient breakdown recommendations",
      "Imperial and metric unit support",
      "Instant results calculation",
      "Mobile-responsive design",
      "Form data persistence"
    ],
    "isBasedOn": {
      "@type": "ScholarlyArticle",
      "name": "A new predictive equation for resting energy expenditure in healthy individuals",
      "headline": "A new predictive equation for resting energy expenditure in healthy individuals",
      "author": [
        {
          "@type": "Person",
          "name": "M.D. Mifflin",
          "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Mifflin+MD"
        },
        {
          "@type": "Person",
          "name": "S.T. St Jeor",
          "url": "https://pubmed.ncbi.nlm.nih.gov/?term=St+Jeor+ST"
        }
      ],
      "datePublished": "1990-03-01T00:00:00-05:00",
      "url": "https://pubmed.ncbi.nlm.nih.gov/2305711/",
      "image": "https://www.calorietest.com/images/mifflin-st-jeor-study.jpg"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "2847"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "datePublished": "2024-11-15",
        "reviewBody": "Very accurate calculator that helped me understand my daily calorie needs for weight loss. Easy to use interface with detailed explanations.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "datePublished": "2024-10-22",
        "reviewBody": "Great tool for meal planning. The macronutrient breakdown is especially helpful for my fitness goals.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  },
  "keywords": "calorie calculator, daily calorie needs, TDEE calculator, BMR calculator, weight loss calories, maintenance calories, macronutrient calculator, Mifflin-St Jeor equation",
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "Individuals focused on personal health, nutrition, and body weight goals",
    "suggestedMinAge": "16",
    "suggestedMaxAge": "99"
  },
  "publisher": {
    "@type": "Person",
    "name": "Ihsanullah",
    "url": "https://www.calorietest.com"
  },
  "dateCreated": "2024-01-15",
  "dateModified": "2024-12-25",
  "datePublished": "2024-01-15",
  "inLanguage": "en-US",
  "isFamilyFriendly": true,
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "contentUrl": "https://www.calorietest.com/og-image.jpg",
    "width": 1200,
    "height": 630,
    "caption": "Calorie calculator interface showing input fields and results"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.calorietest.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calorie Calculator",
        "item": "https://www.calorietest.com/calorie-calculator"
      }
    ]
  },
  "potentialAction": {
    "@type": "UseAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.calorietest.com/calorie-calculator",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  },
  "educationalUse": "Health education and fitness planning",
  "learningResourceType": "Interactive Tool"
}, null, 2)
          }}
        />
      </head>
      
      <body>
        {/* ============================================ */}
        {/* MAIN APPLICATION CONTENT                   */}
        {/* ============================================ */}
        <div id="__next">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <main role="main" id="main-content">
              {children}
            </main>
            
            {/* ============================================ */}
            {/* SITE FOOTER                                */}
            {/* ============================================ */}
            <Footer />
          </ThemeProvider>
        </div>
        
        {/* ============================================ */}
        {/* ANALYTICS AND TRACKING SCRIPTS             */}
        {/* ============================================ */}
        
        {/* Google Analytics (GA4) - Production Ready */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4EFD2V3MV"
          strategy="afterInteractive"
          id="gtag-script"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            // Initialize Google Analytics
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configure GA4 with enhanced settings
            gtag('config', 'G-Z4EFD2V3MV', {
              // Page tracking
              page_title: document.title,
              page_location: window.location.href,
              
              // Content grouping
              content_group1: 'Health Calculator',
              content_group2: 'Calorie Calculator',
              content_group3: 'Fitness Tools',
              
              // Custom dimensions mapping
              custom_map: {
                'dimension1': 'calculator_type',
                'dimension2': 'user_goal',
                'dimension3': 'activity_level',
                'dimension4': 'user_age_group',
                'dimension5': 'device_type'
              },
              
              // Enhanced measurement
              enhanced_measurement: true,
              
              // Conversion tracking
              send_page_view: true,
              
              // User engagement
              engagement_time_msec: 100,
              
              // Debug mode (set to false in production)
              debug_mode: false,
              
              // Cookie settings
              cookie_domain: 'calorietest.com',
              cookie_expires: 63072000, // 2 years
              cookie_update: true,
              
              // Privacy settings
              anonymize_ip: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: false
            });
            
            // Set user properties for better segmentation
            gtag('set', 'user_properties', {
              site_type: 'health_calculator',
              calculator_category: 'fitness',
              content_language: 'en'
            });
            
            // Track initial page view with enhanced data
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'Health Calculator',
              send_to: 'G-Z4EFD2V3MV'
            });
            
            // Track user engagement milestones
            let timeOnPage = 0;
            const engagementTimer = setInterval(() => {
              timeOnPage += 30;
              if (timeOnPage === 30) {
                gtag('event', 'user_engagement', {
                  engagement_time_msec: 30000,
                  event_category: 'Engagement',
                  event_label: '30_seconds'
                });
              } else if (timeOnPage === 60) {
                gtag('event', 'user_engagement', {
                  engagement_time_msec: 60000,
                  event_category: 'Engagement',
                  event_label: '1_minute'
                });
              } else if (timeOnPage === 180) {
                gtag('event', 'user_engagement', {
                  engagement_time_msec: 180000,
                  event_category: 'Engagement',
                  event_label: '3_minutes'
                });
                clearInterval(engagementTimer);
              }
            }, 30000);
            
            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', () => {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll >= 25 && maxScroll < 50) {
                  gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: '25_percent',
                    value: 25
                  });
                } else if (maxScroll >= 50 && maxScroll < 75) {
                  gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: '50_percent',
                    value: 50
                  });
                } else if (maxScroll >= 75 && maxScroll < 90) {
                  gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: '75_percent',
                    value: 75
                  });
                } else if (maxScroll >= 90) {
                  gtag('event', 'scroll', {
                    event_category: 'Engagement',
                    event_label: '90_percent',
                    value: 90
                  });
                }
              }
            });
            
            // Track outbound links
            document.addEventListener('click', (e) => {
              const link = e.target.closest('a');
              if (link && link.hostname !== window.location.hostname) {
                gtag('event', 'click', {
                  event_category: 'Outbound Link',
                  event_label: link.href,
                  transport_type: 'beacon'
                });
              }
            });
            
            // Track form interactions
            document.addEventListener('focus', (e) => {
              if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
                gtag('event', 'form_start', {
                  event_category: 'Form Interaction',
                  event_label: e.target.name || e.target.id || 'unknown_field'
                });
              }
            }, true);
            
            // Enhanced error tracking
            window.addEventListener('error', (e) => {
              gtag('event', 'exception', {
                description: e.message,
                fatal: false,
                event_category: 'JavaScript Error',
                event_label: e.filename + ':' + e.lineno
              });
            });
            
            // Track resource loading errors
            window.addEventListener('error', (e) => {
              if (e.target !== window) {
                gtag('event', 'exception', {
                  description: 'Resource loading error: ' + e.target.src,
                  fatal: false,
                  event_category: 'Resource Error',
                  event_label: e.target.tagName
                });
              }
            }, true);
          `}
        </Script>
        
        {/* Enhanced Performance and User Experience Monitoring */}
        <Script id="performance-monitor" strategy="afterInteractive">
          {`
            // Monitor Core Web Vitals with enhanced reporting
            function sendToAnalytics(metric) {
              // Send to GA4
              gtag('event', metric.name, {
                event_category: 'Web Vitals',
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                event_label: metric.id,
                non_interaction: true,
                custom_parameter_1: metric.navigationType || 'unknown'
              });
              
              // Also send as custom event for detailed analysis
              gtag('event', 'web_vital_measurement', {
                event_category: 'Performance',
                metric_name: metric.name,
                metric_value: metric.value,
                metric_id: metric.id,
                metric_navigation_type: metric.navigationType || 'unknown'
              });
            }
            
            // Load web-vitals library dynamically with error handling
            import('https://unpkg.com/web-vitals@3/dist/web-vitals.js')
              .then(({getCLS, getFID, getFCP, getLCP, getTTFB, getINP}) => {
                getCLS(sendToAnalytics);
                getFID(sendToAnalytics);
                getFCP(sendToAnalytics);
                getLCP(sendToAnalytics);
                getTTFB(sendToAnalytics);
                getINP(sendToAnalytics); // Interaction to Next Paint
              })
              .catch(err => {
                console.warn('Web Vitals library not loaded:', err);
                gtag('event', 'exception', {
                  description: 'Web Vitals library loading failed',
                  fatal: false,
                  event_category: 'Performance Error'
                });
              });
            
            // Track page load time
            window.addEventListener('load', () => {
              const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
              gtag('event', 'page_load_time', {
                event_category: 'Performance',
                value: Math.round(loadTime),
                event_label: 'milliseconds'
              });
            });
            
            // Track calculator-specific metrics
            window.trackCalculatorMetrics = {
              calculationStarted: (calculatorType) => {
                gtag('event', 'calculation_started', {
                  event_category: 'Calculator Usage',
                  calculator_type: calculatorType,
                  event_label: calculatorType + '_started'
                });
              },
              
              calculationCompleted: (calculatorType, timeSpent, userGoal) => {
                gtag('event', 'calculation_completed', {
                  event_category: 'Calculator Usage',
                  calculator_type: calculatorType,
                  time_spent: timeSpent,
                  user_goal: userGoal,
                  event_label: calculatorType + '_completed'
                });
                
                // Track as conversion
                gtag('event', 'conversion', {
                  event_category: 'Goal Completion',
                  calculator_type: calculatorType,
                  value: 1
                });
              },
              
              resultsViewed: (calculatorType, bmr, tdee, targetCalories) => {
                gtag('event', 'results_viewed', {
                  event_category: 'Calculator Results',
                  calculator_type: calculatorType,
                  bmr_result: bmr,
                  tdee_result: tdee,
                  target_calories: targetCalories
                });
              },
              
              formAbandoned: (calculatorType, fieldName) => {
                gtag('event', 'form_abandoned', {
                  event_category: 'Form Interaction',
                  calculator_type: calculatorType,
                  abandoned_field: fieldName
                });
              }
            };
          `}
        </Script>
        
        {/* Conversion Tracking for Calculator Goals */}
        <Script id="conversion-tracking" strategy="afterInteractive">
          {`
            // Define conversion goals
            const conversionGoals = {
              calculator_completion: {
                event_name: 'calculator_completion',
                value: 1,
                currency: 'USD'
              },
              social_share: {
                event_name: 'social_share',
                value: 0.5,
                currency: 'USD'
              },
              email_signup: {
                event_name: 'email_signup',
                value: 2,
                currency: 'USD'
              },
              blog_engagement: {
                event_name: 'blog_engagement',
                value: 0.3,
                currency: 'USD'
              }
            };
            
            // Track micro-conversions
            window.trackConversion = (goalType, additionalData = {}) => {
              const goal = conversionGoals[goalType];
              if (goal) {
                gtag('event', goal.event_name, {
                  event_category: 'Conversion',
                  value: goal.value,
                  currency: goal.currency,
                  ...additionalData
                });
              }
            };
            
            // Track user journey milestones
            let journeySteps = [];
            window.trackJourneyStep = (step, data = {}) => {
              journeySteps.push({
                step: step,
                timestamp: Date.now(),
                data: data
              });
              
              gtag('event', 'user_journey_step', {
                event_category: 'User Journey',
                journey_step: step,
                step_number: journeySteps.length,
                ...data
              });
            };
            
            // Track initial journey step
            window.trackJourneyStep('page_loaded', {
              page_type: 'calculator',
              referrer: document.referrer
            });
          `}
        </Script>
        
        {/* ============================================ */}
        {/* END OF DOCUMENT                            */}
        {/* ============================================ */}
      </body>
    </html>
  )
}
