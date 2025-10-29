# 🔐 Keystatic Login Setup

## ✅ **Current Setup**

Your Keystatic is configured for **GitHub Authentication** with **automatic login**.

## 🚀 **How Editors Login**

### Step 1: Access Keystatic Admin

Go to: **http://localhost:3000/keystatic**

### Step 2: Click "Login with GitHub"

You'll see a "Login with GitHub" button. Click it.

### Step 3: First-Time Setup (One-Time)

1. **Create GitHub App** (First time only)
   - Keystatic will prompt you to create a GitHub App
   - Click "Create GitHub App"
   - GitHub will open a new page to create the app
   
2. **Install the App**
   - Choose where to install: Personal account or organization
   - Select the `ftiaxesite-keystatic` repository
   - Click "Install"

3. **Authorize**
   - Grant the app permission to access your repository
   - You'll be redirected back to Keystatic

### Step 4: Environment Variables

After first login, Keystatic will generate a `.env.local` file with:

```bash
KEYSTATIC_GITHUB_CLIENT_ID=...
KEYSTATIC_GITHUB_CLIENT_SECRET=...
KEYSTATIC_SECRET=...
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=...
```

**Important**: Add these to `.gitignore` - they contain secrets!

### Step 5: Other Editors Can Login

Anyone who needs to edit content:

1. Must have a GitHub account
2. Must be invited to the `SidebySideWeb` organization (if using org) OR
3. Must have the repository access (if it's a personal account)

## 🔒 **Security**

- ✅ **No password needed** - Uses GitHub OAuth
- ✅ **Each editor authenticates** with their GitHub account
- ✅ **Permission levels** - Only invited users can edit
- ✅ **Audit trail** - Every change is a Git commit with author info

## 🎯 **For Production Deployment**

When deploying to production (e.g., Vercel):

1. Add the environment variables from `.env.local`:
   - Go to your Vercel project settings
   - Add environment variables
   - Paste all the `KEYSTATIC_*` variables

2. Update the GitHub App callback URL:
   - Go to https://github.com/settings/apps
   - Find your Keystatic app
   - Add production URL: `https://yourdomain.com/api/keystatic/complete`

3. Test login works on production URL

## ❓ **Troubleshooting**

**"The redirect_uri is not associated with this application"**
- Go to https://github.com/settings/apps
- Find your Keystatic app
- Add callback URL: `http://localhost:3000/api/keystatic/complete`

**"Access Denied" after login**
- Make sure the user has access to the `ftiaxesite-keystatic` repository
- Check repository permissions on GitHub

**Changes don't save**
- Check browser console for errors
- Verify you're logged in (check GitHub profile icon in Keystatic)
- Make sure you have write access to the repository

---

**Ready?** Visit **http://localhost:3000/keystatic** to start! 🚀
