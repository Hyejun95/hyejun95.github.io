$(function () {
    portfolio.init();
})

const portfolio = {
    init: function () {
        portfolio.cursor();
        portfolio.sidebar();
        portfolio.scrollEffect();
        portfolio.aos();

    },

    aos: function (){
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 30, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    },

    cursor: function () {
        const cursor = $('.cursor');
        $(window).mousemove(function (e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2,
            });
        }).trigger('mousemove');
        $('a')
            .mouseenter(function () {
                cursor.css({
                    transform: 'scale(1.5)',
                    opacity: 0.7,
                });
            })
            .mouseleave(function () {
                cursor.css({
                    transform: 'scale(1)',
                    opacity: 1,
                });
            });
    },

    sidebar: function () {
        $('.mobile_menu').on('click', function () {
            $('html').toggleClass('open_sidebar')
        })

    },

    scrollEffect: function () {

        $(window).on('scroll', function () {
            const sct = $(window).scrollTop();
            $('.trigger').each(function (){
                const oft =  $(this).offset().top;

                if (sct > oft - 400){
                    $(this).addClass('on')
                }
                else{
                    $(this).removeClass('on')
                }
            })



        })
    }

}