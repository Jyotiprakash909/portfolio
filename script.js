AOS.init();

const typed = new Typed("#typed", {
  strings: ["MCA Student", "Java & C Programmer", "Web Developer", "Fast Learner"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});





