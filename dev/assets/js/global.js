jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        //'href': $(this).attr('src'),
                    });
                };
            };
        });
    };

    if ($('.post-item iframe').length) {
        $('.post-item iframe').closest('p').addClass('iframe-box')
    }

    $('.category-item').matchHeight();

    //*СЛАЙДЕР BEFORE-AFTER*//
    let active = false;
   
    document.querySelector('.scroller').addEventListener('mousedown', function() {
        active = true;
        document.querySelector('.scroller').classList.add('scrolling');
    });

    document.body.addEventListener('mouseup', function() {
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('mouseleave', function() {
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
   
    document.body.addEventListener('mousemove', function(e) {
        if (!active) return;
        let x = e.pageX;
        x -= document.querySelector('.example-slider-wrapper').getBoundingClientRect().left;
        scrollIt(x);
    });

    function scrollIt(x) {
        let transform = Math.max(0, (Math.min(x, document.querySelector('.example-slider-wrapper').offsetWidth)));
        document.querySelector('.after').style.width = transform + "px";
        document.querySelector('.scroller').style.left = transform - 25 + "px";
    }
    
    scrollIt(150);

    document.querySelector('.scroller').addEventListener('touchstart', function() {
        active = true;
        document.querySelector('.scroller').classList.add('scrolling');
    });
    document.body.addEventListener('touchend', function() {
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('touchcancel', function() {
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
})