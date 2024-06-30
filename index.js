
// For Side bar Menu Js Code
const sidebar = document.querySelector(".sidebar");
const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.querySelector(".close-btn");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active"); 
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleButton.classList.remove("active"); 
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

  currentSlide = Math.max(currentSlide, 0); 
  currentSlide = Math.min(currentSlide, 5);

  sliderTrack.classList.remove('active'); 
  sliderTrack.offsetWidth; 
  sliderTrack.classList.add('active'); 

  sliderTrack.style.transform = `translateX(-${currentSlide * (100 / 6)}%)`; 
}

prevButton.addEventListener('click', () => moveSlide('prev'));
nextButton.addEventListener('click', () => moveSlide('next'));


// Auth From
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

 
  loginMessage.textContent = "Login successful (not secure)";
});



//
const languageSwitcher = document.getElementById('language-switcher');

let currentLanguage = 'ge'; 

languageSwitcher.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'ge' ? 'en' : 'ge'; 

  console.log(`Language changed to: ${currentLanguage}`);

  languageSwitcher.src = `Images/lang${currentLanguage}.svg`;
  languageSwitcher.alt = `Language (${currentLanguage === 'ge' ? 'Georgia' : 'Spanish'})`;
});


