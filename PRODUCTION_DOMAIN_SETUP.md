# Production Domain Setup (ftiaxesite.gr)

## 📋 What You Need to Update

### 1. GitHub App Settings (REQUIRED)

You **must** update your GitHub App callback URL to point to your production domain.

#### Steps:
1. Go to: https://github.com/settings/apps/keystatic-cms-for-ftiaxesite
2. Click **"Edit"** or find the app settings
3. Update these fields:
   - **Homepage URL**: `https://ftiaxesite.gr` (or `https://www.ftiaxesite.gr`)
   - **Authorization callback URL**: `https://ftiaxesite.gr/api/keystatic/oauth/callback`
     - **OR** if you want to support both: `https://www.ftiaxesite.gr/api/keystatic/oauth/callback`
4. **Save changes**

#### Note on www vs non-www:
- If your site redirects `www.ftiaxesite.gr` → `ftiaxesite.gr`, use the non-www version
- If both work independently, you may need to create separate callback URLs (GitHub allows multiple callback URLs in some cases)
- **Recommended**: Use the non-www version as the primary callback URL

### 2. Vercel Custom Domain Setup

In Vercel Dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add both domains:
   - `ftiaxesite.gr`
   - `www.ftiaxesite.gr`
3. Configure DNS records as instructed by Vercel
4. Set up redirect (recommended):
   - Redirect `www.ftiaxesite.gr` → `ftiaxesite.gr` (or vice versa)
   - This is in Vercel → Settings → Domains → Configure

### 3. Environment Variables

**No changes needed!** Your environment variables stay the same:
- `KEYSTATIC_GITHUB_OWNER` = `SidebySideWeb`
- `KEYSTATIC_GITHUB_REPO` = `ftiaxesite-keystatic`
- `KEYSTATIC_GITHUB_CLIENT_ID` = `Iv23li2BBPvq1R0rwHgj`
- `KEYSTATIC_GITHUB_CLIENT_SECRET` = `3d71246aa6e52283881ba26fa48f043ca359d7c5`
- `KEYSTATIC_SECRET` = `zYTSvIV4me9WZNNcXZZ4H7g7NWENdDdU2U5K/yZARdA=`
- `KYESTATIC_GITHUB_APP_SLUG` = `keystatic-cms-for-ftiaxesite`

These don't contain URLs, so they don't need updating.

### 4. After Updating GitHub App

1. **Redeploy** your Vercel project (or wait for next deployment)
2. Test the Keystatic admin:
   - Visit `https://ftiaxesite.gr/keystatic`
   - You should be redirected to GitHub for authentication
   - After authorizing, you should be redirected back to `https://ftiaxesite.gr/keystatic`

## ✅ Checklist

- [ ] Update GitHub App Homepage URL to `https://ftiaxesite.gr`
- [ ] Update GitHub App Callback URL to `https://ftiaxesite.gr/api/keystatic/oauth/callback`
- [ ] Add custom domains in Vercel (`ftiaxesite.gr` and `www.ftiaxesite.gr`)
- [ ] Configure DNS records for the domains
- [ ] Set up www redirect (if needed)
- [ ] Test `/keystatic` endpoint on production domain
- [ ] Verify GitHub OAuth callback works

## 🔍 Troubleshooting

**If you get an OAuth error:**
- Make sure the callback URL in GitHub App **exactly matches** your production URL
- Check that the protocol is `https://` (not `http://`)
- Verify the path is `/api/keystatic/oauth/callback`

**If Keystatic doesn't redirect to GitHub:**
- Check that all environment variables are set in Vercel
- Verify the GitHub App is installed on the correct repository
- Make sure you've redeployed after updating GitHub App settings

