import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContrainerRef = document.querySelector('.gallery');

const createMarkup = function (markupContent) {
  return markupContent.map(contentItem =>
    `<a class="gallery__item" href="${contentItem.original}">
      <img class="gallery__image" src="${contentItem.preview}" alt="${contentItem.description}" />
    </a>`).join('');
}

galleryContrainerRef.innerHTML = createMarkup(galleryItems);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
