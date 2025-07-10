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

function sendIdToWebhook() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
        fetch("https://prod-171.westeurope.logic.azure.com:443/workflows/37e36087f93d4d26ae0a535fd2ab8b7e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=npAdSkb8ROa2dTbbJ16c3tezz9g8a62MDB0D6kMRKME", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            console.log("ID sent to webhook successfully");
        })
        .catch(error => {
            console.error("Failed to send ID to webhook:", error);
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    sendIdToWebhook();
    console.log('CYProTech page loaded successfully!');
});
