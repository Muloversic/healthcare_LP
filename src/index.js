import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import './styles/reset.css';
import './styles/main.scss';

const multipleCardCarouselService = document.querySelector('#carouselService');
const multipleCardCarouselClients = document.querySelector('#carouselClients');
if (window.matchMedia('(min-width: 768px)').matches) {
  // start carousel one
  const carouselService = new bootstrap.Carousel(multipleCardCarouselService, {
    interval: false,
  });

  const carouselIndicators = document.querySelector('#carouselService .carousel-indicators');
  carouselIndicators.addEventListener('click', (e) => {
    const carouselItems = carouselService._items;
    const targetButton = e.target;
    carouselItems.forEach((card, index) => {
      if ([...targetButton.classList].includes('active') && [...card.classList].includes('active')) {
        document
          .querySelector('#carouselService .carousel-inner')
          .scroll({ left: card.scrollWidth * index, top: 0, behavior: 'smooth' });
      }
    });
  });
  //   end carousel one

  // 	start carousel two
  const carouselClients = new bootstrap.Carousel(multipleCardCarouselClients, {
    interval: false,
  });
  const carouselWidth = document.querySelector('#carouselClients .carousel-inner').scrollWidth;
  const cardWidth = document.querySelector('#carouselClients .carousel-item').scrollWidth;
  let scrollPosition = 0;

  document.querySelector('#carouselClients .carousel-control-next').addEventListener('click', function () {
    const lastCarouselItem = carouselClients._items[carouselClients._items.length - 1];
    const firstCarouselItem = carouselClients._items[0];

    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      document
        .querySelector('#carouselClients .carousel-inner')
        .scroll({ left: scrollPosition, top: 0, behavior: 'smooth' });
    }

    if ([...firstCarouselItem.classList].includes('active') && ![...lastCarouselItem.classList].includes('active')) {
      scrollPosition = 0;
      document.querySelector('#carouselClients .carousel-inner').scroll({ left: 0, top: 0, behavior: 'smooth' });
    }
  });

  document.querySelector('#carouselClients .carousel-control-prev').addEventListener('click', function () {
    const lastCarouselItem = carouselClients._items[carouselClients._items.length - 1];
    const firstCarouselItem = carouselClients._items[0];

    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      document
        .querySelector('#carouselClients .carousel-inner')
        .scroll({ left: scrollPosition, top: 0, behavior: 'smooth' });
    }

    if (![...firstCarouselItem.classList].includes('active') && [...lastCarouselItem.classList].includes('active')) {
      scrollPosition = carouselWidth - cardWidth;
      document
        .querySelector('#carouselClients .carousel-inner')
        .scroll({ left: scrollPosition, top: 0, behavior: 'smooth' });
    }
  });
} else {
  multipleCardCarouselService.classList.add('slide');
}
