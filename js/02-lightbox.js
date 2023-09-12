import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, description, original }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
