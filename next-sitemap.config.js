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
} 