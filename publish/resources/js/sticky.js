$(document).ready(function () {
    $(window).scroll(function () {
        var sticky = false;
        var top = $(window).scrollTop();
        if ( top > 86) {
            $(".lg-contents").addClass("sticky");
            sticky = true;
        } else {
            $(".lg-contents").removeClass("sticky");
        }
    });
});