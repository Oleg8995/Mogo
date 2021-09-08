$(function(){

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* FIXED HEADER */

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
       
        checkScroll(scrollOffset);
       
    });

    function checkScroll(scrollOffset) {
  
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

 /*SMOOTH SCROLL*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        setTimeout (function() {
            $("#nav, #nav-toggle").removeClass("active");
        }, 500);

        $("html, body").animate({
            scrollTop: blockOfset
        }, 500);
    })
    
    /*NAV MENU TOGGLE*/

    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    })

   /*COLLAPSE*/
   
   $("[data-collapse]").on('click', function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
        
   });

/*SLIDER*/

  

   $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
   });

});