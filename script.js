document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            const navMenu = document.getElementById('main-nav');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Skill bar animation on scroll
    const skillBars = document.querySelectorAll('.skill-level');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const skillWidth = skillLevel.style.width;
                skillLevel.style.width = '0%';
                setTimeout(() => {
                    skillLevel.style.width = skillWidth;
                }, 100);
                observer.unobserve(skillLevel);
            }
        });
    }, {
        threshold: 0.7
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // Mobile menu toggle functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('main-nav');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});