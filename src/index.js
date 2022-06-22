import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import './styles/reset.css';
import './styles/main.scss';

const multipleCardCarousel = document.querySelector('#carouselService');
if (window.matchMedia('(min-width: 768px)').matches) {
  const carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  const carouselIndicators = document.querySelector('#carouselService .carousel-indicators');
  carouselIndicators.addEventListener('click', (e) => {
    const carouselItems = carousel._items;
    const targetButton = e.target;
    carouselItems.forEach((card, index) => {
      if ([...targetButton.classList].includes('active') && [...card.classList].includes('active')) {
        document
          .querySelector('#carouselService .carousel-inner')
          .scroll({ left: card.scrollWidth * index, top: 0, behavior: 'smooth' });
      }
    });
  });
} else {
  multipleCardCarousel.classList.add('slide');
}
