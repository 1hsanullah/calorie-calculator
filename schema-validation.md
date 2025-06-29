# Schema.org JSON-LD for Calorie Calculator

This is the complete Schema.org structured data implemented for the calorie calculator website. You can validate this JSON-LD using the [Schema.org Validator](https://validator.schema.org/) or [Google's Rich Results Test](https://search.google.com/test/rich-results).

## JSON-LD Code:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.calorietest.com/calorie-calculator",
  "mainEntityOfPage": {
    "@id": "https://www.calorietest.com/calorie-calculator"
  },
  "name": "Calorie Calculator | Calculate Your Daily Calorie Needs",
  "alternateName": "Daily Calorie Calculator",
  "description": "Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.",
  "url": "https://www.calorietest.com/calorie-calculator",
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
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Modern web browser with JavaScript enabled",
    "isAccessibleForFree": true,
    "description": "Calculate your daily calorie needs based on age, gender, weight, height, and activity level. Uses the Mifflin-St Jeor equation to provide accurate BMR and TDEE calculations with personalized recommendations for weight loss, maintenance, or muscle gain.",
    "disambiguatingDescription": "Comprehensive calorie calculator that determines your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) using the scientifically validated Mifflin-St Jeor equation. Provides personalized calorie targets, macronutrient recommendations, and BMI calculations for effective weight management.",
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
}
```

## Validation Instructions:

1. **Schema.org Validator**: Copy the JSON-LD code above and paste it into [validator.schema.org](https://validator.schema.org/)

2. **Google Rich Results Test**: 
   - Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Test by URL: Enter `https://www.calorietest.com/calorie-calculator`
   - Or test by code: Copy the JSON-LD and paste it

3. **Google Search Console**: After deployment, check the "Enhancements" section for structured data reports

## Expected Rich Results:

This schema should enable:
- ⭐ Star ratings in search results
- 📱 App-like rich snippets
- 🔍 Enhanced search appearance
- 📊 Knowledge panel eligibility
- 🎯 Better targeting for health-related searches

## Schema Types Used:

- **WebPage**: Main page structure
- **WebApplication**: Interactive calculator tool
- **Person**: Author and publisher information
- **BreadcrumbList**: Navigation structure
- **Review**: User testimonials with ratings
- **ScholarlyArticle**: Scientific backing reference
- **Thing**: Topic entities for SEO 