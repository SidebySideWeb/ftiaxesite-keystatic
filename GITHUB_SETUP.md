# GitHub Setup for Keystatic

## 🚀 **Quick Setup Guide**

### Step 1: Create GitHub Repository

Go to https://github.com/new and create a new repository:
- **Owner**: SidebySideWeb
- **Repository name**: `ftiaxesite-keystatic`
- **Visibility**: Public (required for Keystatic)
- **Initialize**: ✅ Add a README file

### Step 2: Start Your Dev Server

```bash
cd C:\Users\dgero\Documents\ai-projects-new\key\ftiaxesite
pnpm dev
```

### Step 3: Access Keystatic Admin

Visit: **http://localhost:3000/keystatic**

You'll see a "Login with GitHub" button.

### Step 4: First-Time Setup

1. Click "Login with GitHub"
2. You'll be prompted to create a GitHub App
3. Enter your deployed project URL (leave blank for local development)
4. Click "Create GitHub App"
5. Grant the app access to your `ftiaxesite-keystatic` repository
6. You'll be redirected back to Keystatic admin

### Step 5: Environment Variables

After setup, Keystatic will automatically generate a `.env.local` file with:

```bash
KEYSTATIC_GITHUB_CLIENT_ID=...
KEYSTATIC_GITHUB_CLIENT_SECRET=...
KEYSTATIC_SECRET=...
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=...
```

**Important**: Copy these to your production environment when deploying!

### Step 6: Test It!

1. Edit some content in Keystatic admin
2. Click save
3. Check your GitHub repository - you should see commits!
4. Refresh your frontend - changes appear immediately!

## ✅ **What This Enables**

- ✅ **Real-time Updates**: Changes appear on frontend immediately
- ✅ **Version Control**: Every change is a Git commit
- ✅ **Backup**: Your content is safely stored in GitHub
- ✅ **Collaboration**: Multiple people can edit content
- ✅ **History**: Track all changes over time
- ✅ **No Manual Refresh Needed**: Content updates automatically

## 🔧 **Troubleshooting**

**"The redirect_uri is not associated with this application"**
- Go to https://github.com/settings/apps
- Find your Keystatic app
- Add a Callback URL: `http://localhost:3000/api/keystatic/complete`
- Save and try again

**Can't access Keystatic after GitHub setup:**
- Make sure you're logged in with GitHub
- Check that you have write access to the repository
- Restart the dev server

**Changes don't appear:**
- Check your GitHub repository for commits
- Make sure the `.env.local` file exists with the credentials
- Try restarting the dev server

## 🎯 **Next Steps**

Once GitHub mode is working:
1. Edit content through Keystatic admin
2. See changes on your frontend
3. Deploy to production with the same setup
4. Multiple editors can work together!

---

**Ready to start?** Visit **http://localhost:3000/keystatic** and click "Login with GitHub"! 🚀
