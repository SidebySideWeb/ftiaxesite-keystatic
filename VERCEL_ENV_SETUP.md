# Vercel Environment Variables Setup for Keystatic

For Keystatic to work in production on Vercel, you need to set the following environment variables in your Vercel project:

## Required Environment Variables

**IMPORTANT**: You need ALL of these variables for GitHub storage mode to work:

1. **KEYSTATIC_GITHUB_OWNER** - Your GitHub username or organization
   - Example: `SidebySideWeb`

2. **KEYSTATIC_GITHUB_REPO** - Your GitHub repository name (without the owner)
   - Example: `ftiaxesite-keystatic`

3. **KEYSTATIC_GITHUB_CLIENT_ID** - GitHub App Client ID (required)
   - Found in your GitHub App settings under "Client ID"

4. **KEYSTATIC_GITHUB_CLIENT_SECRET** - GitHub App Client Secret (required)
   - Found in your GitHub App settings - generate a new client secret if needed

5. **KEYSTATIC_SECRET** - A random secret string for session encryption (required)
   - Generate a secure random string (at least 32 characters)
   - You can use: `openssl rand -base64 32` or any password generator
   - Example: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`

6. **NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG** - Your GitHub App slug (required for Next.js)
   - Example: `keystatic-cms-for-ftiaxesite`
   - This is the name/slug of the GitHub App you created for Keystatic
   - **Note**: For Next.js, this MUST be prefixed with `NEXT_PUBLIC_` (see [Keystatic docs](https://keystatic.com/docs/github-mode))

## How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with these names and values
4. Make sure they're enabled for **Production**, **Preview**, and **Development** (as needed)

## GitHub App Setup

If you haven't created a GitHub App yet, follow these steps:

1. Go to https://github.com/settings/apps/new
2. Name it: "Keystatic CMS for ftiaxesite" (or similar)
3. Set **Homepage URL**: `https://your-site.vercel.app` (your Vercel deployment URL)
4. Set **Authorization callback URL**: `https://your-site.vercel.app/api/keystatic/oauth/callback`
5. Set **Repository access**: "Only select repositories" and select `ftiaxesite-keystatic`
6. Set **Permissions**:
   - Contents: Read and write
   - Metadata: Read-only
7. Create the app
8. **After creating**, go to the app settings page where you'll find:
   - **Client ID** → Use this for `KEYSTATIC_GITHUB_CLIENT_ID`
   - **Generate a new client secret** → Use this for `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - **App slug** (usually the app name in lowercase with hyphens) → Use this for `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

## Generate KEYSTATIC_SECRET

You need a random secret string for `KEYSTATIC_SECRET`. Generate it using one of these methods:

**Option 1: Using OpenSSL** (if you have it installed):
```bash
openssl rand -base64 32
```

**Option 2: Using Node.js**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Option 3: Online**: Use any secure password generator (at least 32 random characters)

Copy the generated string and use it for `KEYSTATIC_SECRET` in Vercel.

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

