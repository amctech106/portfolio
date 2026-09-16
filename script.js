/* =====================================================
   PERSONAL DATA
===================================================== */

const developer = {

    name: "Abdul Majeed",

    role: "Frontend Developer",

    description:
        "I create modern, responsive and user-friendly websites using HTML, CSS and JavaScript.",

    aboutTitle:
        "A passionate web developer",

    aboutText:
        "I am a passionate developer who enjoys learning JavaScript and building useful web applications. I love turning ideas into clean and functional interfaces.",

    email:
        "amc.pk106@gmail.com",

    location:
        "Karachi, Pakistan"

};


/* =====================================================
   SKILLS DATA
===================================================== */

const skills = [

    {
        name: "HTML",
        icon: "🌐",
        description: "Semantic and structured web pages"
    },

    {
        name: "CSS",
        icon: "🎨",
        description: "Responsive and modern UI design"
    },

    {
        name: "JavaScript",
        icon: "⚡",
        description: "Interactive web applications"
    },

    {
        name: "Git & GitHub",
        icon: "📦",
        description: "Version control and repositories"
    },

    {
        name: "Supabase",
        icon: "🗄️",
        description: "Database and authentication"
    },

    {
        name: "DOM",
        icon: "🌳",
        description: "Dynamic HTML manipulation"
    },

    {
        name: "Responsive Design",
        icon: "📱",
        description: "Mobile friendly interfaces"
    },

    {
        name: "API",
        icon: "🔗",
        description: "Working with external data"
    }

];


/* =====================================================
   PROJECTS DATA
===================================================== */

const projects = [

    {
        title: "Tafheem ul Masail",
        icon: "📚",

        description:
            "A digital Islamic book reader with 14 volumes and approximately 8000 pages, Arabic and Urdu fonts, search and navigation.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        link: "https://github.com/amctech106/Tafhim-ul-Masail"
    },

    {
        title: "QuickServe",
        icon: "⚡",

        description:
            "A service booking application where customers can book services and providers can manage bookings.",

        technologies: [
            "React",
            "Supabase",
            "JavaScript"
        ],

        link: "https://quickserve-app-bice.vercel.app/"
    },

    {
        title: "Tasbih Counter",
        icon: "📿",

        description:
            "A simple digital tasbih counter with localStorage support.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        link: "https://amctech106.github.io/Tasbih-Counter/"
    }

];


/* =====================================================
   ADD PERSONAL DATA TO HTML
===================================================== */

document.querySelector("#heroName").textContent =
    developer.name;

document.querySelector("#heroRole").textContent =
    developer.role;

document.querySelector("#heroDescription").textContent =
    developer.description;

document.querySelector("#aboutTitle").textContent =
    developer.aboutTitle;

document.querySelector("#aboutText").textContent =
    developer.aboutText;

document.querySelector("#email").textContent =
    developer.email;

document.querySelector("#location").textContent =
    developer.location;

document.querySelector("#footerName").textContent =
    developer.name;


/* =====================================================
   DISPLAY SKILLS
===================================================== */

const skillsContainer =
    document.querySelector("#skillsContainer");


if (skillsContainer) {

    skills.forEach(function(skill) {

        const card = document.createElement("div");
        card.className = "skill-card";

        card.innerHTML =
            "<div class='skill-icon'>" + skill.icon + "</div>" +
            "<h3>" + skill.name + "</h3>" +
            "<p>" + skill.description + "</p>";

        skillsContainer.appendChild(card);

    });

}


/* =====================================================
   DISPLAY PROJECTS
===================================================== */

const createProjectLink = function(url) {

    if (!url) return "#";

    if (/^https?:\/\//i.test(url)) {
        return url;
    }

    if (/^(\/|\.\/|\.\.\/)/.test(url)) {
        return new URL(url, window.location.href).href;
    }

    if (/^[a-z0-9.-]+\.[a-z]{2,}/i.test(url)) {
        return "https://" + url;
    }

    return new URL(url, window.location.href).href;

};


const projectsContainer =
    document.querySelector("#projectsContainer");


if (projectsContainer) {

    projects.forEach(function(project) {

        let tags = "";

        project.technologies.forEach(function(technology) {
            tags += "<span>" + technology + "</span>";
        });

        const projectUrl = createProjectLink(project.link);

        const article = document.createElement("article");
        article.className = "project-card";

        article.innerHTML =
            "<div class='project-image'>" + project.icon + "</div>" +
            "<div class='project-content'>" +
            "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "</p>" +
            "<div class='project-tags'>" + tags + "</div>" +
            "<a href='" + projectUrl + "' class='project-link' target='_blank' rel='noopener noreferrer'>View Project →</a>" +
            "</div>";

        projectsContainer.appendChild(article);

    });

}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.querySelector("#menuBtn");

const navLinks =
    document.querySelector("#navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    /* Close menu after clicking a link */

    const navItems =
        document.querySelectorAll(".nav-links a");

    navItems.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });

}


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn =
    document.querySelector("#themeBtn");


if (themeBtn) {

    themeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

    });

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector("#contactForm");

const formStatus =
    document.querySelector("#formStatus");


if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        if (formStatus) {
            formStatus.textContent = "Sending...";
            formStatus.className = "form-status";
            formStatus.style.display = "block";
        }

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                if (formStatus) {
                    formStatus.textContent = "Thank you! Your message has been received.";
                    formStatus.className = "form-status success";
                }
                contactForm.reset();
            } else {
                if (formStatus) {
                    formStatus.textContent = "Something went wrong. Please try again.";
                    formStatus.className = "form-status error";
                }
            }
        } catch (error) {
            if (formStatus) {
                formStatus.textContent = "Unable to send your message right now.";
                formStatus.className = "form-status error";
            }
        }

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

document.querySelector("#year").textContent =
    new Date().getFullYear();

