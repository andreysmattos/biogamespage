! function (a) {
    "use strict";
    a("body").scrollspy({
        target: "#mainNav",
        offset: 57
    });
    var n = function () {
        a("#mainNav").offset().top > 50 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink")
    };
    n(), a(window).scroll(n)
}(jQuery);


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});