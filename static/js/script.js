
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

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


    /* =================================
       MOUSE FOLLOW PURPLE GLOW
    ================================= */

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.addEventListener("pointermove", function (event) {

            if (event.pointerType === "touch") return;

            const rect = hero.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            hero.style.setProperty("--mouse-x", x + "px");
            hero.style.setProperty("--mouse-y", y + "px");

        });

        hero.addEventListener("pointerleave", function () {

            hero.style.setProperty("--mouse-x", "50%");
            hero.style.setProperty("--mouse-y", "50%");

        });

    }

});
