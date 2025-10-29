# How to Use Keystatic in Local Mode on Vercel (Production)

## Important Note About Local Mode on Vercel

**Local mode on Vercel has limitations:**
- ✅ **Reading content works** - Content files committed to your repo will be available
- ❌ **Writing content does NOT persist** - Any edits made through Keystatic UI will be lost after the serverless function restarts
- ⚠️ **Best for**: Static content that you edit locally and commit to Git, then deploy

## Steps to Enable Local Mode

### Option 1: Force Local Mode (Recommended for Static Content)

1. **In Vercel Dashboard → Settings → Environment Variables**, add:
   ```
   KEYSTATIC_USE_LOCAL=true
   ```

2. **Remove or don't set** any GitHub-related variables:
   - Don't set `KEYSTATIC_GITHUB_OWNER`
   - Don't set `KEYSTATIC_GITHUB_REPO`
   - Don't set `KEYSTATIC_GITHUB_CLIENT_ID`
   - Don't set `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - Don't set `KEYSTATIC_SECRET`

3. **Redeploy** your project

### Option 2: Just Don't Set GitHub Variables

If you don't set any GitHub environment variables, Keystatic will automatically use local mode.

## How It Works

1. **Content is read from `/apps/web/content/`** directory in your repository
2. This content is committed to Git and deployed with your code
3. The Keystatic admin UI will load and display this content
4. **However**: Any edits made through the UI won't persist (they're only in memory)

## Recommended Workflow for Local Mode

### 1. Edit Content Locally

```bash
# In your local development environment
pnpm dev
# Visit http://localhost:3000/keystatic
# Make your edits
```

### 2. Commit Changes

```bash
# Edits are saved to apps/web/content/
git add apps/web/content/
git commit -m "Update content via Keystatic"
git push
```

### 3. Deploy to Vercel

Vercel will automatically redeploy with your new content.

## Troubleshooting

### `/api/keystatic/tree` Returns 404

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on the failed function to see error logs

2. **Verify Environment Variables**:
   - If using local mode: Only set `KEYSTATIC_USE_LOCAL=true` (or nothing at all)
   - Don't mix GitHub and local mode variables

3. **Check Content Directory**:
   - Ensure `apps/web/content/` exists and has files
   - Files should be committed to Git

### Content Not Showing

1. **Verify files are in the repo**:
   ```bash
   git ls-files apps/web/content/
   ```

2. **Check file permissions**:
   - Files should be readable
   - No special permissions needed in Vercel

### Build Errors

If you get build errors about missing config:
- Set `KEYSTATIC_USE_LOCAL=true` in Vercel
- Or remove all GitHub-related env vars

## Alternative: Use GitHub Mode (Recommended for Production)

For persistent content editing in production, use GitHub mode:
- Content edits are saved to your GitHub repo
- Changes persist across deployments
- Multiple users can collaborate

See `VERCEL_ENV_SETUP.md` for GitHub mode setup.

