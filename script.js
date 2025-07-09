// יצירת חלקיקים נעים
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
        particlesContainer.appendChild(particle);
    }
}

// הפעלת האפקטים
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // אפשר להוסיף כאן פונקציות נוספות
    console.log('CYProTech page loaded successfully!');
});
