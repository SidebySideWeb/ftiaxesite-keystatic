#!/usr/bin/env node

import { promises as fs } from 'fs'
import path from 'path'

interface CreatePageOptions {
  slug: string
  title: string
  description?: string
  type?: 'page' | 'post'
  author?: string
  tags?: string[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

async function createPage(options: CreatePageOptions) {
  const {
    slug,
    title,
    description = '',
    type = 'page',
    author = 'Admin',
    tags = []
  } = options

  // Validate slug
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    throw new Error('Slug must contain only lowercase letters, numbers, and hyphens')
  }

  // Determine content directory
  const contentDir = path.join(CONTENT_DIR, type === 'post' ? 'posts' : 'pages')
  const pageDir = path.join(contentDir, slug)

  // Check if page already exists
  try {
    await fs.access(pageDir)
    throw new Error(`Page with slug "${slug}" already exists`)
  } catch (error: any) {
    if (error.code !== 'ENOENT') {
      throw error
    }
  }

  // Create directory
  await fs.mkdir(pageDir, { recursive: true })

  // Create index.yaml file
  const indexContent = {
    title,
    description,
    publishedAt: new Date().toISOString(),
    ...(type === 'post' && {
      author,
      tags,
    }),
    content: [
      {
        _template: 'paragraph',
        content: `Welcome to ${title}! This is a placeholder content. You can edit this in the Keystatic admin panel.`
      }
    ]
  }

  await fs.writeFile(
    path.join(pageDir, 'index.yaml'),
    `title: ${title}
description: ${description}
publishedAt: ${new Date().toISOString()}${type === 'post' ? `
author: ${author}
tags:${tags.length > 0 ? tags.map(tag => `\n  - ${tag}`).join('') : ' []'}` : ''}
content:
  - _template: paragraph
    content: Welcome to ${title}! This is a placeholder content. You can edit this in the Keystatic admin panel.`
  )

  console.log(`✅ Created ${type}: ${title}`)
  console.log(`📁 Location: ${pageDir}`)
  console.log(`🔗 URL: /${type === 'post' ? 'blog' : 'pages'}/${slug}`)
  console.log(`⚙️  Edit in Keystatic: http://localhost:3000/keystatic`)
}

// CLI interface
async function main() {
  const args = process.argv.slice(2)
  
  if (args.length === 0) {
    console.log(`
Usage: pnpm create-page [options]

Options:
  --slug <slug>        Page slug (required)
  --title <title>      Page title (required)
  --description <desc> Page description (optional)
  --type <type>        Content type: page or post (default: page)
  --author <author>    Author name (for posts, default: Admin)
  --tags <tags>        Comma-separated tags (for posts, optional)

Examples:
  pnpm create-page --slug "about-us" --title "About Us" --description "Learn more about our company"
  pnpm create-page --slug "welcome-post" --title "Welcome Post" --type post --author "John Doe" --tags "welcome,announcement"
`)
    process.exit(1)
  }

  const options: CreatePageOptions = {
    slug: '',
    title: '',
  }

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]
    const value = args[i + 1]

    switch (key) {
      case '--slug':
        options.slug = value
        break
      case '--title':
        options.title = value
        break
      case '--description':
        options.description = value
        break
      case '--type':
        if (value !== 'page' && value !== 'post') {
          throw new Error('Type must be either "page" or "post"')
        }
        options.type = value as 'page' | 'post'
        break
      case '--author':
        options.author = value
        break
      case '--tags':
        options.tags = value.split(',').map(tag => tag.trim())
        break
    }
  }

  if (!options.slug || !options.title) {
    throw new Error('Slug and title are required')
  }

  try {
    await createPage(options)
  } catch (error: any) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

export { createPage }
