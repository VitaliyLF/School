$(function () {
  $('.user-nav__btn').on('click', function () {
    $(this).toggleClass('user-nav__btn--close')
    $('.content').toggleClass('content--active')
    $('.menu').toggleClass('menu--active')
    $('.header__content').toggleClass('header__content--active')
  })

  $('.switcher__select').styler()

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    //autoplay: true,
    //autoplaySpeed: 1000,
  })

  $(document).ready(function () {
    $('.top-slider__input,.consultation__input--tel').inputmask({
      mask: '+7 (999) 999-99-99',
    })
  })

  var slider = $('.top-slider__inner')
  $('.top-slider__counter-all').text(slider.slick('getSlick').slideCount)
  slider.on('afterChange', function (event, slick, currentSlide) {
    $('.top-slider__counter-current').text(currentSlide + 1)
  })

  $('.tabs-top__item').on('click', function (e) {
    e.preventDefault()
    $('.tabs-top__item').removeClass('tabs-top__item--active')
    $(this).addClass('tabs-top__item--active')

    $('.tabs-content__item').removeClass('tabs-content__item--active')
    $($(this).attr('href')).addClass('tabs-content__item--active')
  })

  $('.news__inner,.gallary__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    //autoplay: true,
    //autoplaySpeed: 1000,
    nextArrow:
      '<button type="button" class="slick-next"><svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.80435 0.890283L12.1522 8.46158C12.4348 8.75278 12.6467 9.06825 12.788 9.40799C12.9293 9.74772 13 10.1117 13 10.5C13 10.8883 12.9293 11.2523 12.788 11.592C12.6467 11.9318 12.4348 12.2472 12.1522 12.5384L4.80435 20.1097C3.90942 21.0319 2.88543 21.2376 1.73239 20.7271C0.577461 20.2184 -1.75951e-06 19.3089 -1.64495e-06 17.9985L-3.33871e-07 3.00151C-2.19311e-07 1.69109 0.577463 0.781567 1.73239 0.272931C2.88543 -0.237645 3.90942 -0.0318611 4.80435 0.890283Z" fill="white"/></svg></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.19565 20.1097L0.847827 12.5384C0.565218 12.2472 0.353263 11.9318 0.211959 11.592C0.0706543 11.2523 0 10.8883 0 10.5C0 10.1117 0.0706543 9.74772 0.211959 9.40799C0.353263 9.06825 0.565218 8.75278 0.847827 8.46157L8.19565 0.890282C9.09058 -0.0318629 10.1146 -0.237646 11.2676 0.27293C12.4225 0.781566 13 1.69109 13 3.00151L13 17.9985C13 19.3089 12.4225 20.2184 11.2676 20.7271C10.1146 21.2376 9.09058 21.0319 8.19565 20.1097Z" fill="white"/></svg></button>',
  })

  $('.go-top').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
