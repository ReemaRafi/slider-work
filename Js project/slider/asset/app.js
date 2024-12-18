let index = 0;

function showSlide() {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (index < 0) index = totalSlides - 1; // Loop back to the last slide
  if (index >= totalSlides) index = 0; // Loop back to the first slide

  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
  index += direction;
  showSlide();
}

// Initialize
showSlide();
