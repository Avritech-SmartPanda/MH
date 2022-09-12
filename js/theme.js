; (function ($) {
    "use strict";
    var selectedService;
    //* mainNavbar
    function mainNavbar() {
        if ($('#main_navbar').length) {
            $('#main_navbar').affix({
                offset: {
                    top: 10,
                    bottom: function () {
                        return (this.bottom = $('.footer').outerHeight(true))
                    }
                }
            });
        };
    };

    //* nav_searchFrom
    function searchFrom() {
        if ($('.nav_searchFrom').length) {
            $('.nav_searchFrom').on('click', function () {
                $('.searchForm').toggleClass('show');
                return false
            });
            $('.form_hide').on('click', function () {
                $('.searchForm').removeClass('show')
            });
        };
    };

    //*  Main slider js 
    function home_main_slider() {
        if ($('.slider_inner').length) {
            $('.slider_inner').camera({
                loader: true,
                navigation: true,
                autoPlay: false,
                time: 4000,
                playPause: false,
                pagination: false,
                thumbnails: false,
                overlayer: true,
                hover: false,
                minHeight: '500px'
            });
        }
    }

    //* Isotope Js
    function portfolio_isotope() {
    
        if ($('.portfolio_item, .portfolio_2 .portfolio_filter ul li').length) {
            // Activate isotope in container
            $(".portfolio_item").imagesLoaded(function () {
                $(".portfolio_item").isotope({
                    itemSelector: ".single_facilities",
                    layoutMode: 'masonry',
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".grid-sizer, .grid-sizer-2"
                    }
                });
            });

            // Activate isotope in container
            $(".portfolio_2").imagesLoaded(function () {
                $(".portfolio_2").isotope({
                    itemSelector: ".single_facilities",
                    layoutMode: 'fitRows'
                });
            });
            // Add isotope click function
            $(".portfolio_filter ul li").on('click', function () {
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio_item, .portfolio_2").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false
                    }
                });
                return false;
            });


            $(".portfolio_filter ul li").on('click', function () {
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio_item, .portfolio_2").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false
                    }
                });
                return false;
            });


        }
        jQuery(document).ready(function ($) {
            if (selectedService == undefined) {
                selectedService = "energy";
               
            }else{
                selectedService = selectedService ;
            }
    
     console.log(selectedService)

            if (selectedService == "energy") {
                $('[data-filter=".energy"]').click();
            }
            if (selectedService == "plant") {
                $('[data-filter=".plant"]').click();
            }
            if (selectedService == "agriculture") {
                $('[data-filter=".agriculture"]').click();
            }
            if (selectedService == "consulting") {
                $('[data-filter=".consulting"]').click();
            }
            if (selectedService == "manufacturing") {
                $('[data-filter=".manufacturing"]').click();
            }
            if (selectedService == "retail") {
                $('[data-filter=".retail"]').click();
            }
            debugger

        });
    }


    $("#energy").click(function () {
        selectedService = "energy";
        portfolio_isotope();
    });
    $("#plant").click(function () {
        selectedService = "plant";
        portfolio_isotope() 
    });
    $("#agriculture").click(function () {
        selectedService = "agriculture";
        portfolio_isotope() 
    });
    $("#consulting").click(function () {
        selectedService = "consulting";
        portfolio_isotope() 
    });
    $("#manufacturing").click(function () {
        selectedService = "manufacturing";
        portfolio_isotope() 
    });
    $("#retail").click(function () {
        selectedService = "retail";
        portfolio_isotope() 
    });
    // function energy() {
    //     jQuery(document).ready(function ($) {

    //         $('[data-filter=".energy"]').click();
    //     });
    // }

    // function agriculture() {
    //     jQuery(document).ready(function ($) {
    //         $('[data-filter=".agriculture"]').click();
    //     });
    // }
    // function consulting() {
    //     jQuery(document).ready(function ($) {

    //         $('[data-filter=".consulting"]').click();

    //     });
    // }
    // function manufacturing() {
    //     jQuery(document).ready(function ($) {
    //         $('[data-filter=".manufacturing"]').click();
    //     });
    // }



    //* Stellar 
    $(function () {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });
    });

    //* counterUp JS
    function counterUp() {
        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 10,
                time: 900,
            });
        }
    };

    //* Testimonial Carosel
    function testimonialsCarosel() {
        if ($('.testimonial_carosel').length) {
            $('.testimonial_carosel').owlCarousel({
                loop: true,
                items: 1,
                autoplay: false,
            });
        };
    };
    //* Testimonial Carosel
    function partnersCarosel() {
        if ($('.partners').length) {
            $('.partners').owlCarousel({
                loop: true,
                items: 5,
                margin: 110,
                autoplay: true,
                response: true,
                responsive: {
                    300: {
                        items: 1,
                        margin: 0,
                    },
                    500: {
                        items: 3,
                    },
                    700: {
                        items: 3,
                    },
                    800: {
                        items: 4,
                        margin: 40,
                    },
                    1000: {
                        items: 5,
                    },
                }
            });
        };
    };

    //* waypoint JS
    function ourSkrill() {
        if ($('.our_skill_inner').length) {
            $(".our_skill_inner").each(function () {
                $(this).waypoint(function () {
                    var progressBar = $(".progress-bar");
                    progressBar.each(function (indx) {
                        $(this).css("width", $(this).attr("aria-valuenow") + "%")
                    })
                },
                    {
                        triggerOnce: true,
                        offset: 'bottom-in-view'

                    });
            });
        }
    };

    //* counterUp 2 JS
    function counterUp2() {
        if ($('.counter2').length) {
            $('.counter2').counterUp({
                delay: 10,
                time: 200,
            });
        }
    };

    //* Hide Loading Box (Preloader)
    function preloader() {
        if ($('.preloader').length) {
            $(window).load(function () {
                $('.preloader').delay(500).fadeOut('slow');
                $('body').delay(500).css({ 'overflow': 'visible' });
            });
        }
    };

    /*Function Calls*/
    searchFrom();
    new WOW().init();
    home_main_slider();
    testimonialsCarosel();
    portfolio_isotope()
    counterUp();
    partnersCarosel();
    ourSkrill();
    counterUp2();
    mainNavbar();
    preloader();

})(jQuery);