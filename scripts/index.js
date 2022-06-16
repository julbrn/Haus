const popup = document.querySelector('.popup');
const form = popup.querySelector('.popup__form');
const closingButton = popup.querySelector('.popup__close-button');
const accountButton = document.getElementById('account');

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener("keydown", handleEscPress);
};

function closePopup (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener("keydown", handleEscPress);
};

accountButton.addEventListener('click',
  openPopup);
closingButton.addEventListener('click',
  closePopup);

const handleEscPress = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_active");
    closePopup(popupOpened);
  }
};





