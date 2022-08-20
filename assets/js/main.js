;(function ($) {
  // mobile menu

  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991'
  })

  // sticky

  var wind = $(window)
  var sticky = $('#sticky-header')
  wind.on('scroll', function () {
    var scroll = wind.scrollTop()
    if (scroll < 180) {
      sticky.removeClass('sticky')
    } else {
      sticky.addClass('sticky')
    }
  })

  // offcanvas menu

  $('.menu-tigger').on('click', function () {
    $('.offcanvas-menu,.offcanvas-overly').addClass('active')
    return false
  })
  $('.menu-close,.offcanvas-overly').on('click', function () {
    $('.offcanvas-menu,.offcanvas-overly').removeClass('active')
  })

  //   Slider activation

  function mainSlider() {
    var $BasicSlider = $('.slider-active')
    $BasicSlider.on('ready.flickity', function () {
      var $firstAnimatingElements = $('.single-slider:first-child').find(
        '[data-animation]'
      )
      doAnimations($firstAnimatingElements)
    })
    $BasicSlider.on('change.flickity', function () {
      var index = $BasicSlider.data('flickity').selectedIndex
      var $animatingElements = $(`.single-slider[slide-index=${index}]`).find(
        '[data-animation]'
      )
      doAnimations($animatingElements)
    })

    $BasicSlider.flickity({
      cellAlign: 'left',
      contain: false,
      percentPosition: false,
      prevNextButtons: false,
      autoPlay: 10000,
      fade: true
    })

    function doAnimations(elements) {
      var animationEndEvents =
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      elements.each(function () {
        var $this = $(this)
        var $animationDelay = $this.data('delay')
        var $animationType = 'animated ' + $this.data('animation')
        $this.css({
          animationDelay: $animationDelay,
          webkitAnimationDelay: $animationDelay
        })
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType)
        })
      })
    }
  }
  mainSlider()

  // isotope

  $('.portfolio-active').imagesLoaded(function () {
    var $grid = $('.portfolio-active').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    })

    // filter items on button click

    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter')
      $grid.isotope({ filter: filterValue })
    })
  })

  //for menu active class

  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active')
    $(this).addClass('active')
    event.preventDefault()
  })

  // counterUp

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  })

  // testimonial

  $('.testimonial-active').flickity({
    cellAlign: 'left',
    contain: false,
    percentPosition: false,
    prevNextButtons: false,
    autoPlay: 2000,
    wrapAround: true,
    pageDots: false
  })

  // portfolio

  $('.portfolio-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  })

  // popup

  $('.view').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  $('.video-view').magnificPopup({
    type: 'iframe'
  })

  // clients

  $('.clients-active').flickity({
    cellAlign: 'left',
    contain: false,
    percentPosition: false,
    autoPlay: 5000,
    pageDots: false,
    wrapAround: true,
    prevNextButtons: true
  })

  // $.scrollUp({
  //   scrollName: "scroll-up", // Element ID
  //   topDistance: "300", // Distance from top before showing element (px)
  //   topSpeed: 300, // Speed back to top (ms)
  //   animation: "fade", // Fade, slide, none
  //   animationInSpeed: 1000, // Animation in speed (ms)
  //   animationOutSpeed: 1000, // Animation out speed (ms)
  //   scrollText: '<span class="lnr lnr-chevron-up"></span>' // Text for element
  // });

  // if ($('#search-input').length > 0) {
  //   var sjs = SimpleJekyllSearch({
  //     searchInput: document.getElementById('search-input'),
  //     resultsContainer: document.getElementById('results-container'),
  //     json: '/search.json'
  //   });
  // }

  // project

  $('.project-slider-active').flickity({
    cellAlign: 'left',
    contain: false,
    percentPosition: false,
    autoPlay: true,
    pageDots: true,
    prevNextButtons: true
  })
})(jQuery)
