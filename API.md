# Snap UI API Reference

## Form Integration API

### Contributor Form Endpoint

**Endpoint:** `POST /api/contributors`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "portfolio": "string (optional, valid URL)",
  "experience": "string (required, enum: beginner|intermediate|senior)",
  "skills": "string (optional)",
  "motivation": "string (optional)",
  "timestamp": "string (ISO 8601 date)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contributor application received",
  "id": "contributor_id"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation error message",
  "code": "VALIDATION_ERROR"
}
```

## JavaScript Events API

### Form Events

```javascript
// Form submission
document.getElementById('contributorForm').addEventListener('submit', (e) => {
  // Handle form submission
});

// Form validation
document.querySelectorAll('input[required]').forEach(input => {
  input.addEventListener('blur', validateField);
});
```

### Navigation Events

```javascript
// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', smoothScroll);
});

// Navbar scroll effect
window.addEventListener('scroll', updateNavbar);
```

### Animation Events

```javascript
// Intersection Observer for animations
const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});
```

## CSS Custom Properties

### Color Variables
```css
:root {
  --cream: #faf8f5;
  --cream-light: #fefcfa;
  --cream-dark: #f5f2ed;
  --black: #1a1a1a;
  --black-light: #2d2d2d;
  --black-soft: #404040;
  --accent: #d4af37;
  --accent-light: #e6c866;
  --text-primary: #1a1a1a;
  --text-secondary: #404040;
  --text-muted: #666666;
  --border: #e8e5e0;
  --shadow: rgba(26, 26, 26, 0.1);
}
```

### Typography Variables
```css
:root {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Monaco', 'Menlo', monospace;
}
```

## Component Classes

### Layout Classes
- `.container` - Main content container (max-width: 1200px)
- `.section-header` - Centered section headers
- `.hero-content` - Hero section grid layout
- `.features-grid` - Feature cards grid
- `.component-categories` - Component category grid

### Button Classes
- `.cta-primary` - Primary call-to-action button
- `.cta-secondary` - Secondary button with outline
- `.nav-cta` - Navigation CTA button
- `.submit-button` - Form submit button

### Form Classes
- `.contributor-form` - Main form container
- `.form-group` - Individual form field wrapper
- `.form-row` - Two-column form row

### Animation Classes
- `.feature-card` - Animated feature cards
- `.category-card` - Animated category cards
- `.step` - Animated step items

## Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| Intersection Observer | 51+ | 55+ | 12.1+ | 15+ |
| Backdrop Filter | 76+ | 103+ | 9+ | 79+ |

## Performance Metrics

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Features
- Lazy loading for images
- CSS minification ready
- JavaScript bundling ready
- Font display optimization
- Critical CSS inlining ready