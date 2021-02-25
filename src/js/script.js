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

    let menu = $(".header__mobile-menu");

    //Вызов мобильного меню
    $(".header__menu-toggle").on("click", function(){
      menu.addClass("header__mobile-menu-active");
        $("body").css("overflow-y", "hidden");
    });


    //Скрытие мобильного меню
    $(".header__close-button").on("click", function(){
        menu.removeClass("header__mobile-menu-active");
        $("body").css("overflow-y", "auto");
    });


    //Закрытие меню при нажатии на пустое пространство
    $(document).mouseup(function (e){ 
      if (!menu.is(e.target) && menu.has(e.target).length === 0) { 
            menu.removeClass("header__mobile-menu-active"); 
            $("body").css("overflow-y", "auto");
      }
    });

  });