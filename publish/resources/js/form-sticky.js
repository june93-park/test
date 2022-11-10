$(document).ready(function () {
    $(window).scroll(function () {
        var sticky = false;
        var top = $(window).scrollTop();
        if ( top > 236) {
            $(".lg-contents").addClass("c-sticky");
            sticky = true;
        } else {
            $(".lg-contents").removeClass("c-sticky");
        }
    });
});