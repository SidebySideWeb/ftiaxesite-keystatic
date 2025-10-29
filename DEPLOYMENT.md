# Deployment Guide for ftiaxesite

This guide will help you prepare your project for Git upload and deployment.

## 📋 Pre-Deployment Checklist

- [x] Keystatic configured for GitHub storage
- [x] `.gitignore` created
- [x] Environment variables documented
- [x] Setup guides created

## 🚀 Step 1: Initialize Git Repository

If this project is not already a Git repository:

```bash
cd C:\Users\dgero\Documents\ai-projects-new\key\ftiaxesite
git init
git branch -M main
```

## 📝 Step 2: Create .env.local File

Copy the example environment file and fill in your values:

```bash
# On Windows PowerShell
Copy-Item apps\web\env.example apps\web\.env.local

# On Linux/Mac
cp apps/web/env.example apps/web/.env.local
```

Then edit `apps/web/.env.local` and add your values:

### For GitHub Storage (Recommended):

```bash
KEYSTATIC_GITHUB_REPO=ftiaxesite-keystatic
KEYSTATIC_GITHUB_OWNER=SidebySideWeb
KEYSTATIC_GITHUB_BRANCH=main
KYESTATIC_GITHUB_APP_SLUG=your-app-slug
```

**⚠️ Important**: Never commit `.env.local` to Git (it's in `.gitignore`)

## 🔧 Step 3: Add and Commit Files

```bash
# Add all files
git add .

# Check what will be committed (optional)
git status

# Commit
git commit -m "Initial commit: ftiaxesite with Keystatic CMS"
```

## 🔗 Step 4: Connect to GitHub Repository

### Option A: Existing Repository

```bash
git remote add origin git@github.com:SidebySideWeb/ftiaxesite.git
git push -u origin main
```

### Option B: New Repository

1. Create a new repository on GitHub (e.g., `SidebySideWeb/ftiaxesite`)
2. Don't initialize it with a README
3. Then run:

```bash
git remote add origin git@github.com:SidebySideWeb/ftiaxesite.git
git push -u origin main
```

## 🌐 Step 5: Deploy to Vercel (or your hosting provider)

### Vercel Deployment

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "Add New Project"**
3. **Import your repository** from GitHub
4. **Configure project settings**:
   - Framework Preset: Next.js
   - Root Directory: `apps/web`
   - Build Command: `cd ../.. && pnpm build`
   - Output Directory: `.next`

5. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all variables from your `.env.local`:
     - `KEYSTATIC_GITHUB_REPO`
     - `KEYSTATIC_GITHUB_OWNER`
     - `KEYSTATIC_GITHUB_BRANCH`
     - `KYESTATIC_GITHUB_APP_SLUG`

6. **Deploy!**

### Netlify Deployment

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "Add new site" → "Import an existing project"**
3. **Connect to GitHub** and select your repository
4. **Configure build settings**:
   - Base directory: `apps/web`
   - Build command: `cd ../.. && pnpm build`
   - Publish directory: `apps/web/.next`

5. **Add Environment Variables**:
   - Go to Site Settings → Environment variables
   - Add all variables from your `.env.local`

6. **Deploy!**

## ✅ Step 6: Update GitHub App Callback URL

After deploying, you need to update your GitHub App settings:

1. Go to https://github.com/settings/apps
2. Find your Keystatic app
3. Click "Edit"
4. Under "Callback URL", add your production URL:
   - For Vercel: `https://your-domain.vercel.app/api/keystatic/github/callback`
   - For Netlify: `https://your-domain.netlify.app/api/keystatic/github/callback`

## 🎉 Step 7: Test!

1. **Visit your deployed site**: `https://your-domain.com`
2. **Access Keystatic Admin**: `https://your-domain.com/keystatic`
3. **Login with GitHub**
4. **Make a test edit** and verify it saves
5. **Check GitHub repo** to see the commit

## 📂 Project Structure Overview

```
ftiaxesite/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/                # Next.js App Router
│       │   ├── keystatic/      # Keystatic admin UI
│       │   ├── api/            # API routes
│       │   └── ...
│       ├── components/         # React components
│       ├── content/            # Keystatic content (GitHub mode)
│       ├── lib/                # Utilities
│       ├── public/             # Static assets
│       ├── keystatic.config.ts # Keystatic configuration
│       └── .env.local          # Environment variables (not in Git)
├── packages/                    # Shared packages
├── .gitignore                  # Git ignore rules
├── package.json                # Root package.json
└── turbo.json                  # Turborepo configuration
```

## 🔐 Security Notes

- ✅ `.env.local` is in `.gitignore` (never commit secrets)
- ✅ Environment variables must be set in your hosting provider
- ✅ Use GitHub App authentication for production
- ✅ Content is stored in separate GitHub repository
- ✅ All changes are version-controlled in Git

## 🆘 Troubleshooting

### Build Fails

Make sure all dependencies are installed:
```bash
pnpm install
```

### Environment Variables Not Working

- Check that all variables are set in hosting provider
- Verify variable names match exactly
- Make sure to redeploy after adding environment variables

### Keystatic Admin Not Loading

- Check that GitHub App is installed on your repository
- Verify callback URL is set correctly in GitHub App settings
- Check browser console for errors

### Content Not Updating

- Ensure you're using GitHub mode (environment variables set)
- Check GitHub App has access to your content repository
- Verify branch name matches in environment variables

## 📚 Additional Resources

- [Keystatic Documentation](https://keystatic.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

## 🎯 Next Steps After Deployment

1. ✅ Set up custom domain (if needed)
2. ✅ Configure analytics
3. ✅ Set up monitoring
4. ✅ Add team members to Keystatic
5. ✅ Create content workflow documentation
