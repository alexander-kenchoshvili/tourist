$(document).ready(function() {
    // $(document).mouseup(function(e) {
    //     var container = $(".dropdown.active .result");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         setTimeout(() => {
    //             container.closest('.dropdown').removeClass('active');
    //         }, 10);
    //     }
    // });
    $('.locations .owl-carousel').owlCarousel({
        margin: 24,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            1366: {
                items: 4
            },
            1260:{
                items: 3
            },
            990:{
                items: 3
            },
            768:{
                items:2
            },
            0:{
                items:1
            }
        }
    });
    $('.services .owl-carousel').owlCarousel({
        margin: 24,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            1900:{
                items:6
            },
            1260:{
                items:4
            },
            990:{
                items: 3
            },
            768:{
                items:2
            },
            0:{
                items:1
            }
          
        }
    });
    $('.day-tour .owl-carousel').owlCarousel({
        margin: 48,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            1900: {
                items: 1
            },
            1260:{
                items:1
            },
            990:{
                items: 1
            },
            768:{
                items:1
            },
            0:{
                items:1
            }
        }
    });
    $('.slide-prev').click(function() {
        $(this).parents('.find-owl').find('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.slide-next').click(function() {
        $(this).parents('.find-owl').find('.owl-carousel').trigger('next.owl.carousel');
    });
    $('.menu-btn').click(function (){   
        $('.menu').fadeIn(300);
    }); 
    $('.close-menu').click(function(){
        $('.menu').fadeOut(300);
    });
    // country-search
    $(".choose-direction").click(function(){
        $(this).parent().find(".direction-list").slideToggle();
        
    });
    $(document).mouseup(function(e){
        var container = $(".choose-direction");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            console.log(container.has(e.target).length , container.is(e.target));
            $(".direction-list").slideUp();
        }
    });
    $(".direction").click(function(){
        $(this).parent().parent().parent().find('.choose-direction  span').text($(this).text());
    });

    // filtration

    $(".filter").click(function(){
        $(this).parent().find(".local-tour").slideToggle();
    });
    $(document).mouseup(function(e){
        var container = $(".filter");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            console.log(container.has(e.target).length , container.is(e.target));
            $(".local-tour").slideUp();
        }
    });
    $(".tour-list").click(function(){
        $(this).parent().parent().parent().find('.filter  span').text($(this).text());
    });
    // border-toggle

    $(".choose-direction").click(function(){
        $(".choose-direction").toggleClass("border-active");
    });

    // range slider
    $(function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 1500,
          values: [ 0, 1000 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "₾  " + ui.values[ 0 ] + " - ₾  " + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "₾  " + $( "#slider-range" ).slider( "values", 0 ) +
          " - ₾   " + $( "#slider-range" ).slider( "values", 1 ) );
      } );
    //   messenger
    // $(".contact-inner").hide();
    // $(".contact-icon").click(function(){
    //     $(".contact-inner").toggle();
    // })

    // $(document).mouseup(function(e) {
    //     var container = $(".contact-icon");
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         console.log(container.has(e.target).length , container.is(e.target));
    //         $(".contact-inner").slideUp();
    //     }
    // });

});



