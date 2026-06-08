// Data for memories
const memoryData = {
    study: {
        title: "Late-night Study Sessions",
        icon: "📚🌙",
        content: "Remember all those nights we stayed up late, surrounded by books and fueled by coffee? Even when the subjects were tough, having you there made every hour worth it. We pushed each other to be our best."
    },
    conversations: {
        title: "Deep Conversations",
        icon: "☕💭",
        content: "From silly hypotheticals to the most profound thoughts about life and our future. I cherish those moments where we just talk for hours, understanding each other on a level no one else does."
    },
    movie: {
        title: "Movie Nights",
        icon: "🍿🎬",
        content: "Cuddling up with popcorn and watching our favorite films. Whether it was laughing until we cried or hiding behind blankets during a thriller, these cozy nights are my favorite place to be."
    },
    vadapav: {
        title: "Home & Vada Pav",
        icon: "🏡🍔",
        content: "The simplest things are often the most special. Meeting at home, stealing moments together, and devouring delicious Vada Pav. It's the comfort of our shared space and favorite snacks that feels like true love."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Particles.js initialization
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#f8bbd0"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                },
                "size": {
                    "value": 4,
                    "random": true,
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 200,
                        "size": 6,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Envelope Interaction
    const envelope = document.getElementById('envelope');
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    // Modal Interaction
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal');
    const polaroids = document.querySelectorAll('.polaroid');

    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            const memoryId = polaroid.getAttribute('data-memory');
            const data = memoryData[memoryId];
            
            if (data) {
                modalBody.innerHTML = `
                    <div class="memory-detail">
                        <span class="icon-large">${data.icon}</span>
                        <h3 class="decorative-text">${data.title}</h3>
                        <p>${data.content}</p>
                    </div>
                `;
                modal.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
