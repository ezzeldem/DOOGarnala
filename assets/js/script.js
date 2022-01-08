$(document).ready(function () {
  AOS.init();

  $('.header_section .opne_menu i').click(function (e) {
    e.preventDefault();
    $('.nav_box').addClass('opne_menu');
    $('.overlay').show();
  });
  $('.header_section .nav_box .close_box i, .overlay').click(function (e) {
    e.preventDefault();
    $('.nav_box').removeClass("opne_menu");
    $('.overlay').hide();
  });



  $('.clients_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    outHight: true,
    autoplaySpeed: 2000,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: "<div class='circle-arrow slider-left'><i class='fas fa-long-arrow-alt-left'></i></div>",
    nextArrow: "<div class='circle-arrow slider-right'><i class='fas fa-long-arrow-alt-right'></i></div>",

  });




  $('.plan_section .pakedg_tap_insed .nav-tabs .nav-link').click(function (e) {
    e.preventDefault();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    data = $(this).data("tap");

    $("#" + data).addClass('active');
    $("#" + data).siblings().removeClass('active');



  });


});