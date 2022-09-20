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
    // I hope this over-commenting helps. Let's do this!
    // Let's use the 'active' variable to let us know when we're using it
    let active = false;

    // First we'll have to set up our event listeners
    // We want to watch for clicks on our scroller
    document.querySelector('.scroller').addEventListener('mousedown', function() {
        active = true;
        // Add our scrolling class so the scroller has full opacity while active
        document.querySelector('.scroller').classList.add('scrolling');
    });
    // We also want to watch the body for changes to the state,
    // like moving around and releasing the click
    // so let's set up our event listeners
    document.body.addEventListener('mouseup', function() {
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('mouseleave', function() {
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });

    // Let's figure out where their mouse is at
    document.body.addEventListener('mousemove', function(e) {
        if (!active) return;
        // Their mouse is here...
        let x = e.pageX;
        // but we want it relative to our wrapper
        x -= document.querySelector('.example-slider-wrapper').getBoundingClientRect().left;
        // Okay let's change our state
        scrollIt(x);
    });

    // Let's use this function
    function scrollIt(x) {
        let transform = Math.max(0, (Math.min(x, document.querySelector('.example-slider-wrapper').offsetWidth)));
        document.querySelector('.after').style.width = transform + "px";
        document.querySelector('.scroller').style.left = transform - 25 + "px";
    }

    // Let's set our opening state based off the width, 
    // we want to show a bit of both images so the user can see what's going on
    scrollIt(150);

    // And finally let's repeat the process for touch events
    // first our middle scroller...
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