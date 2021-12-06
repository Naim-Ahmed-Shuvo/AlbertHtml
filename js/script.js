$(document).ready(function () {
  console.log("ready");

  //preloader
  $(".loader").delay(3000).fadeOut("slow");
  $("#overlayer").delay(3000).fadeOut("slow");
  $(".wrapper__main").delay(3000).fadeIn("slow");

  //mobile menu show hide
  $(".ham__menu").click(function(){
    $('.mobile__menu').slideDown();
  })

  $('.close').click(function(){
    $('.mobile__menu').slideUp();
  })

  //slick slider
  $(".brand__slider__wrapper").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    //responsive uses max-width prop
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,

          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })

  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 8000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum + "+");
          //alert('finished');
        }

      });

  });
  
  //sticky nav
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() >= 102) {
      $('nav').addClass('sticky')
    } else {
      $('nav').removeClass('sticky')
    }
  })

  
})