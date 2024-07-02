let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  slides[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + direction + slides.length) % slides.length;

  slides[currentIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slide')[0].classList.add('active');
});
