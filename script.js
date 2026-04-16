const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  if (toggleButton) {
    toggleButton.textContent = "☀️";
  }
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌙";
    }
  });
}