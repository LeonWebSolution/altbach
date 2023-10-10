$(document).ready(function(){

	
	$(".menu a ").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$('.container-slider').slick({
		slidesToShow: 1,
		autoplay: true,
    	autoplaySpeed: 2500,
	});

	var slider = $('.slide__worDo');
  var paginationButtons = $('.custom-pagination button[data-slide]');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true
  });

  // Функция для обновления классов активных кнопок
  function updateActiveButton(slideIndex) {
    paginationButtons.removeClass('active');
    paginationButtons.eq(slideIndex).addClass('active');
  }

  // Переключение на предыдущий слайд
  $('.prev-slide').click(function(){
    slider.slick('slickPrev');
    updateActiveButton(slider.slick('slickCurrentSlide'));
  });

  // Переключение на выбранный слайд и обновление активных кнопок
  paginationButtons.click(function(){
    var slideIndex = $(this).data('slide');
    slider.slick('slickGoTo', slideIndex);
    updateActiveButton(slideIndex);
  });

  // Переключение на следующий слайд
  $('.next-slide').click(function(){
    slider.slick('slickNext');
    updateActiveButton(slider.slick('slickCurrentSlide'));
  });

  // Инициализация активной кнопки при загрузке страницы
  var initialSlide = slider.slick('slickCurrentSlide');
  updateActiveButton(initialSlide);


  $('.wecan-slider').slick({
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 3000,
  
});
});

$(document).ready(function () {
  var sliderFor = $('.slider-for');
  var sliderNav = $('.slider-nav');
  var sliderPagination = $('.slider-pagination');

  // Инициализация главного слайдера
  sliderFor.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNav
  });

  // Инициализация навигационного слайдера
  sliderNav.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: sliderFor,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

  // Инициализация слайдера пагинации
  sliderPagination.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 500, // Установите здесь ваш брейкпоинт на 320px
        settings: {
          vertical: false,
        }
      },
    ]
  });

  // Привязываем событие клика на элементы пагинации для навигации по главному слайдеру и навигационному слайдеру
  $('.slider-pagination-item').click(function () {
    var index = $(this).data('index');
    sliderFor.slick('slickGoTo', index);
    sliderNav.slick('slickGoTo', index);
    updateActiveMiniature(index);
    updateActivePaginationButton(index);
  });

  // Привязываем событие клика на кнопку "Вперед"
  $('.next-button').click(function () {
    sliderFor.slick('slickNext');
  });

  // Привязываем событие клика на кнопку "Назад"
  $('.prev-button').click(function () {
    sliderFor.slick('slickPrev');
  });

  // Привязываем событие смены слайда главного слайдера для обновления пагинации
  sliderFor.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    updateActivePaginationButton(nextSlide);
    sliderPagination.slick('slickGoTo', nextSlide);
  });

  // Обновляем активную миниатюру
  function updateActiveMiniature(index) {
    sliderNav.find('.case-item2').removeClass('active');
    sliderNav.find('.case-item2[data-index="' + index + '"]').addClass('active');
  }

  // Обновляем активную кнопку пагинации
  function updateActivePaginationButton(index) {
    sliderPagination.find('.slider-pagination-item').removeClass('active');
    sliderPagination.find('.slider-pagination-item[data-index="' + index + '"]').addClass('active');
  }

  // Установите начальные значения активных элементов
  var initialSlideIndex = 0; // Индекс начального слайда
  updateActiveMiniature(initialSlideIndex);
  updateActivePaginationButton(initialSlideIndex);



  
});
 
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const menuListLink = document.querySelectorAll(".menu__list-link");

  function toggleMenu() {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");

      // Предотвращаем/разрешаем скроллинг
      if (document.body.style.overflow === "hidden") {
          document.body.style.overflow = "";
      } else {
          document.body.style.overflow = "hidden";
      }
  }

  hamburger.addEventListener("click", toggleMenu);

  // Добавляем обработчики событий для каждой ссылки в меню
  menuListLink.forEach(function(link) {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // Предотвращаем переход по ссылке
          hamburger.classList.remove("active"); // Убираем класс "active" с hamburger
          menu.classList.remove("active"); // Убираем класс "active" с menu

          // Разрешаем скроллинг
          document.body.style.overflow = "";
      });
  });

});

var buttons = document.querySelectorAll('#button__header');

// Назначаем обработчик клика на каждую из найденных кнопок
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'flex';
    });
});

// Закрываем модальное окно при нажатии на крестик
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне окна
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});