// Get the navbar toggle button
const navbarToggle = document.querySelector(".navbar-toggler");

// Get the navbar collapse element
const navbarCollapse = document.querySelector(".navbar-collapse");

// Add an event listener to the navbar toggle button
navbarToggle.addEventListener("click", () => {
  // Toggle the navbar collapse element
  navbarCollapse.classList.toggle("show");
});
// Add JavaScript code to toggle the dark mode class
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    sun.classList.add("d-block");
    sun.classList.remove("d-none");
    moon.classList.add("d-none");
  } else {
    sun.classList.remove("d-block");
    sun.classList.add("d-none");
    moon.classList.remove("d-none");
    moon.classList.add("d-block");
  }
});
