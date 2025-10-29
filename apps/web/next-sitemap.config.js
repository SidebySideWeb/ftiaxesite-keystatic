/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mywebsite.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/keystatic/*'],
  additionalPaths: async (config) => {
    const result = []

    // Add dynamic pages
    try {
      const { getAllPages } = await import('./lib/reader')
      const pages = await getAllPages()
      
      pages.forEach((page) => {
        result.push({
          loc: `/pages/${page.slug}`,
          lastmod: page.entry.publishedAt || new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.7,
        })
      })
    } catch (error) {
      console.warn('Could not generate sitemap for pages:', error)
    }

    // Add blog posts
    try {
      const { getAllPosts } = await import('./lib/reader')
      const posts = await getAllPosts()
      
      posts.forEach((post) => {
        result.push({
          loc: `/blog/${post.slug}`,
          lastmod: post.entry.publishedAt || new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.8,
        })
      })
    } catch (error) {
      console.warn('Could not generate sitemap for posts:', error)
    }

    return result
  },
}
