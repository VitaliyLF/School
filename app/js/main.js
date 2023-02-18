$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    //autoplay: true,
    //autoplaySpeed: 1000,
  })
  var slider = $('.top-slider__inner')
  $('.top-slider__counter-all').text(slider.slick('getSlick').slideCount)
  slider.on('afterChange', function (event, slick, currentSlide) {
    $('.top-slider__counter-current').text(currentSlide + 1)
  })

  $('.go-top').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
