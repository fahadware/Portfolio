// Typing effect for tagline
const tagline =
  "| Aspiring Next-Gen Fullstack Engineer | Passionate about DevOps & AI/ML.";
const taglineElement = document.getElementById("tagline");
let index = 0;

function typeTagline() {
  if (index < tagline.length) {
    taglineElement.textContent += tagline.charAt(index);
    index++;
    setTimeout(typeTagline, 50);
  }
}

window.onload = function() {
  typeTagline();

  // Particle effect for Download CV button (now an <a> link)
  const particleField = document.getElementById('particleFieldCv');
  if (particleField) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
      particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
      particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleField.appendChild(particle);
    }
  }
};

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-250px";
  } else {
    sidebar.style.right = "0px";
  }
}

  function setGlowColor() {
    const hour = new Date().getHours();
    const img = document.querySelector('.circle-img::after');
    const style = document.createElement('style');

    let color = 'rgba(255,255,255,0.15)'; // default white

    if (hour >= 6 && hour < 12) {
      color = 'rgba(255, 230, 100, 0.2)'; // yellow for morning
    } else if (hour >= 12 && hour < 18) {
      color = 'rgba(255, 150, 50, 0.2)'; // orange for afternoon
    } else {
      color = 'rgba(100, 150, 255, 0.2)'; // blue for night
    }

    style.innerHTML = `
      .circle-img::after {
        border: 2px solid ${color};
      }
    `;
    document.head.appendChild(style);
  }

  setGlowColor();
