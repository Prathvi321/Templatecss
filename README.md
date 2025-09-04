# Snap UI Landing Page

A modern, responsive landing page for a serverless component library project.

## Features

- **Hero Section**: Bold headline with clear call-to-action
- **Vision Section**: Project description with benefit cards
- **Contribution Form**: Collects contributor information
- **Marketplace Vision**: Future roadmap explanation
- **Responsive Design**: Works on all device sizes
- **Netlify Ready**: Configured for serverless deployment

## Quick Start

1. Clone or download the files
2. Open `index.html` in your browser for local preview
3. Deploy to Netlify by connecting your repository

## Deployment on Netlify

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Deploy automatically (no build process needed)

## Form Integration

The contributor form currently logs data to console. To integrate with a backend:

1. Replace the TODO section in `script.js` with your API endpoint
2. Or integrate with services like:
   - Google Sheets API
   - Netlify Forms
   - Formspree
   - EmailJS

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Customization

- **Colors**: Modify CSS variables in `styles.css`
- **Content**: Update text in `index.html`
- **Fonts**: Change Google Fonts import in HTML head
- **Form**: Add/remove fields in the contribution section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)