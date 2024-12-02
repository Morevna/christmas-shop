// Открытие и закрытие бургер-меню на страницах шириной 768 пикселей и меньше.
     // функция - запрета и разрешения скролла
const scrollControll = {
	impossibleScroll() {
	  document.body.style.cssText = `overflow: hidden;`;
	},
	possibleScroll() {
	  document.body.style.cssText = '';
	},
  };



const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
  });
}

// вызовы функций по клику на burger-menu:
document.querySelectorAll('.burger-menu').forEach(function(el) {      // перебираю burger-menu:                         // проявляю попап 
  el.addEventListener('click', scrollControll.impossibleScroll);   // и запрещаю скролл
});


// Слайдер на homeстранице.
// Таймер на homeстранице.
// Случайные подарки на homeстранице.
 // Модальное окно для выбранного продукта. +12

// Описание и суперспособности в модальном окне соответствуют выбранному дару: +4
// Нажатие на область вокруг модального окна и кнопки «Закрыть» закрывает его: +2

const popUp = document.querySelector('.pop-up-with-shadow');



// функция - стили для видимости попапа
const popupOpen = () => {
	popUp.style.opacity = 1;
	popUp.style.visibility = 'visible';
	popUp.style.cursor = 'pointer';
}; 


// вызовы функций по клику на card:
document.querySelectorAll('.card').forEach(function(el) {      // перебираю card:
  el.addEventListener('click', popupOpen);                          // проявляю попап 
  el.addEventListener('click', scrollControll.impossibleScroll);   // и запрещаю скролл
});
// закрытие происходит через крестик-ссылку (перезагруз). не правильно, но надеюсь, вернусь ещё к этому
