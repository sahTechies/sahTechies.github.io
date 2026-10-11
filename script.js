const skillsData = [
    {
        category: "Programming & Development",
        items: [
            { name: "C", icon: "devicon-c-plain" },
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "Android", icon: "devicon-android-plain" },
            { name: "Bash", icon: "devicon-bash-plain" },
            { name: "PowerShell", icon: "fas fa-terminal" },
            { name: "MATLAB", icon: "devicon-matlab-plain" },
            { name: "Java", icon: "devicon-java-plain" }
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            { name: "Git/GitHub", icon: "devicon-github-original" },
            { name: "ROS 2", icon: "fas fa-robot" },
            { name: "Hardware", icon: "fas fa-microchip" },
            { name: "Raspberry Pi", icon: "devicon-raspberrypi-plain" }
        ]
    }
];

const projectsData = [
    {
        title: "Project S.E.I.Z.E.",
        description: "Hack4Safety National Finalist. Engineered a volatile memory acquisition tool using Raspberry Pi Zero 2 W configured in dual-profile USB Gadget Mode. Programmed high-speed PowerShell and Bash payloads for target-scraping RAM data within 5 seconds.",
        image: "Images/HACK4SAFETY/DSC03643.jpg",
        tech: ["Raspberry Pi", "Bash", "PowerShell", "SHA-256"]
    },
    {
        title: "Smart Face Attendance",
        description: "NOOB HACKFEST 2026 National Finalist. Built and deployed a Smart Face Recognition System for Classroom Attendance leveraging facial recognition technology to streamline classroom check-ins.",
        image: "Certificates/Semistor 2/Noob HackFest (7 - 8 feb 2026).png",
        tech: ["Python", "Computer Vision", "AI"]
    },
    {
        title: "Apna Gana",
        description: "Offline Android music player built in Android Studio featuring Media3 playback controls and custom UI architecture.",
        image: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=800",
        tech: ["Java", "Android Studio", "Media3"]
    }
];

const resultsData = [
    {
        title: "Semester 1 Result",
        issuer: "SRM IST",
        date: "Sem 1",
        file: "Certificates/Semistor exam certificates/Sem-1 .jpg",
        preview: "Certificates/Semistor exam certificates/Sem-1 .jpg"
    }
];

const certificatesData = [
    {
        title: "Google Prompting Essentials",
        issuer: "Google / Coursera",
        date: "June 2026",
        file: "https://coursera.org/verify/specialization/LW3V1EMLVGF5",
        pdf: "Certificates/Semistor 3/Google Prompting Essentials Specializations (9-Oct-2026).pdf",
        preview: "Certificates/previews/google_prompting.png"
    },
    {
        title: "Java OOP: Object Oriented",
        issuer: "Coursera",
        date: "Oct 2026",
        file: "https://coursera.org/verify/FMH4EY36KF76",
        pdf: "Certificates/Semistor 3/Java OOP Object Oriented Programming with Exercises (4-Oct-2026).pdf",
        preview: "Certificates/previews/java_oop.png"
    },
    {
        title: "Getting Started with AI",
        issuer: "IBM SkillsBuild",
        date: "March 2026",
        file: "https://www.credly.com/badges/2398a043-c2e7-4f97-9131-680ee3e67cf4",
        pdf: "Certificates/Semistor 2/Getting Started with Artificial Intelligence-Mar 26, 2026.pdf",
        preview: "Certificates/previews/ibm_ai.png"
    },
    {
        title: "Android App Development",
        issuer: "Udemy",
        date: "Dec 2025",
        file: "https://ude.my/UC-8a1d032c-2daf-4ccc-9048-9fa6cb7ac3bc",
        pdf: "Certificates/Semistor 1/Android App Development - Dec. 12, 2025.pdf",
        preview: "Certificates/previews/udemy_android.png"
    },
    {
        title: "Intro to Complex Analysis",
        issuer: "The Open University",
        date: "May 2026",
        file: "https://www.open.edu/openlearn/science-maths-technology/introduction-complex-analysis/content-section-overview",
        pdf: "Certificates/Semistor 2/Math (differential and integration) 3 may 2026.pdf",
        preview: "Certificates/previews/math_complex_analysis.png"
    },
    {
        title: "Curve Fitting Onramp",
        issuer: "MathWorks",
        date: "March 2026",
        file: "Certificates/Semistor 2/matlab 2026-(Curve Fitting Onramp).pdf",
        pdf: "Certificates/Semistor 2/matlab 2026-(Curve Fitting Onramp).pdf",
        preview: "Certificates/previews/matlab_curve_fitting.png"
    },
    {
        title: "AI Ethics",
        issuer: "DataCamp",
        date: "Oct 2026",
        file: "https://www.datacamp.com/statement-of-accomplishment/course/148e058ad02032e6b83a827476f8f59e6034da76?raw=1",
        pdf: "Certificates/Semistor 3/AI Ethics (DATACAMP)- (3-Oct-2026).pdf",
        preview: "Certificates/previews/datacamp_ai_ethics.png"
    }
];

