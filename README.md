# ftiaxesite

48h Website Business Template - Turborepo Monorepo

A production-ready, plug-and-play template for rapid website development with Keystatic CMS integration.

## Features

- 🚀 Turborepo monorepo with pnpm
- ⚡ Next.js 15 with App Router
- 🎨 TailwindCSS for styling
- 📝 Keystatic CMS for content management
- 🔍 SEO optimized with next-seo and next-sitemap
- 🛠️ TypeScript throughout
- 🤖 Automation-ready with page creation scripts

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
apps/
  web/                    # Main Next.js application
    app/                  # App Router pages
    components/           # React components
    content/              # Keystatic content
    lib/                  # Utilities and configurations
packages/
  config/                 # Shared configurations
  ui/                     # Shared UI components
```

## Development

The development server will be available at `http://localhost:3000`
Keystatic admin panel will be available at `http://localhost:3000/keystatic`

## Keystatic CMS Setup

Keystatic can work in two modes:

### Local Mode (Default)
Works out of the box without additional configuration. Content is stored locally in the `content/` directory.

### GitHub Mode (Recommended for Production)
Store your content in a GitHub repository for collaboration and version control.

1. **Setup Environment Variables**:
   ```bash
   cp apps/web/env.example apps/web/.env.local
   ```

2. **Fill in the values** in `apps/web/.env.local`:
   - `KEYSTATIC_GITHUB_REPO`: ftiaxesite-keystatic
   - `KEYSTATIC_GITHUB_OWNER`: SidebySideWeb
   - `KYESTATIC_GITHUB_APP_SLUG`: ftiaxesite-keystatic

3. **Follow the complete setup guide**:
   See [KEYSTATIC_GITHUB_SETUP.md](./KEYSTATIC_GITHUB_SETUP.md) for detailed instructions on creating and configuring a GitHub App.

## Automation

Use the included scripts to automate page creation:

```bash
pnpm run create-page --slug="about-us"
```

This will create a new page with proper Keystatic configuration and content structure.
