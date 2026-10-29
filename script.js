document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Light / Dark Theme Toggle with Memory (localStorage)
    // -------------------------------------------------------------
    const themeBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Load saved theme from previous visits, or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    
    if (themeBtn) {
        themeBtn.textContent = savedTheme === 'dark' ? '☀' : '☾';
        
        themeBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeBtn.textContent = newTheme === 'dark' ? '☀' : '☾';
        });
    }

    // -------------------------------------------------------------
    // 2. Multilingual Greeting Rotator (English / Spanish / Italian)
    // -------------------------------------------------------------
    const greetingEl = document.getElementById('greeting');

    if (greetingEl) {
        const greetings = ["Hello!", "Hola!", "Ciao!"];
        let currentIndex = 0;

        // Swaps the text every 2.2 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % greetings.length;
            greetingEl.textContent = greetings[currentIndex];
        }, 2200);
    }

    // -------------------------------------------------------------
    // 3. Mobile Navigation Menu Toggle
    // -------------------------------------------------------------
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
        });
    }
});