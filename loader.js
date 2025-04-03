// script.js
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');
    
    // Wait for the longest animation to finish (2s + 0.7s delay = 2.7s)
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 3000);
});