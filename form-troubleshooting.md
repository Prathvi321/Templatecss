# Netlify Form Troubleshooting

## 🔍 Check These Common Issues

### 1. Form Attribute Check
**Your form MUST have:**
```html
<form netlify name="contributor-form">
```

**Current form should look like:**
```html
<form id="contributorForm" class="contributor-form" netlify>
    <input type="hidden" name="form-name" value="contributor-form">
    <!-- other fields -->
</form>
```

### 2. JavaScript Interference
**Problem:** Your JavaScript prevents form submission to Netlify

**Solution:** Modify your `script.js` to allow Netlify submission:

```javascript
// REPLACE the form submission handler with this:
document.getElementById('contributorForm').addEventListener('submit', function(e) {
    // Don't prevent default - let Netlify handle it
    // e.preventDefault(); // REMOVE THIS LINE
    
    // Show loading state
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    // Let Netlify handle the actual submission
    // The form will submit naturally to Netlify
});
```

### 3. Check Form Detection
1. **Go to Netlify Dashboard**
2. **Click your site**
3. **Go to "Forms" tab**
4. **Look for "Active forms" section**
5. **You should see "contributor-form" listed**

### 4. Manual Form Activation
If form not detected:
1. **Add this to your HTML `<head>`:**
```html
<!-- Netlify Form Detection -->
<form name="contributor-form" netlify hidden>
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="url" name="portfolio">
    <select name="experience">
        <option value="beginner">Beginner</option>
    </select>
    <textarea name="skills"></textarea>
    <textarea name="motivation"></textarea>
</form>
```

### 5. Test Form Submission
1. **Go to your live site**
2. **Fill out form completely**
3. **Click submit**
4. **You should be redirected to a success page**
5. **Check Netlify dashboard after 2-3 minutes**

## 🚨 Quick Fix Steps

### Step 1: Update Your Form
Make sure your form has both attributes:
```html
<form id="contributorForm" class="contributor-form" netlify name="contributor-form">
```

### Step 2: Remove JavaScript Prevention
In `script.js`, comment out or remove:
```javascript
// e.preventDefault(); // Remove this line
```

### Step 3: Redeploy
1. **Update your GitHub repository**
2. **Netlify will auto-deploy**
3. **Test form again**

### Step 4: Check Submissions
- **Netlify Dashboard → Your Site → Forms**
- **Look for "contributor-form"**
- **Check submissions list**

## 📧 Alternative: Email Notifications
If still not working, set up email notifications:
1. **Forms tab → Settings**
2. **Add notification email**
3. **You'll get emails when forms are submitted**

## 🔄 Last Resort: Recreate Form
If nothing works:
1. **Create a simple test form:**
```html
<form netlify name="test-form">
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <button type="submit">Submit</button>
</form>
```
2. **Test this simple form first**
3. **Once working, add complexity back**