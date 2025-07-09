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

// שליחת req_id ל-Google Analytics בלבד
function sendTrackingData() {
    const params = new URLSearchParams(window.location.search);
    const reqId = params.get("req_id");
    const utmSource = params.get("utm_source") || "";
    const utmCampaign = params.get("utm_campaign") || "";

    if (reqId) {
        // המתן עד ש-gtag נטען לפני שליחת האירוע
        const interval = setInterval(() => {
            if (typeof gtag === "function") {
                gtag('event', 'form_submitted', {
                    req_id: reqId,
                    utm_source: utmSource,
                    utm_campaign: utmCampaign
                });
                clearInterval(interval);
            }
        }, 200);
    }
}

// הפעלת האפקטים והמעקב
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    sendTrackingData();
    console.log('CYProTech page loaded successfully!');
});
