# Vercel Environment Variables - Ready to Copy

## Copy these values to Vercel → Settings → Environment Variables

### Repository Information
```
KEYSTATIC_GITHUB_OWNER=SidebySideWeb
KEYSTATIC_GITHUB_REPO=ftiaxesite-keystatic
KEYSTATIC_GITHUB_BRANCH=main
```

### GitHub App Authentication (from your GitHub App)
```
KEYSTATIC_GITHUB_CLIENT_ID=Iv23li2BBPvq1R0rwHgj
KEYSTATIC_GITHUB_CLIENT_SECRET=3d71246aa6e52283881ba26fa48f043ca359d7c5
KYESTATIC_GITHUB_APP_SLUG=keystatic-cms-for-ftiaxesite
```

### Session Secret (generated for you)
```
KEYSTATIC_SECRET=zYTSvIV4me9WZNNcXZZ4H7g7NWENdDdU2U5K/yZARdA=
```

---

## Generate KEYSTATIC_SECRET

Run this command to generate a secure random secret:

**Windows PowerShell:**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Or use Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and use it as `KEYSTATIC_SECRET`.

---

## Quick Setup Steps

1. **Generate KEYSTATIC_SECRET** (run the command above)
2. **Go to Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**
3. **Add each variable** (copy from above):
   - KEYSTATIC_GITHUB_OWNER = `SidebySideWeb`
   - KEYSTATIC_GITHUB_REPO = `ftiaxesite-keystatic`
   - KEYSTATIC_GITHUB_BRANCH = `main` (optional, defaults to main)
   - KEYSTATIC_GITHUB_CLIENT_ID = `Iv23li2BBPvq1R0rwHgj`
   - KEYSTATIC_GITHUB_CLIENT_SECRET = `3d71246aa6e52283881ba26fa48f043ca359d7c5`
   - KYESTATIC_GITHUB_APP_SLUG = `keystatic-cms-for-ftiaxesite`
   - KEYSTATIC_SECRET = `zYTSvIV4me9WZNNcXZZ4H7g7NWENdDdU2U5K/yZARdA=`

4. **Make sure each variable is enabled for:**
   - ✅ Production
   - ✅ Preview
   - ✅ Development (optional, but recommended)

5. **Redeploy** your project (or push a new commit to trigger auto-deploy)

---

## Verify GitHub App Settings

Make sure your GitHub App callback URL is set correctly:
- Go to https://github.com/settings/apps/keystatic-cms-for-ftiaxesite
- Check **Authorization callback URL** is set to: `https://your-site.vercel.app/api/keystatic/oauth/callback`
- Update if your Vercel URL is different

---

## After Setup

Once all variables are set and deployed:
1. Visit `https://your-site.vercel.app/keystatic`
2. You should be redirected to GitHub for authorization
3. Authorize the app
4. You'll be redirected back and can now edit content
5. All changes will be saved directly to your GitHub repository

---

## Your GitHub App Info

- **App Name**: Keystatic CMS for ftiaxesite
- **App ID**: 2200114
- **Public Link**: https://github.com/apps/keystatic-cms-for-ftiaxesite
- **Client ID**: Iv23li2BBPvq1R0rwHgj
- **Client Secret**: 3d71246aa6e52283881ba26fa48f043ca359d7c5
- **App Slug**: keystatic-cms-for-ftiaxesite

