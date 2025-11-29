import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(e) {
    e.preventDefault();

    query = input.value.trim();
    if (!query) {
    iziToast.error({ message: "Search field cannot be empty!" });
    return;
}

    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
        iziToast.info({
        message: "No images found. Try another query.",
    });
        return;
    }

    createGallery(data.hits);

    if (page * 15 < totalHits) showLoadMoreButton();
} catch {
    iziToast.error({ message: "Fetch error. Try again later." });
} finally {
    hideLoader();
}
}

async function onLoadMore() {
    page++;
    showLoader();
    hideLoadMoreButton();

    try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    smoothScroll();

    if (page * 15 >= totalHits) {
        iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
    });
        hideLoadMoreButton();
        return;
    }

    showLoadMoreButton();
} catch {
    iziToast.error({ message: "Failed to load more images." });
} finally {
    hideLoader();
}
}

function smoothScroll() {
    const card = document.querySelector(".gallery__item");
    if (!card) return;

    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
});
}