  // Smooth Scrolling مع تعويض navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 70; // ارتفاع navbar
      const topPos = target.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  });
});

// Typing Animation
const text =
  "my name is Ziad Ayman Abdalla Elmaghraby, a passionate Front-End Developer skilled in HTML, CSS, JavaScript, and React. I also have strong experience in C++, Java, Python, and OOP.I enjoy building clean, responsive, and user-friendly interfaces, and I’m always looking to learn new technologies to improve my work. I have a strong problem-solving mindset and love turning ideas into real, functional projects. I am constantly developing my skills through personal projects, teamwork, and continuous learning.";
let i = 0;
const typingText = document.getElementById("typing-text");
const aboutSection = document.querySelector(".about-container");
let started = false;

function type() {
  if (i < text.length) {
    typingText.textContent += text[i];
    i++;
    setTimeout(type, 25);
  }
}

// Desktop: start typing on hover
aboutSection.addEventListener("mouseenter", () => {
  if (!started && window.innerWidth > 768) {
    started = true;
    type();
  }
});

// Mobile: start typing on load
window.addEventListener("load", () => {
  if (!started && window.innerWidth <= 768) {
    started = true;
    type();
  }
});

// Profile Image 3D Hover
const img = document.querySelector('.profile-img');

img.addEventListener('mousemove', (e) => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  img.style.setProperty('--rotateY', `${x / 20}deg`);
  img.style.setProperty('--rotateX', `${-y / 20}deg`);
});

img.addEventListener('mouseleave', () => {
  img.style.setProperty('--rotateY', '0deg');
  img.style.setProperty('--rotateX', '0deg');
});
