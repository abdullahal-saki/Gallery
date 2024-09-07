const darkBtn = document.querySelector('.darkBtn');
const body = document.querySelector('body');
const darkMode = () => body.classList.toggle('darkmode')

darkBtn.addEventListener('click',darkMode);


const galleryPopup = document.querySelector(".popupGallery");
const galleryImages = Array.from(document.querySelectorAll(".gallImage"));
const galleryPopupImage=galleryPopup.querySelector("img");

const openGallery = (event ) => {
    const image = event.currentTarget.src;
    galleryPopupImage.src = image;
    galleryPopup.classList.add("active");

}


galleryImages.map((gallImg) => gallImg.addEventListener("click", openGallery) );

const cancelBtn =document.querySelector('.cancelBtn')

const closeGallery = ( ) => galleryPopup.classList.remove("active");

cancelBtn.addEventListener('click',closeGallery)