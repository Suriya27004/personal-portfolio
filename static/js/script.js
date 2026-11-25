
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

/* =================================
   HERO TYPING ANIMATION
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const roles = [
            "Python Developer",
            "Django Developer",
            "Full Stack Developer",
            "Web Developer"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentRole = roles[roleIndex];

            if (deleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingText.textContent = currentRole.substring(0, charIndex);

            let speed = deleting ? 45 : 90;

            if (!deleting && charIndex === currentRole.length) {
                deleting = true;
                speed = 1400;

            } else if (deleting && charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 400;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }
});
