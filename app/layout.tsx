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
        {/* Dynamic injection via external JSON file   */}
        {/* ============================================ */}
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
        {/* SCHEMA INJECTION SCRIPT                    */}
        {/* ============================================ */}
        <Script
          src="/schema-injector.js"
          strategy="beforeInteractive"
          id="schema-injector"
        />
        
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
