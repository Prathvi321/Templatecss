# Upload Snap UI to GitHub - Step by Step

## Method 1: GitHub Web Interface (Easiest)

### Step 1: Go to Your Repository
1. **Open your new GitHub repository** in browser
2. **You should see an empty repository** with setup instructions

### Step 2: Upload Files
1. **Click "uploading an existing file"** (blue link)
2. **Drag and drop ALL files** from your `Template CSS` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `docs.html`
   - `docs.css`
   - `netlify.toml`
   - `README.md`
   - `API.md`
   - `form-options.md`
   - `netlify-deployment-guide.md`

### Step 3: Commit Files
1. **Scroll down** to "Commit changes"
2. **Write commit message:** `Initial Snap UI landing page`
3. **Click "Commit changes"** (green button)

### Step 4: Verify Upload
- **Refresh the page**
- **You should see all your files** listed
- **Click `index.html`** to preview

---

## Method 2: Git Commands (If you have Git installed)

### Step 1: Open Command Prompt
1. **Press Windows + R**
2. **Type `cmd`** and press Enter
3. **Navigate to your folder:**
```bash
cd "C:\Users\Lenovo\Desktop\Template CSS"
```

### Step 2: Initialize Git
```bash
git init
git add .
git commit -m "Initial Snap UI landing page"
```

### Step 3: Connect to Repository
```bash
git branch -M main
git remote add origin [YOUR_REPOSITORY_URL]
git push -u origin main
```

**Replace `[YOUR_REPOSITORY_URL]` with your actual repository URL**

---

## Method 3: GitHub Desktop (User-Friendly)

### Step 1: Download GitHub Desktop
1. **Go to** [desktop.github.com](https://desktop.github.com)
2. **Download and install**

### Step 2: Clone Repository
1. **Open GitHub Desktop**
2. **Click "Clone a repository from the Internet"**
3. **Select your repository**
4. **Choose local path**

### Step 3: Copy Files
1. **Copy all files** from `Template CSS` folder
2. **Paste into** the cloned repository folder
3. **GitHub Desktop will detect changes**

### Step 4: Commit and Push
1. **Write commit message:** `Initial Snap UI landing page`
2. **Click "Commit to main"**
3. **Click "Push origin"**

---

## Verify Your Upload

### Check Repository
1. **Go to your GitHub repository**
2. **You should see:**
   - ✅ `index.html` (main page)
   - ✅ `styles.css` (styling)
   - ✅ `script.js` (animations)
   - ✅ `docs.html` (documentation)
   - ✅ All other files

### Enable GitHub Pages (Optional)
1. **Go to repository Settings**
2. **Scroll to "Pages" section**
3. **Source:** Deploy from a branch
4. **Branch:** main
5. **Click Save**
6. **Your site will be live at:** `https://yourusername.github.io/repository-name`

---

## Next Steps

After uploading to GitHub:

1. ✅ **Files are backed up** and version controlled
2. ✅ **Ready for Netlify deployment**
3. ✅ **Can collaborate** with others
4. ✅ **Track changes** over time

**Ready for Netlify?** Follow the Netlify deployment guide next!