import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeriContainer = document.querySelector('.gallery');

galeriContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

function createGallery(images) {

  return images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src= ${preview}
      alt = ${description}
    />
  </a>
</li>`;
  })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {

  captionsData: 'alt',
  captionDelay: 250,

});

