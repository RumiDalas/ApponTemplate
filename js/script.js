$(function(){
  // Banner slider js
    $('#banner').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        fade: true,
        autoplay:true, 
      });

    // Screenshot slider js
    $('.slider-main').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,   
    });

    // VenoBox js
    $('.venobox').venobox(); 

    // Feedback text-slider-main Slider Js

    $('.text-slider-main').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade: true,
      autoplay:true, 
      asNavFor:'.member-image-main',
    });

    // Feedback member-image-main Slider Js
    $('.member-image-main').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      fade: false,
      autoplay:false, 
      centerMode:true,
      centerPadding:false,
      asNavFor:'.text-slider-main',
    });

});