// Populate Skills
const skillsContainer = document.getElementById('skills-container');
skillsData.forEach(category => {
    const card = document.createElement('div');
    card.className = 'cyber-card skill-category';
    
    let iconsHtml = category.items.map(item => `
        <div class="skill-icon-item" title="${item.name}">
            <i class="${item.icon}"></i>
            <span>${item.name}</span>
        </div>
    `).join('');
    
    card.innerHTML = `
        <h3>${category.category}</h3>
        <div class="skills-icon-grid">
            ${iconsHtml}
        </div>
    `;
    skillsContainer.appendChild(card);
});

// Populate Projects
const projectsContainer = document.getElementById('projects-container');
projectsData.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = `project-card ${index % 2 !== 0 ? 'reverse' : ''}`;
    
    let techHtml = project.tech.map(tech => `<span>${tech}</span>`).join('');
    
    card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <div class="project-desc">
                <p>${project.description}</p>
            </div>
            <div class="project-tech">
                ${techHtml}
            </div>
        </div>
    `;
    projectsContainer.appendChild(card);
});

// Populate Certificates
const certificatesContainer = document.getElementById('certificates-container');
certificatesData.forEach(cert => {
    const card = document.createElement('a');
    card.href = cert.file || cert.pdf || "#";
    card.target = "_blank";
    card.className = 'cyber-card cert-gallery-card';

    card.innerHTML = `
        <div class="cert-preview">
            <img src="${cert.preview}" alt="${cert.title}" class="cert-preview-media" loading="lazy">
            <div class="cert-overlay">
                <i class="fas fa-external-link-alt"></i>&nbsp;Verify
            </div>
        </div>
        <div class="cert-info">
            <h4>${cert.title}</h4>
            <p><i class="fas fa-building"></i> ${cert.issuer}</p>
            <p><i class="fas fa-calendar-alt"></i> ${cert.date}</p>
        </div>
    `;
    certificatesContainer.appendChild(card);
});

// Populate Results
const resultsContainer = document.getElementById('results-container');
if (resultsContainer) {
    resultsData.forEach(res => {
        const card = document.createElement('a');
        card.href = res.file || "#";
        card.target = "_blank";
        card.className = 'cyber-card cert-gallery-card';
        
        card.innerHTML = `
            <div class="cert-preview">
                <img src="${res.preview}" alt="${res.title}" class="cert-preview-media">
                <div class="cert-overlay">
                    <i class="fas fa-external-link-alt"></i>&nbsp;View Full
                </div>
            </div>
            <div class="cert-info">
                <h4>${res.title}</h4>
                <p><i class="fas fa-university"></i> ${res.issuer}</p>
                <p><i class="fas fa-file-alt"></i> ${res.date}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu on resize back to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // Auto-close mobile menu upon selecting a link
        if (navLinks && mobileToggle) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
