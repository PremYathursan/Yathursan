// All portfolio data
const portfolioData = {
    education: [
        {
            degree: 'Bachelor of Arts (Honors) Information Technology',
            institution: 'University of Sri Jayewardenepura',
            location: 'Colombo',
            period: 'Jan 2022 - Dec 2025',
            specialization: 'Specialization in Data Science',
            logo: 'images/usjp-logo.webp'
        },
        {
            degree: 'Bachelor of Information Technology',
            institution: 'University of Colombo, School of Computing',
            location: 'Colombo',
            period: 'Oct 2024 - July 2027',
            specialization: '',
            logo: 'images/ucsc-logo.png'
        },
        {
            degree: 'Diploma in English',
            institution: 'BLC Campus',
            location: 'Jaffna',
            period: 'Jan 2022 - March 2022',
            specialization: '',
            logo: 'images/blc-logo.png'
        },
        {
            degree: 'Diploma in Sinhala',
            institution: 'CASED Institute',
            location: '',
            period: 'Jan 2023 - Jan 2024',
            specialization: '',
            logo: 'images/cased-logo.jpg'
        },
        {
            degree: 'Advanced Level',
            institution: 'J/Vaidyeshwara College',
            location: 'Jaffna',
            period: 'May 2018 - Dec 2020',
            specialization: 'Arts Stream (2AB with ICT) - Z-Score: 1.88',
            logo: 'images/jvc-logo.webp'
        },
        {
            degree: 'Ordinary Level',
            institution: 'J/Vaidyeshwara College',
            location: 'Jaffna',
            period: 'Jan 2017 - Dec 2017',
            specialization: '6A\'s, 2B\'s, 1C',
            logo: 'images/jvc-logo.webp'
        }
    ],

    experience: [
        {
            position: 'Main Instructor',
            company: 'IgniterSpace (Pvt) Ltd',
            location: 'Colombo',
            logo: 'images/igniterspace-logo.jpeg',
            period: 'Aug 2024 - Present',
            description: 'Conduct hands-on STEAM workshops and teach coding concepts to students.',
            responsibilities: [
                'Conduct hands-on STEAM workshops (Science, Technology, Engineering, Arts, Math)',
                'Facilitate innovation design thinking sessions',
                'Teach foundational to advanced coding concepts',
                'Guide project-based learning initiatives',
                'Mentor students in creative problem-solving'
            ]
        },
        {
            position: 'POS Software Developer',
            company: 'StarkVerse IT (Pvt) Ltd',
            location: 'Jaffna',
            period: 'July 2025 - Present',
            description: 'Work on the development, customization, and maintenance of ERP systems, POS software, and WordPress websites, ensuring seamless functionality and user experience for clients.',
            logo: 'images/logo.jpg',
            responsibilities: [
                'Assist in the setup, configuration, and troubleshooting of ERP and POS software systems.',
                'Customize system modules to meet client-specific business requirements.',
                'Support data management and integration between different business operations.',
                'Develop and maintain WordPress-based websites, including theme and plugin customization.',
                'Optimize website performance and ensure responsive, user-friendly interfaces.',
                'Collaborate with team members to deliver efficient, reliable software solutions.'
            ]
        }
    ],

    skills: {
        'Programming': [
            {name: 'Python', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
            {name: 'JavaScript', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
            {name: 'PHP', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'},
            {name: 'Java', percent: 50, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
            {name: 'R', percent: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg'}
        ],
        'Web Tech': [
            {name: 'HTML5', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
            {name: 'CSS3', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
            {name: 'Bootstrap', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'},
            {name: 'WordPress', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'},
            {name: 'Shopify', percent: 75, icon: 'images/Shopify-Logo-PNG-File.png'}
        ],
        'Frameworks': [
            {name: 'React Native', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
            {name: 'Node.js', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
            {name: 'React', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'},
            {name: 'Laravel', percent: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'}        
        ],
        'Data Science': [
            {name: 'SQL', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
            {name: 'PowerBI', percent: 75, icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0YyQzgxMSIvPjxwYXRoIGQ9Ik04IDhIMTJDMTMuMTA0NiA4IDE0IDguODk1NDMgMTQgMTBWMTRDMTQgMTUuMTA0NiAxMy4xMDQ2IDE2IDEyIDE2SDhWOFoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTE1IDhIMThDMTkuMTA0NiA4IDIwIDguODk1NDMgMjAgMTBWMTRDMjAgMTUuMTA0NiAxOS4xMDQ2IDE2IDE4IDE2SDE3VjEySDE2VjEwSDE3VjhIMTVaIiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xNiAxMkgxOFYxNEgxNlYxMloiIGZpbGw9IiNGMkM4MTEiLz48L3N2Zz4='},
            {name: 'Big Data', percent: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'},
            {name: 'Machine Learning', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg'},
            {name: 'AI & Neural Network', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg'}
        ],
        'Development Tools': [
            {name: 'VS Code', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'},
            {name: 'Android Studio', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'},
            {name: 'R Studio', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg'}
        ],
        'Design Tools': [
            {name: 'Figma', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'},
            {name: 'Photoshop', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'},
            {name: 'Illustrator', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg'},
            {name: 'Canva', percent: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'}
        ]
    },

    projects: [
        {
            id: 'medipulse',
            title: 'MediPulse Health App',
            icon: 'fas fa-heartbeat',
            short_desc: 'Mobile health app for patient-doctor communication using React Native, Node.js & MySQL.',
            full_desc: 'MediPulse is a comprehensive healthcare mobile application designed to bridge the gap between patients and healthcare providers. The app features real-time appointment booking, medical record management, prescription tracking, and secure messaging between patients and doctors. Built with a focus on user experience and security, it implements JWT authentication and end-to-end encryption for sensitive medical data.',
            technologies: ['React Native', 'Node.js', 'MySQL', 'REST API', 'JWT Auth'],
            features: [
                'Real-time appointment scheduling',
                'Prescription tracking and reminders',
                'Secure patient-doctor messaging',
                'Medical records management',
                'Push notifications',
                'Video consultation integration'
            ],
            images: ['images/medipulse-2.jpg', 'images/medipulse-3.jpg', 'images/medipulse-4.jpg']
        },
        {
            id: 'coffee-craze',
            title: 'Coffee Craze Website',
            icon: 'fas fa-coffee',
            short_desc: 'Responsive e-commerce website for coffee shop with online ordering system.',
            full_desc: 'Coffee Craze is a fully responsive e-commerce website for a premium coffee shop. The website features an elegant design with smooth animations, product catalog, shopping cart functionality, and a seamless checkout process. The site is optimized for all devices and includes features like product filtering, search functionality, customer reviews, and inventory management.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
            features: [
                'Fully responsive design',
                'Product catalog with filtering',
                'Shopping cart & checkout',
                'Customer review system',
                'Inventory management',
                'Order tracking'
            ],
            images: ['images/coffee-1.png', 'images/coffee-2.png', 'images/coffee-3.png']
        },
        {
            id: 'queen-hotel',
            title: 'Queen Hotel Website',
            icon: 'fas fa-hotel',
            short_desc: 'Hotel booking website with room reservation system and admin panel.',
            full_desc: 'Queen Hotel is a comprehensive hotel booking website that allows users to browse rooms, check availability, and make reservations online. The platform includes an admin panel for managing bookings, room inventory, and customer information. Features include real-time availability checking, multiple payment options, and automated confirmation emails.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            features: [
                'Room availability checking',
                'Online booking system',
                'Multiple payment options',
                'Admin management panel',
                'Customer review system',
                'Automated email confirmations'
            ],
            images: ['images/queen-1.png', 'images/queen-2.png', 'images/queen-3.png']
        },
        {
            id: 'fhss-portal',
            title: 'FHSS Students Portal',
            icon: 'fas fa-user-graduate',
            short_desc: 'Mobile app for student management and communication using React Native.',
            full_desc: 'FHSS Students Portal is a comprehensive mobile application designed for the Faculty of Humanities and Social Sciences students. The app provides a centralized platform for academic information, attendance tracking, grade management, and campus announcements. Features include a digital student ID, course registration, exam schedules, and peer-to-peer messaging with real-time updates.',
            technologies: ['React Native', 'Firebase', 'Figma', 'REST API'],
            features: [
                'Digital student ID card',
                'Course registration system',
                'Attendance tracking',
                'Grade and result portal',
                'Campus announcements',
                'Student messaging system'
            ],
            images: ['images/fhss-1.jpg', 'images/fhss-2.jpg', 'images/fhss-3.jpg']
        },
        {
            id: 'ace-app',
            title: 'ACE Freelancing Platform',
            icon: 'fas fa-briefcase',
            short_desc: 'UX/UI design for freelance platform focusing on user experience and HCI principles.',
            full_desc: 'ACE is a modern freelancing platform designed with extensive user research to solve common pain points in the gig economy. The UX/UI design emphasizes clear navigation, trust-building elements, and seamless project management. The interface reduces friction in hiring and project completion with intuitive workflows, milestone-based payments, and integrated communication tools.',
            technologies: ['Figma', 'Adobe XD', 'UX Research', 'HCI Principles'],
            features: [
                'Intuitive project posting',
                'Skill-based matching algorithm',
                'Integrated messaging system',
                'Milestone payment system',
                'Portfolio showcase',
                'Review and rating system'
            ],
            images: ['images/ace-1.png', 'images/ace-2.png', 'images/ace-3.png']
        },
        {
            id: 'wordpress-site',
            title: 'WordPress Website',
            icon: 'fab fa-wordpress',
            short_desc: 'Custom WordPress website with Elementor for department management.',
            full_desc: 'A professional WordPress website built with custom themes and Elementor page builder. The site serves as a central information hub with news sections, event calendars, document repositories, and contact management. Features responsive design, SEO optimization, and easy content management for non-technical users.',
            technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL', 'cPanel'],
            features: [
                'Custom WordPress theme',
                'News and announcements',
                'Event calendar',
                'Document repository',
                'Contact form management',
                'SEO optimized'
            ],
            images: ['images/dept-1.png', 'images/dept-2.png']
        },
        {
            id: 'railway-dashboard',
            title: 'Railway Data Analytics Dashboard',
            icon: 'fas fa-train',
            short_desc: 'Data analysis and visualization of railway operations using Power BI and R.',
            full_desc: 'A comprehensive data analytics project analyzing railway operations to identify patterns and optimization opportunities. Includes interactive Power BI dashboards for passenger flow analysis, delay patterns, and revenue optimization. Statistical analysis in R provides predictive models for demand forecasting and resource allocation decisions.',
            technologies: ['Power BI', 'R Language', 'Data Analysis', 'SQL', 'Statistics'],
            features: [
                'Interactive Power BI dashboards',
                'Passenger flow analysis',
                'Delay pattern identification',
                'Revenue optimization insights',
                'Predictive demand modeling',
                'Performance metrics tracking'
            ],
            images: ['images/railway-1.png', 'images/railway-2.png', 'images/railway-3.png']
        },
        {
            id: 'mobile-analysis',
            title: 'Mobile Phone Sales Analysis',
            icon: 'fas fa-mobile-alt',
            short_desc: 'Data analysis of best-selling mobile phones with Power BI dashboards.',
            full_desc: 'Comprehensive analysis of mobile phone market trends and sales data. The project includes interactive Power BI dashboards showing market share analysis, price-performance ratios, customer preferences, and sales patterns across different regions and time periods.',
            technologies: ['Power BI', 'Data Analysis', 'Excel', 'Data Visualization'],
            features: [
                'Market share analysis',
                'Price-performance comparison',
                'Regional sales trends',
                'Customer preference insights',
                'Competitive analysis',
                'Sales forecasting'
            ],
            images: ['images/powerbi-1.png']
        },
        {
            id: 'tourism-app',
            title: 'Tourism App UI/UX Design',
            icon: 'fas fa-map-marked-alt',
            short_desc: 'UI/UX design for tourism mobile application with focus on user experience.',
            full_desc: 'Complete UI/UX design for a tourism mobile application featuring destination discovery, itinerary planning, booking integration, and local recommendations. The design focuses on intuitive navigation, visual appeal, and seamless user journey from discovery to booking.',
            technologies: ['Figma', 'Adobe Photoshop', 'UI/UX Design', 'Prototyping'],
            features: [
                'Destination discovery',
                'Itinerary planning',
                'Booking integration',
                'Local recommendations',
                'Interactive maps',
                'User reviews and ratings'
            ],
            images: ['images/toursim-1.png']
        },
        {
            id: 'stock-prediction',
            title: 'Stock Market Analysis Dashboard',
            icon: 'fas fa-chart-line',
            short_desc: 'Stock market data analysis and prediction models using R and data visualization.',
            full_desc: 'Advanced stock market analysis project featuring predictive modeling, trend analysis, and interactive dashboards. Uses historical data to identify patterns and build prediction models for stock performance. Includes risk assessment and portfolio optimization features.',
            technologies: ['R Language', 'Data Analysis', 'Statistics', 'Machine Learning'],
            features: [
                'Stock trend analysis',
                'Predictive modeling',
                'Risk assessment',
                'Portfolio optimization',
                'Technical indicators',
                'Performance metrics'
            ],
            images: ['images/rstock-1.png', 'images/rstock-2.png']
        },
        {
            id: 'todo-app',
            title: 'To-Do List Application',
            icon: 'fas fa-tasks',
            short_desc: 'Interactive task management application with JavaScript and local storage.',
            full_desc: 'A feature-rich to-do list application built with vanilla JavaScript. Includes task categorization, priority levels, due dates, and local storage persistence. The app features a clean, responsive interface with smooth animations and intuitive task management workflows.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
            features: [
                'Task categorization',
                'Priority levels',
                'Due date tracking',
                'Local storage',
                'Responsive design',
                'Task filtering and search'
            ],
            images: ['images/todo-1.png']
        },
        {
            id: 'ml-project',
            title: 'Machine Learning Classification',
            icon: 'fas fa-brain',
            short_desc: 'Machine learning project for classification using various algorithms and data preprocessing.',
            full_desc: 'Comprehensive machine learning project implementing multiple classification algorithms including Decision Trees, Random Forest, and SVM. Features extensive data preprocessing, feature engineering, model evaluation, and performance comparison across different algorithms with visualization of results.',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
            features: [
                'Multiple ML algorithms',
                'Data preprocessing',
                'Feature engineering',
                'Model evaluation',
                'Performance comparison',
                'Result visualization'
            ],
            images: ['images/ml-1.png', 'images/ml-2.png', 'images/ml-3.png']
        }
    ]
};

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    populateEducation();
    populateExperience();
    populateSkills();
    populateProjects();
    setCurrentYear();
}

function populateEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    if (educationTimeline) {
        portfolioData.education.forEach(edu => {
            const eduItem = document.createElement('div');
            eduItem.className = 'timeline-item';
            eduItem.innerHTML = `
                <div class="timeline-date">${edu.period}</div>
                <div class="timeline-content">
                    ${edu.logo ? `<div class="institution-logo"><img src="${edu.logo}" alt="${edu.institution}" width="40"></div>` : ''}
                    <h4 class="degree-title">${edu.degree}</h4>
                    <p>${edu.institution}${edu.location ? `, ${edu.location}` : ''}</p>
                    ${edu.specialization ? `<p>${edu.specialization}</p>` : ''}
                </div>
            `;
            educationTimeline.appendChild(eduItem);
        });
    }
}

function populateExperience() {
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (experienceTimeline) {
        portfolioData.experience.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.className = 'timeline-item';
            
            const responsibilitiesHTML = exp.responsibilities.map(resp => 
                `<li style="color: #64748b !important;"><i class="fas fa-check-circle" style="color: #10b981 !important;"></i> ${resp}</li>`
            ).join('');
            
            expItem.innerHTML = `
                <div class="timeline-date">${exp.period}</div>
                <div class="timeline-content">
                    ${exp.logo ? `<div class="company-logo"><img src="${exp.logo}" alt="${exp.company}" width="40"></div>` : ''}
                    <h4 class="job-title" style="color: #6366f1 !important;">${exp.position}</h4>
                    <p style="color: #6366f1 !important; font-weight: 600;">${exp.company}, ${exp.location}</p>
                    <ul class="teaching-roles">${responsibilitiesHTML}</ul>
                </div>
            `;
            experienceTimeline.appendChild(expItem);
        });
    }
}

function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        for (const [category, skills] of Object.entries(portfolioData.skills)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            
            const skillsHTML = skills.map(skill => `
                <div class="skill-item" data-percent="${skill.percent}">
                    <div class="skill-icon">
                        <img src="${skill.icon}" alt="${skill.name}" onerror="this.src='images/default-icon.png'">
                    </div>
                    <div class="skill-details">
                        <span>${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-level"></div>
                        </div>
                    </div>
                </div>
            `).join('');
            
            categoryDiv.innerHTML = `
                <div class="category-header">
                    <i class="fas fa-code"></i>
                    <h3>${category}</h3>
                </div>
                <div class="skills-list">${skillsHTML}</div>
            `;
            skillsGrid.appendChild(categoryDiv);
        }
    }
}

function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-project', project.id);
            
            const techHTML = project.technologies.map(tech => `<span>${tech}</span>`).join('');
            
            projectCard.innerHTML = `
                <div class="project-header">
                    <div class="project-icon">
                        <i class="${project.icon}"></i>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <div class="project-content">
                    <p>${project.short_desc}</p>
                    <div class="project-tech">${techHTML}</div>
                    <div class="project-link">View Project <i class="fas fa-arrow-right"></i></div>
                </div>
            `;
            
            projectCard.addEventListener('click', () => {
                showProjectModal(project);
            });
            
            projectsGrid.appendChild(projectCard);
        });
    }
}

function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    const techHTML = project.technologies.map(tech => `<span>${tech}</span>`).join('');
    const featuresHTML = project.features.map(feature => `
        <div class="feature-item">
            <i class="fas fa-check-circle"></i>
            <span>${feature}</span>
        </div>
    `).join('');
    
    const imagesHTML = project.images && project.images.length > 0 ? `
        <div class="project-section">
            <h2>Project Screenshots</h2>
            <div class="project-images">
                ${project.images.map(image => `
                    <div class="project-img">
                        <img src="${image}" alt="${project.title}" onerror="this.style.display='none'">
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';
    
    modalContent.innerHTML = `
        <div class="project-hero">
            <h1>${project.title}</h1>
            <p>${project.short_desc}</p>
            <div class="tech-tags">${techHTML}</div>
        </div>
        <div class="project-body">
            <div class="project-description">
                ${project.full_desc}
            </div>
            
            <div class="project-section">
                <h2>Key Features</h2>
                <div class="features-list">${featuresHTML}</div>
            </div>
            
            ${imagesHTML}
            
            <div class="project-links">
                <button class="project-btn back-btn" onclick="closeProjectModal()">
                    <i class="fas fa-arrow-left"></i> Back to Projects
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Global functions for HTML onclick events
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }

});
