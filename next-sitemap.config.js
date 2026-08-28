/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.calorietest.com',
  exclude: ['/admin/*', '/admin/indexnow'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: 'public',
  // Define the additional pages to include in the sitemap
  additionalPaths: async (config) => {
    return [
      {
        loc: '/calorie-calculator',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bmr-calculator',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/body-fat-percentage-calculator',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/bmi-calculator',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/calorie-deficit-calculator',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/maintenance-calorie-calculator',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/weight-loss-calculator',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/articles',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/articles/how-accurate-are-calorie-calculators',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/articles/how-to-calculate-daily-calorie-needs',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/articles/tdee-vs-bmr-difference',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/tdee-calculator',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/protein-intake-calculator',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/macro-calculator',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/water-intake-calculator',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/ideal-body-weight-calculator',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      }
    ]
  },
} 