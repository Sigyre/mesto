const popup = document.querySelector('.popup'); // ищем сам попап
const openPopup = document.querySelector('.profile__edit-button'); //ищем кнопку редактирования профиля
const closePopup = popup.querySelector('.popup__close'); //ищем крестик, кнопка закрытия редактирования профиля
const savePopup = popup.querySelector('.popup__save'); // ищем кнопку сохранить 


openPopup.addEventListener('click', function() { // слушаем клик по кнопке редактирования профиля и делаем папап видимым
  popup.classList.add('popup__open') 
});

closePopup.addEventListener('click', function(){ // слушаем кнопку крестик, закрытия редактирования профиля, делаем папап невидимым
   popup.classList.remove('popup__open')
});


const submitBtn = document.querySelector('.popup__form'); // ищем форму

function formSubmitHandler (evt) { // пишем функцию замены
	evt.preventDefault(); 
	
    const autorName = document.querySelector('.profile__name'); // ищем имя в ПРОФИЛЕ
    const autorProfession = document.querySelector('.profile__profession'); // ищем профессию в ПРОФИЛЕ
    const popupAutorName = popup.querySelector('.popup__name'); // ищем имя в ПАПАПЕ
    const popupProfession = popup.querySelector('.popup__profession'); // ищем профессиию в ПАПАПЕ

    autorName.textContent = popupAutorName.value; // записываем новое имя
    autorProfession.textContent = popupProfession.value; // записываем новую профессию 
    popup.classList.remove('popup__open'); //закрываем папап
    
}

submitBtn.addEventListener('submit', formSubmitHandler); // слушаем форму если идет нажатие на Сохранить заменяем данные
