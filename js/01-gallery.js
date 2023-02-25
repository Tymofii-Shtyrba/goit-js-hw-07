import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContrainerRef = document.querySelector('.gallery');

const createMarkup = function (markupContent) {
  return markupContent.map(contentItem =>
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${contentItem.preview}"
    data-source="${contentItem.original}"
    alt="${contentItem.description}"
    />
    </a>
    </div>`).join('');
}

galleryContrainerRef.innerHTML = createMarkup(galleryItems);

const hendleClick = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    
    event.preventDefault();
  
  const largeImageSource = event.target.getAttribute('data-source');
  const largeImageAlt = event.target.getAttribute('alt');
  const instance = basicLightbox.create(`<img src="${largeImageSource}" alt="${largeImageAlt}">`);

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
  instance.show();
};

galleryContrainerRef.addEventListener('click', hendleClick);