// Typing effect for tagline
const tagline =
  "| Aspiring Fullstack Engineer | Passionate about DevOps & AI/ML.";
const taglineElement = document.getElementById("tagline");
let index = 0;

function typeTagline() {
  if (index < tagline.length) {
    taglineElement.textContent += tagline.charAt(index);
    index++;
    setTimeout(typeTagline, 50);
  }
}

window.onload = typeTagline;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-250px";
  } else {
    sidebar.style.right = "0px";
  }
}
