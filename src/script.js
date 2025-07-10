// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const mobileThemeIcon = document.getElementById("mobileThemeIcon");
const body = document.body;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeIcon.textContent = "☀️";
  themeText.textContent = "Light";
  mobileThemeIcon.textContent = "☀️";
}

function toggleTheme() {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeIcon.textContent = "☀️";
    themeText.textContent = "Light";
    mobileThemeIcon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.textContent = "🌙";
    themeText.textContent = "Dark";
    mobileThemeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

themeToggle.addEventListener("click", toggleTheme);
mobileThemeToggle.addEventListener("click", toggleTheme);

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll animation to feature cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".feature-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});
