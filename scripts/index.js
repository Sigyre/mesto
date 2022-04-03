// карточки из коробки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//попап профиля
const editProfile = document.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const autorName = document.querySelector('.profile__name'); //Имя в профиле
const autorProfession = document.querySelector('.profile__profession'); // профессия в профиле
const profilePopup = document.querySelector('.popup_add-profile'); // попап профиля
const closePopupProfile = profilePopup.querySelector('.popup__close-profile'); //кнопка закрытия (крестик)
const popupAutorName = profilePopup.querySelector('.popup__input_type_name'); //введенное имя
const popupProfession = profilePopup.querySelector('.popup__input_type_profession'); //введенная професиия
const formElement = profilePopup.querySelector('.popup__form'); // форма ввода

//попап добавления карточки
const addCard = document.querySelector('.profile__add-button');//кнопка добавления карточки
const cardPopup = document.querySelector('.popup_add-card');//попад добавление карточки
const closePopupCard = cardPopup.querySelector('.popup__close-card'); // кнопка закрытия (крестик)
const formCardAdd = cardPopup.querySelector('.popup__form-card');
const placeName = formCardAdd.querySelector('.popup__input_name_card');
const placeLink = formCardAdd.querySelector('.popup__input_link_foto');
const cardsBox = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards__template').content; //находим наш шаблон
const openPopupPicture = document.querySelector('.popup_picture'); //открывание попапа fullsize 
const pictureFoto = openPopupPicture.querySelector('.popup__image'); 
const pictureCaption = openPopupPicture.querySelector('.popup__caption');
const closePopupPic = openPopupPicture.querySelector('.popup__close-pic')

// F открытия закрытия
function openPopup(elem) { 
  elem.classList.add('popup_open');
};

function closePopup (elem) { 
  elem.classList.remove('popup_open');
};

//Профиль
// F открываем попап, подтягиваем данные
 function openProfilPopup () {
  openPopup(profilePopup);
  popupAutorName.value = autorName.textContent; // передаем значение имени из уже заполненных данных
  popupProfession.value = autorProfession.textContent;// передаем значение фамилии из уже заполненных данных
};

//F замены данных на новые
function formSubmitHandlerProfile (evt) { 
  evt.preventDefault(); 
  autorName.textContent = popupAutorName.value; // записываем новое имя
  autorProfession.textContent = popupProfession.value; // записываем новую профессию 
  closePopup(profilePopup); //закрываем папап   
};

//Карточка

function createCards(card) {

  const cardsElement = cardsTemplate.querySelector('.elements__card').cloneNode(true); //находим эл-ты и копируем их

  cardsElement.querySelector('.elements__title').textContent = card.name; // находим имя карточки
  cardsElement.querySelector('.elements__foto').src = card.link; // ссылка на картинку
  cardsBox.append(cardsElement); //добавляем капточки в конец нашего ящика

  cardsElement.querySelector('.elements__trash').addEventListener('click', function () {
   cardsElement.remove();// удаляем карточку 
  });

  cardsElement.querySelector('.elements__like').addEventListener('click', function(event) {
   event.target.classList.toggle('elements__like_active') // ставим лайки
  });

  cardsElement.querySelector('.elements__foto').addEventListener('click', function(){ //открываем зум картинку
    openPopup(openPopupPicture);
    pictureFoto.alt = card.name;
    pictureCaption.textContent = card.name;
    pictureFoto.src = card.link;
  });
  
return cardsElement;
};

function renderCard (card) {
  const cardsElement = createCards(card);
  cardsBox.prepend(cardsElement);
};

function formSubmitHandlerCard (evt) { //добавление новой карточки
  evt.preventDefault(); 
  const newCard = [];
  newCard.name = placeName.value;
  newCard.link = placeLink.value;
  renderCard(newCard);
  closePopup(cardPopup);
  formCardAdd.reset();
  };

initialCards.forEach(card=>{createCards(card);}); //добавление всех карточек

editProfile.addEventListener('click', openProfilPopup); // слушаем клик по кнопке редактирования профиля и делаем папап видимым
closePopupProfile.addEventListener('click', function () {closePopup(profilePopup)}); // слушаем кнопку крестик, закрытия редактирования профиля, делаем папап невидимым

addCard.addEventListener('click', function () { openPopup(cardPopup)});// открываем попап по кнопке
closePopupCard.addEventListener('click', function () { closePopup(cardPopup)});//закрываем по крестику

closePopupPic.addEventListener('click', function () {closePopup(openPopupPicture)});// закрываем папап с большой картинкой

formCardAdd.addEventListener('submit', formSubmitHandlerCard); //добаляем новую карточку
formElement.addEventListener('submit', formSubmitHandlerProfile); // Сохраняем новые данные в профиль