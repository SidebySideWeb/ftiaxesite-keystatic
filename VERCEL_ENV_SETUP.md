# Vercel Environment Variables Setup for Keystatic

For Keystatic to work in production on Vercel, you need to set the following environment variables in your Vercel project:

## Required Environment Variables

1. **KEYSTATIC_GITHUB_OWNER** - Your GitHub username or organization
   - Example: `SidebySideWeb`

2. **KEYSTATIC_GITHUB_REPO** - Your GitHub repository name (without the owner)
   - Example: `ftiaxesite-keystatic`

3. **KYESTATIC_GITHUB_APP_SLUG** - Your GitHub App slug (recommended)
   - Example: `keystatic-cms-for-ftiaxesite`
   - This is the name/slug of the GitHub App you created for Keystatic

## How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with these names and values
4. Make sure they're enabled for **Production**, **Preview**, and **Development** (as needed)

## GitHub App Setup

If you haven't created a GitHub App yet:

1. Go to https://github.com/settings/apps/new
2. Name it: "Keystatic CMS for ftiaxesite" (or similar)
3. Set **Repository access**: "Only select repositories" and select `ftiaxesite-keystatic`
4. Set **Permissions**:
   - Contents: Read and write
   - Metadata: Read-only
5. After creating, go to the app settings and note the **App slug** (usually the app name in lowercase with hyphens)
6. Set `KYESTATIC_GITHUB_APP_SLUG` in Vercel to this slug

## Alternative: Personal Access Token

If you don't want to use a GitHub App, you can use a Personal Access Token instead:

1. Create a token at: https://github.com/settings/tokens/new
2. Give it `repo` permissions
3. Set `GITHUB_TOKEN` in Vercel to this token
4. **Note**: This is less secure than using a GitHub App

## After Setting Variables

Once you've set these variables in Vercel:

1. Redeploy your project (or push a new commit)
2. Keystatic will automatically switch to GitHub storage mode
3. Content edited in Keystatic will be saved directly to your GitHub repository

## Verify It's Working

After deployment:
1. Visit `https://your-site.vercel.app/keystatic`
2. You should be redirected to GitHub for authentication
3. After authorizing, you can edit content which will be saved to GitHub

