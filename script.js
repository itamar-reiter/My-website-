// Initialize AOS library
AOS.init({ duration: 400 });

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  });
});

// Header fade on scroll
let lastScroll = 0;
const navBar = document.getElementById("navBar");
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > 50) {
    navBar.classList.add("hidden");
  } else {
    navBar.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});