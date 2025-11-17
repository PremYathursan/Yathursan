// Navigation Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.add('active');
        body.style.overflow = 'hidden';
    });
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        body.style.overflow = 'auto';
    });
}

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Scroll to Top Button
const scrollBtn = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});

// Enhanced typing effect with multiple colors
const typingText = document.getElementById('typingText');
if (typingText) {
    const texts = [
        'Creative Developer',
        'UI/UX Designer', 
        'Data Science Enthusiast',
        'Problem Solver',
        'Technical Instructor',
        'Software Developer'
    ];
    const colors = ['#4070f4', '#667eea', '#9b59b6', '#e74c3c', '#2ecc71', '#f39c12'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let colorIndex = 0;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Change text color
        typingText.style.color = colors[colorIndex];
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            colorIndex = (colorIndex + 1) % colors.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 150);
        }
    }
    
    setTimeout(type, 1000);
}

// Animate skill bars on scroll
const skillItems = document.querySelectorAll('.skill-item');

function animateSkills() {
    skillItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const skillLevel = item.querySelector('.skill-level');
        const rect = item.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            skillLevel.style.width = percent + '%';
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Download CV Button
// Simple CV Download with correct filename
document.getElementById('downloadCv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Premkumar Yathursan CV.pdf'; // No underscores
    link.download = 'Premkumar Yathursan CV.pdf'; // No underscores
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
        

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.menu a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// Form submission animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Re-enable button after 5 seconds in case of error
            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            }, 5000);
        }
    });
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Animate background shapes on scroll
const shapes = document.querySelectorAll('.animated-bg .shape');
window.addEventListener('scroll', () => {
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(window.pageYOffset * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Close modal functionality
const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeProjectModal);
}

// Global function to close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Global function to scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Console message for developers
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #4070f4; font-weight: bold;');
console.log('%cInterested in collaborating? Let\'s connect!', 'font-size: 14px; color: #667eea;');
console.log('%cEmail: premyathu@gmail.com', 'font-size: 12px; color: #64748b;');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Skills animation will be triggered by scroll
    setTimeout(animateSkills, 1000);
});

// Mobile Navigation Menu Toggle - Fixed Version
function initializeMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    
    console.log('Mobile menu elements:', { menuBtn, cancelBtn, menu }); // Debug log

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menu button clicked'); // Debug log
            menu.classList.add('active');
            menuBtn.style.display = 'none';
            body.style.overflow = 'hidden';
        });
    } else {
        console.log('Menu button not found');
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            console.log('Cancel button clicked'); // Debug log
            menu.classList.remove('active');
            menuBtn.style.display = 'block';
            body.style.overflow = 'auto';
        });
    } else {
        console.log('Cancel button not found');
    }

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            if (menuBtn) menuBtn.style.display = 'block';
            body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            menu.classList.remove('active');
            if (menuBtn) menuBtn.style.display = 'block';
            body.style.overflow = 'auto';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    console.log('Mobile menu initialized'); // Debug log
});

