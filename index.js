// Accordion functionality
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Scroll-to-Top Button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = "Toggle Dark Mode";
document.body.appendChild(darkModeToggle);

darkModeToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
};

// Dark Mode CSS
const darkModeCSS = `
    body.dark-mode {
        background-color: #333;
        color: #eee;
    }
    body.dark-mode .hero-section {
        background: linear-gradient(to right, #333, #222);
    }
    body.dark-mode .cta-btn {
        background-color: #777;
    }
    body.dark-mode .accordion-toggle {
        background-color: #555;
        color: white;
    }
    body.dark-mode .accordion-content {
        background-color: #444;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeCSS;
document.head.appendChild(styleSheet);