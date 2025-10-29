# Keystatic GitHub Storage Setup Guide

This guide will help you set up Keystatic CMS with GitHub storage for the ftiaxesite project.

## Prerequisites

1. A GitHub repository (already created: `SidebySideWeb/ftiaxesite-keystatic`)
2. A GitHub account with write access to the repository

## Setup Options

### Option 1: GitHub App (Recommended)

This is the most secure method and allows multiple users to edit content.

#### Step 1: Create a GitHub App

1. Go to https://github.com/settings/apps/new
2. Configure the app:
   - **GitHub App name**: `Keystatic CMS for ftiaxesite`
   - **Homepage URL**: `https://ftiaxesite.gr`
   - **Callback URL**: Leave empty for now
   - **Webhook**: Leave disabled
3. Under "Where can this GitHub App be installed?":
   - Select "Any account"
4. Under "Repository permissions":
   - **Contents**: Read and write
   - **Metadata**: Read-only
5. Under "Subscribe to events": Leave all unchecked
6. Click "Create GitHub App"

#### Step 2: Install the GitHub App

1. After creating the app, you'll see a page with the app's details
2. Note the **App slug** (in the URL: `settings/apps/YOUR_APP_SLUG`)
3. Click "Install App"
4. Select the repository: `SidebySideWeb/ftiaxesite-keystatic`
5. Click "Install"

#### Step 3: Configure Environment Variables

1. In your project root, create a `.env.local` file:
   ```bash
   KEYSTATIC_GITHUB_REPO=ftiaxesite-keystatic
   KEYSTATIC_GITHUB_OWNER=SidebySideWeb
   KEYSTATIC_GITHUB_BRANCH=main
   KYESTATIC_GITHUB_APP_SLUG=your-app-slug-here
   ```

2. Replace `your-app-slug-here` with the actual App slug from Step 2

### Option 2: Personal Access Token (Quick Start)

This method is quicker but less secure. Use it for development or personal projects only.

#### Step 1: Create a Personal Access Token

1. Go to https://github.com/settings/tokens/new
2. Give it a name: `Keystatic CMS for ftiaxesite`
3. Set expiration as needed
4. Select the scope: `repo` (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't be able to see it again)

#### Step 2: Configure Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   KEYSTATIC_GITHUB_REPO=ftiaxesite-keystatic
   KEYSTATIC_GITHUB_OWNER=SidebySideWeb
   KEYSTATIC_GITHUB_BRANCH=main
   GITHUB_TOKEN=your_token_here
   ```

2. Replace `your_token_here` with your personal access token from Step 1

### Option 3: Local Storage (Current Default)

If no GitHub environment variables are set, Keystatic will default to local storage. This is fine for development but won't work in production or allow collaboration.

## After Setup

1. **Install dependencies** (if not already done):
   ```bash
   pnpm install
   ```

2. **Start the development server**:
   ```bash
   pnpm dev
   ```

3. **Access Keystatic Admin**:
   - Go to `http://localhost:3000/keystatic`
   - You'll be redirected to GitHub to authorize the app
   - After authorization, you'll be redirected back to the admin panel

4. **Edit Content**:
   - Changes are saved to your GitHub repository
   - Content is automatically committed to the specified branch
   - All edits are version-controlled in your GitHub repo

## Troubleshooting

### "Missing required config" error

Make sure all environment variables are set in `.env.local`:
- For GitHub App: `KEYSTATIC_GITHUB_REPO`, `KEYSTATIC_GITHUB_OWNER`, `KYESTATIC_GITHUB_APP_SLUG`
- For Personal Access Token: `KEYSTATIC_GITHUB_REPO`, `KEYSTATIC_GITHUB_OWNER`, `GITHUB_TOKEN`

### "Not authorized" or 401 errors

1. Check that the GitHub App is installed on your repository
2. Verify the App slug matches your environment variable
3. Try re-authorizing by visiting `/keystatic` again

### Content not saving

1. Check browser console for errors
2. Verify the GitHub repository is accessible with your credentials
3. Ensure the branch specified in `KEYSTATIC_GITHUB_BRANCH` exists

## Migration from Local to GitHub Storage

If you've been using local storage and want to migrate to GitHub:

1. Set up environment variables as described above
2. Push your existing content folder to GitHub:
   ```bash
   git add apps/web/content/
   git commit -m "Add Keystatic content"
   git push origin main
   ```
3. Restart the dev server

## Security Notes

- **Never commit `.env.local`** to Git (it's in `.gitignore`)
- Use GitHub Apps for production environments
- Rotate access tokens regularly
- Use separate apps/tokens for different environments (dev, staging, prod)

## Next Steps

1. Set up your environment variables
2. Test the Keystatic admin at `/keystatic`
3. Commit your code to Git
4. Deploy to your hosting provider (Vercel, Netlify, etc.)

For more information, visit: https://keystatic.com/docs/github-storage
