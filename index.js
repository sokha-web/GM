
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


// Inline news

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const sliderTrack = document.querySelector('.slider-track');
let currentSlide = 0;

function moveSlide(direction) {
  if (direction === 'prev') {
    currentSlide--;
  } else {
    currentSlide++;
  }

  currentSlide = Math.max(currentSlide, 0); // Don't go beyond first slide
  currentSlide = Math.min(currentSlide, 5); // Don't go beyond last slide

  sliderTrack.classList.remove('active'); // Remove active class for transition
  sliderTrack.offsetWidth; // Force reflow to ensure smooth transition
  sliderTrack.classList.add('active'); // Add active class for transition

  sliderTrack.style.transform = `translateX(-${currentSlide * (100 / 6)}%)`; // Adjust based on slide width calculation
}

prevButton.addEventListener('click', () => moveSlide('prev'));
nextButton.addEventListener('click', () => moveSlide('next'));


