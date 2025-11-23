import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery__item">
    <a href="${largeImageURL}" class="gallery__link">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery__image" />
    </a>
    <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
    </div>
    </li>
`).join('');

    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    document.querySelector('.loader').classList.remove('loader-hidden');
}

export function hideLoader() {
    document.querySelector('.loader').classList.add('loader-hidden');
}