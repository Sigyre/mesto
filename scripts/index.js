const popup = document.querySelector('.popup'); // ищем сам попап
const editProfile = document.querySelector('.profile__edit-button'); //ищем кнопку редактирования профиля
const closePopupBtn = popup.querySelector('.popup__close'); //ищем крестик, кнопка закрытия редактирования профиля
const autorName = document.querySelector('.profile__name'); // ищем имя в ПРОФИЛЕ
const autorProfession = document.querySelector('.profile__profession'); // ищем профессию в ПРОФИЛЕ
const popupAutorName = popup.querySelector('.popup__input_type_name'); // ищем имя в ПАПАПЕ
const popupProfession = popup.querySelector('.popup__input_type_profession'); // ищем профессиию в ПАПАПЕ

function openPopup () {
  popup.classList.add('popup_open');
  popupAutorName.value = autorName.textContent; // передаем значение имени из уже заполненных данных
  popupProfession.value = autorProfession.textContent;// передаем значение фамилии из уже заполненных данных
}

editProfile.addEventListener('click', openPopup) // слушаем клик по кнопке редактирования профиля и делаем папап видимым
  


function closePopup () { //функция закрытия папапа
  popup.classList.remove('popup_open');
}

closePopupBtn.addEventListener('click', closePopup); // слушаем кнопку крестик, закрытия редактирования профиля, делаем папап невидимым


const formElement = document.querySelector('.popup__form'); // ищем форму

function formSubmitHandler (evt) { // пишем функцию замены
	evt.preventDefault(); 

    autorName.textContent = popupAutorName.value; // записываем новое имя
    autorProfession.textContent = popupProfession.value; // записываем новую профессию 
    closePopup (); //закрываем папап
    
}

formElement.addEventListener('submit', formSubmitHandler); // слушаем форму если идет нажатие на Сохранить заменяем данные
