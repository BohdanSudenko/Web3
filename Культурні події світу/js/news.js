let currentIndex = 0;

function updateSlider() {
  const track = document.getElementById('sliderTrack');
  const slideWidth = document.querySelector('.news-slide').offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.news-slide');
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  const slides = document.querySelectorAll('.news-slide');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Перевірка при ресайзі вікна
window.addEventListener('resize', updateSlider);

// Початковий показ
window.addEventListener('load', updateSlider);
