
/* Spotlight JS - include all bootstrap dependencies by default. */
import 'bootstrap';
//import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/dropdown';

/* Spotlight CSS */
import './sass/custom.scss';



function showImages(el) {

    var windowHeight = $(window).height();

    $(el).each(function(){

        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

        if (topOfWindow + windowHeight - 0 > thisPos ) {
            $(this).addClass("spotlight-fadein");
        }
    });
}

jQuery(window).on("load", function() {
    showImages('.spotlight-image-hidden, .spotlight-text-hidden');
});

jQuery(window).on("scroll", function() {
    showImages('.spotlight-image-hidden, .spotlight-text-hidden');
});

