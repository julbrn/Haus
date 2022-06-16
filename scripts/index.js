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





