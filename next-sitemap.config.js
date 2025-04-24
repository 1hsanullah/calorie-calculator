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
      }
    ]
  },
} 