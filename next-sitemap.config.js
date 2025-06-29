/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.calorietest.com',
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
        loc: '/blog',
        changefreq: 'weekly',
        priority: 0.7,
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