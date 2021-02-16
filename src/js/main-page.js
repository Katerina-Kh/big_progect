$(document).ready(function(){

  new WOW().init();

    //Настройка слайдера
    $('.slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 995,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 1
          }
        },

        {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        
      ]
    
    });

    //Вызов мобильного меню
    $(".header__menu-toggle").on("click", function(){
        $(".header__mobile-menu").addClass("header__mobile-menu-active");
    });


    //Скрытие мобильного меню
    $(".header__close-button").on("click", function(){
        $(".header__mobile-menu").removeClass("header__mobile-menu-active");
    });



  });