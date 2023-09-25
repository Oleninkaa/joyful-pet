"use strict"

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}




const productContainers = [...document.querySelectorAll('.product__field')];
const nxtBtn = [...document.querySelectorAll('.product__next-btn')];
const preBtn = [...document.querySelectorAll('.product__pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

/*
window.addEventListener('scroll', function(){
    this.scrollY > 0 ? this.document.querySelector('.header').classList.add('scroll'):this.document.querySelector('.header').classList.remove('scroll')
  })*/

  let scrollingTimer; // Змінна для таймера

window.addEventListener('scroll', function() {
    // Видаляємо попередній таймер, якщо він існує
    clearTimeout(scrollingTimer);

    // Додаємо клас `.scroll` при прокрутці
    this.document.querySelector('.header').classList.add('scroll');

    // Встановлюємо новий таймер для видалення класу `.scroll` через 3 секунди без прокрутки
    scrollingTimer = setTimeout(() => {
        this.document.querySelector('.header').classList.remove('scroll');
    }, 3000); // 3000 мілісекунд = 3 секунди
});
