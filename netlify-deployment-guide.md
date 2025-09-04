# Step-by-Step Netlify Deployment Guide

## Method 1: Drag & Drop (Easiest - 5 minutes)

### Step 1: Prepare Your Files
1. **Select all files** in your `Template CSS` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `docs.html`
   - `docs.css`
   - `netlify.toml`
   - `README.md`

2. **Create a ZIP file** of all these files (optional but recommended)

### Step 2: Deploy to Netlify
1. **Go to** [netlify.com](https://netlify.com)
2. **Click "Sign up"** (use GitHub, Google, or email)
3. **After login**, you'll see the dashboard
4. **Look for** the big box that says **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**
5. **Drag your folder** (or ZIP file) into this box
6. **Wait 30-60 seconds** for deployment

### Step 3: Your Site is Live!
- You'll get a URL like: `https://amazing-name-123456.netlify.app`
- **Click the URL** to see your live site

### Step 4: Test Your Form
1. **Go to your live site**
2. **Scroll to the contribution form**
3. **Fill it out and submit**
4. **Check Netlify dashboard** → Site Settings → Forms

---

## Method 2: GitHub Integration (Recommended for Updates)

### Step 1: Use Your Existing Repository
✅ **You already have a repository created**
- Repository is ready for deployment
- Skip to Step 2 to upload files

### Step 2: Upload Your Files
**Option A: GitHub Web Interface**
1. **Click "uploading an existing file"**
2. **Drag all your files** into the upload area
3. **Write commit message:** "Initial Snap UI landing page"
4. **Click "Commit changes"**

**Option B: Git Commands** (if you have Git installed)
```bash
cd "C:\Users\Lenovo\Desktop\Template CSS"
git init
git add .
git commit -m "Initial Snap UI landing page"
git branch -M main
git remote add origin [YOUR_NEW_REPO_URL]
git push -u origin main
```

### Step 3: Connect to Netlify
1. **Go to** [netlify.com](https://netlify.com) and login
2. **Click "New site from Git"**
3. **Choose "GitHub"**
4. **Authorize Netlify** to access your GitHub
5. **Select your repository** from the list
6. **Deploy settings:**
   - Build command: (leave empty)
   - Publish directory: (leave empty or put `.`)
7. **Click "Deploy site"**

### Step 4: Your Site is Live!
- **Auto-deploys** whenever you update GitHub
- **Custom domain** available in site settings

---

## Method 3: Netlify CLI (Advanced)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Deploy
```bash
cd "C:\Users\Lenovo\Desktop\Template CSS"
netlify deploy
netlify deploy --prod
```

---

## After Deployment: Form Setup

### Step 1: Activate Forms
1. **Submit a test form** on your live site
2. **Go to Netlify dashboard**
3. **Click your site name**
4. **Go to "Forms" tab**
5. **You should see your form submission**

### Step 2: Set Up Notifications (Optional)
1. **In Forms tab**, click "Settings and usage"
2. **Add notification email**
3. **Get notified** when someone submits

### Step 3: Access Form Data
- **View submissions:** Netlify Dashboard → Your Site → Forms
- **Export data:** Click "Export" for CSV download
- **Spam protection:** Automatically enabled

---

## Troubleshooting

### Form Not Working?
1. **Check form has `netlify` attribute** ✅ (already added)
2. **Submit test form** to activate
3. **Wait 5 minutes** for processing

### Site Not Loading?
1. **Check all files uploaded**
2. **Ensure `index.html` is in root**
3. **Check browser console** for errors

### Custom Domain Setup
1. **Go to Site Settings** → Domain Management
2. **Add custom domain**
3. **Update DNS records** with your domain provider

---

## Quick Start (Recommended)

**For fastest deployment:**

1. **Go to** [netlify.com](https://netlify.com)
2. **Sign up/Login**
3. **Drag your `Template CSS` folder** to the deploy box
4. **Wait 1 minute**
5. **Your site is live!**

**Your form will automatically:**
- ✅ Collect submissions
- ✅ Filter spam
- ✅ Send notifications
- ✅ Store data securely

**Next steps:**
- Test the form
- Customize the site name
- Add a custom domain (optional)