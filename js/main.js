(function ($) {
"use strict";


$(window).on('scroll',function() {
       var scroll = $(window).scrollTop();
       if (scroll < 100) {
        $("#sticky-header").removeClass("sticky");
       }else{
        $("#sticky-header").addClass("sticky");
       }
  });


$('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
  });










$(window).scroll(function(){
  if($(this).scrollTop()>500){
    $('.goTop').fadeIn();
  }else{
  $('.goTop').fadeOut();
  }
});

$('.goTop').click(function(){
  $('html,body').animate({scrollTop:0}, 500);
});






function mainSlider() {
 var BasicSlider = $('.team-active');
 BasicSlider.on('init', function(e, slick) {
 var $firstAnimatingElements = $('.single-team:first-child').find('[data-animation]');
 doAnimations($firstAnimatingElements);
 });
 BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
 var $animatingElements = $('.single-team[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
 doAnimations($animatingElements);
         });
 BasicSlider.slick({
   autoplay: false,
   autoplaySpeed: 10000,
   dots: true,
   fade: true,
   prevArrow:'<button type="button" class="prevarrow"><span>&#8592;</span>Prev</button>',
   nextArrow:'<button type="button" class="nextarrow">Next<span>&#8594;</span></button>',
   arrows: false,
   responsive: [
     { breakpoint: 767, settings: { dots: true, arrows: false } }
             ]
         });

   function doAnimations(elements) {
       var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
       elements.each(function() {
           var $this = $(this);
           var $animationDelay = $this.data('delay');
           var $animationType = 'animated ' + $this.data('animation');
           $this.css({
               'animation-delay': $animationDelay,
               '-webkit-animation-delay': $animationDelay
     });
     $this.addClass($animationType).one(animationEndEvents, function() {
         $this.removeClass($animationType);
                 });
             });
         }
     }
     mainSlider();


     $('.grid').isotope({
       itemSelector: '.grid-item',
       percentPosition: true,
       masonry: {
         // use outer width of grid-sizer for columnWidth
         columnWidth: '.grid-item'
       }
     })

     // filter items on button click
     $('.protfolio-part').on( 'click', 'button', function() {
       var filterValue = $(this).attr('data-filter');
       $grid.isotope({ filter: filterValue });
     });


     // init Isotope
     var $grid = $('.grid').isotope({
       // options
     });

     $('.testimonial-active').owlCarousel({
         loop:true,
         margin:10,
         nav:false,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:1
             },
             1000:{
                 items:1
             }
         }
     });


     $('.counter').counterUp({
           delay: 10,
           time: 1000,
           offset: 70,
           beginAt: 100,
           formatter: function (n) {
             return n.replace(/,/g, '.');
           }
       });

            $('.brand-active').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:6
                    }
                }
            });





            $('.slider-content').owlCarousel({
        loop:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



























})(jQuery);
