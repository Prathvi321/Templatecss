// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animated Counter Function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target >= 1000 ? (target / 1000).toFixed(0) + 'K' : target;
        }
    }
    updateCounter();
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
});

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Form submission handler with enhanced animations
document.getElementById('contributorForm').addEventListener('submit', function(e) {
    // Allow Netlify to handle form submission
    // e.preventDefault(); // Commented out for Netlify
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        portfolio: document.getElementById('portfolio').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value,
        motivation: document.getElementById('motivation').value,
        timestamp: new Date().toISOString()
    };
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.experience) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Show loading state with animation
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<span class="loading-spinner"></span> Submitting...';
    submitButton.disabled = true;
    
    // Add loading spinner styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Log form data (replace with actual API call)
    console.log('Contributor Form Submission:', formData);
    
    // Simulate API call with enhanced feedback
    setTimeout(() => {
        // Show success notification
        showNotification('Thank you for your interest in contributing! We\'ll review your application and get back to you within 48 hours.', 'success');
        
        // Reset form with animation
        this.reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Remove loading styles
        document.head.removeChild(style);
        
        // Add success animation to form
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    }, 2000);
});

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            max-width: 400px;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        .notification.success {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
        }
        .notification.error {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
        }
        .notification.info {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .notification-icon {
            font-weight: bold;
            font-size: 1.2rem;
        }
        .notification-message {
            flex: 1;
            font-size: 0.9rem;
        }
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .notification.show {
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
                document.head.removeChild(style);
            }
        }, 300);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
                document.head.removeChild(style);
            }
        }, 300);
    });
}

// CTA button handlers with enhanced animations
document.querySelectorAll('.cta-primary').forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        if (this.textContent.includes('Start')) {
            // Scroll to components section
            document.querySelector('#components').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (this.textContent.includes('Contributing')) {
            // Scroll to contribution form
            document.querySelector('#contribute').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.cta-secondary').forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        if (this.textContent.includes('Documentation')) {
            // Open documentation page with animation
            window.open('docs.html', '_blank');
        } else if (this.textContent.includes('Beta')) {
            // Scroll to contribution form for beta signup
            document.querySelector('#contribute').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add stagger effect for multiple elements
            if (entry.target.parentElement.classList.contains('features-grid') ||
                entry.target.parentElement.classList.contains('component-categories')) {
                const siblings = Array.from(entry.target.parentElement.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .category-card, .step, .vision-point, .section-header');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Interactive ecosystem diagram
document.addEventListener('DOMContentLoaded', function() {
    const nodes = document.querySelectorAll('.orbit-node');
    const center = document.querySelector('.pulse-center');
    
    nodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            // Pause animation and highlight
            this.style.animationPlayState = 'paused';
            this.style.zIndex = '10';
            
            // Add glow effect to center
            if (center) {
                center.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.6)';
            }
        });
        
        node.addEventListener('mouseleave', function() {
            // Resume animation
            this.style.animationPlayState = 'running';
            this.style.zIndex = '1';
            
            // Remove glow effect
            if (center) {
                center.style.boxShadow = '';
            }
        });
    });
});

// Form validation enhancements with real-time feedback
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            showFieldError(this, 'Please enter a valid email address');
        } else {
            this.style.borderColor = '';
            this.style.boxShadow = '';
            removeFieldError(this);
        }
    });
});

document.querySelectorAll('input[type="url"]').forEach(input => {
    input.addEventListener('blur', function() {
        const url = this.value;
        
        if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
            this.value = 'https://' + url;
        }
    });
});

// Field error display functions
function showFieldError(field, message) {
    removeFieldError(field);
    
    const error = document.createElement('div');
    error.className = 'field-error';
    error.textContent = message;
    error.style.cssText = `
        color: #ef4444;
        font-size: 0.8rem;
        margin-top: 4px;
        animation: fadeInUp 0.3s ease;
    `;
    
    field.parentNode.appendChild(error);
}

function removeFieldError(field) {
    const error = field.parentNode.querySelector('.field-error');
    if (error) {
        error.remove();
    }
}

// Add typing effect to hero text
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--accent)';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                // Remove cursor after typing
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing after initial animation
        setTimeout(typeWriter, 1000);
    }
});

// Add mouse trail effect
document.addEventListener('mousemove', function(e) {
    if (window.innerWidth > 768) { // Only on desktop
        createTrailDot(e.clientX, e.clientY);
    }
});

function createTrailDot(x, y) {
    const dot = document.createElement('div');
    dot.style.cssText = `
        position: fixed;
        top: ${y}px;
        left: ${x}px;
        width: 4px;
        height: 4px;
        background: var(--accent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: trailFade 0.8s ease-out forwards;
    `;
    
    // Add trail animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes trailFade {
            0% { opacity: 0.8; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
    `;
    if (!document.querySelector('#trail-styles')) {
        style.id = 'trail-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(dot);
    
    // Remove dot after animation
    setTimeout(() => {
        if (dot.parentNode) {
            dot.remove();
        }
    }, 800);
}

// Add scroll progress indicator
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), var(--accent-light));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});

// Mobile menu toggle (enhanced)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const navbar = document.querySelector('.navbar .container');
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--black);
            cursor: pointer;
            display: block;
        `;
        menuButton.addEventListener('click', toggleMobileMenu);
        navbar.appendChild(menuButton);
    }
});