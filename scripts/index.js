const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const closingButton = popup.querySelector('.popup__close-button');
const accountButton = document.querySelector('.account');

function openPopup() {
  popup.classList.add('popup_active');
  document.addEventListener("keydown", handleEscPress);
};

function closePopup () {
  popup.classList.remove('popup_active');
  popupForm.reset();
  document.removeEventListener("keydown", handleEscPress);
};

accountButton.addEventListener('click',
  openPopup);

closingButton.addEventListener('click',
  closePopup);

const handleEscPress = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_active");
    closePopup();
  }
};

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  let i;
  let slides = document.querySelectorAll(".quotes__card");
  let dots = document.querySelectorAll(".slider-dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("quotes__card_active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", " ");
  }
  slides[slideIndex-1].classList.add("quotes__card_active");
  dots[slideIndex-1].classList.add("active");
}

