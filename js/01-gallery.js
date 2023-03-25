import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeriContainerEl = document.querySelector('.gallery');

galeriContainerEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galeriContainerEl.addEventListener('click', onGaleriContainerClick);

function createGallery(images) {

  return images.map(({ preview, original, description }) =>
  {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source = ${original}
      alt = ${description}
    />
  </a>
</li>`;
    
        })
    .join('');
}

function onGaleriContainerClick(evt) {

  evt.preventDefault();
    
  const isGalleryImageEl = evt.target.classList.contains('gallery__image');

  if (!isGalleryImageEl) {
    return;
  }

  const onOpenModal = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">
`,
  
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseModal); // додавання слухача подій
      },
      // закрити
      onClose: () => {
        document.removeEventListener("keydown", onCloseModal); // знімання слухача подій
      },
      
    }
  );
  
  onOpenModal.show()

  function onCloseModal(evt) {
     const isEscKey = evt.code === 'Escape';
    if (isEscKey) {
      onOpenModal.close();
    }
  };

};
 






