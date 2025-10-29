# Troubleshooting Guide

## Common Issues and Solutions

### 1. `/api/keystatic/tree` Returns 404

**Symptom**: Keystatic admin shows 404 error for `/api/keystatic/tree`

**Possible Causes & Solutions**:

#### A. Missing Environment Variables
- **Check**: Vercel Dashboard → Settings → Environment Variables
- **Required Variables**:
  - `KEYSTATIC_GITHUB_OWNER` = `SidebySideWeb`
  - `KEYSTATIC_GITHUB_REPO` = `ftiaxesite-keystatic`
  - `KEYSTATIC_GITHUB_CLIENT_ID` = `Iv23li2BBPvq1R0rwHgj`
  - `KEYSTATIC_GITHUB_CLIENT_SECRET` = `3d71246aa6e52283881ba26fa48f043ca359d7c5`
  - `KEYSTATIC_SECRET` = `zYTSvIV4me9WZNNcXZZ4H7g7NWENdDdU2U5K/yZARdA=`
  - `KYESTATIC_GITHUB_APP_SLUG` = `keystatic-cms-for-ftiaxesite`

**Action**: 
1. Verify all variables are set in Vercel
2. Make sure they're enabled for **Production** environment
3. **Redeploy** after adding variables

#### B. Route File Not Deployed
- **Check**: Verify `apps/web/app/api/keystatic/[[...params]]/route.ts` exists
- **Action**: Push a new commit to trigger redeploy

#### C. Build Error
- **Check**: Vercel Build Logs for errors
- **Action**: Fix any TypeScript or build errors

### 2. Vercel Analytics 404 Error

**Symptom**: `GET /_vercel/insights/script.js 404`

**Solution**: This is normal if Web Analytics isn't enabled. To enable:
1. Go to Vercel Dashboard → Your Project → Settings → Analytics
2. Enable "Web Analytics"
3. Redeploy

**Or**: The Analytics component will only load if `NEXT_PUBLIC_VERCEL` is set (automatic in Vercel).

### 3. Formspree 403 Error

**Symptom**: Form submission returns 403

**Solutions**:
1. **Check Formspree Form Status**: Ensure form `movkkzry` is active
2. **Domain Restrictions**: Check if Formspree has domain restrictions
3. **Rate Limiting**: Check if you've exceeded Formspree limits
4. **Verify Form Data**: Ensure all required fields are included

The form now uses `FormData` format which is the standard for Formspree.

### 4. Keystatic Not Redirecting to GitHub

**Symptom**: Visiting `/keystatic` doesn't redirect to GitHub for auth

**Solutions**:
1. **Check Environment Variables**: All Keystatic env vars must be set
2. **Check GitHub App**: Verify callback URL in GitHub App settings
3. **Check GitHub App Installation**: Ensure app is installed on the repository
4. **Redeploy**: After making changes, redeploy on Vercel

### 5. Build Fails with TypeScript Errors

**Symptom**: Build fails with "Property does not exist" errors

**Solution**: 
- The code now has proper type guards and fallbacks
- Ensure you're using the latest version from GitHub
- Run `pnpm install` to ensure dependencies are up to date

## Quick Diagnostic Commands

```bash
# Check if environment variables are accessible (in local dev)
node -e "console.log(process.env.KEYSTATIC_GITHUB_OWNER)"

# Check build locally
cd apps/web && pnpm build

# Check for TypeScript errors
pnpm type-check
```

## Getting Help

If issues persist:
1. Check Vercel deployment logs
2. Check browser console for specific errors
3. Verify all environment variables in Vercel
4. Ensure GitHub App is correctly configured
5. Verify all files are committed and pushed to GitHub

