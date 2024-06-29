
// For Side bar Menu Js Code
const sidebar = document.querySelector(".sidebar");
const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.querySelector(".close-btn");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active"); // Toggle active class for the button as well (optional)
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleButton.classList.remove("active"); // Optionally remove active class from toggle button
});
