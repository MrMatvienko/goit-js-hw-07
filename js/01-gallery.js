import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ original, preview, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join("");
}
list.addEventListener("click", onclick);

function onclick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
}
