
/*ПРЕЛОАДЕР*/

window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
  const preloader = document.querySelector('.preloader') /* находим блок Preloader */
  preloader.classList.add('preloader_hidden') /* добавляем ему класс для скрытия */
})


$(window).scroll(function (){
  var posY=window.scrollY; //переменная сколько уже прокрутили

  if (posY > 50){
        $('.main_nav').addClass('main_nav_one');			
  } else{
     $('.main_nav').removeClass('main_nav_one');				
  }
});