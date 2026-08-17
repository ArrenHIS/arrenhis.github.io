(function () {
  'use strict';

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var slides = Array.prototype.slice.call(
      carousel.querySelectorAll('[data-carousel-slide]')
    );
    var status = carousel.querySelector('[data-carousel-status]');
    var currentIndex = 0;

    if (slides.length < 2) {
      return;
    }

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.hidden = slideIndex !== currentIndex;
      });

      status.textContent = (currentIndex + 1) + ' / ' + slides.length;
    }

    carousel.querySelector('[data-carousel-previous]').addEventListener('click', function () {
      showSlide(currentIndex - 1);
    });

    carousel.querySelector('[data-carousel-next]').addEventListener('click', function () {
      showSlide(currentIndex + 1);
    });

    carousel.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showSlide(currentIndex - 1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showSlide(currentIndex + 1);
      }
    });

    showSlide(0);
  });
}());
