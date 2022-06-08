// Бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list-link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Раскрытие блоков по клику

let questionsMore = document.querySelector('.show-more');
let questions = document.querySelectorAll('.questions__item');

questionsMore.addEventListener('click',

  function () {

    questions.forEach(function (el) {
      el.classList.add('questions__item--visible')
    });

    questionsMore.querySelector(".questions__btn").classList.add("questions__btn--hidden");
    questionsMore.classList.add('.show-more--hide')
  })


// Табы

document.addEventListener('DOMContentLoaded', function () {
  // выбор всех объектов с классом кнопки и ожидание события клик
  document.querySelectorAll('.work-list__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      // console.log(path)

      // изменение класса кнопки на активный
      document.querySelectorAll('.work-list__btn').forEach(function (workBtns) {
        workBtns.classList.remove('work-list__btn-active')
      })
      event.currentTarget.classList.add('work-list__btn-active')

      // замена заголовка и описания
      document.querySelectorAll('.work-descr__content').forEach(function (tabContent) {
        tabContent.classList.remove('work-descr__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work-descr__content-active')


      // замена картинки
      document.querySelectorAll('.work__img').forEach(function (tabImg) {
        // console.log(tabImg)
        tabImg.classList.remove('work__img_active')
      })
      document.querySelector(`[data-img="${path}"]`).classList.add('work__img_active')

    })


  })
})

// Слайдер
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});

// Аккордион
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// Поиск
document.querySelector('.header-search__btn').addEventListener('click', function (openSeach) {
  openSeach.currentTarget.classList.add('header-search__btn_active');
  document.querySelector('.header-search__close-btn').classList.remove('header-search__close-btn_hiden');
  document.querySelector('.header__search').classList.remove('header__search_hidden');
  document.querySelector('.header__form').classList.remove('header__form_hidden');
  document.querySelector('.header__nav').classList.add('header__nav_opacity');
})


document.querySelector('.header-search__close-btn').addEventListener('click', function (closeSeach) {
  document.querySelector('.header-search__btn').classList.remove('header-search__btn_active');
  document.querySelector('.header-search__close-btn').classList.add('header-search__close-btn_hiden');
  document.querySelector('.header__search').classList.add('header__search_hidden');
  document.querySelector('.header__form').classList.add('header__form_hidden');
  document.querySelector('.header__nav').classList.remove('header__nav_opacity');

})
