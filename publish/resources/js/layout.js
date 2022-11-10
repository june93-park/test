$(document).ready(function () {
    $(".lg-main-menu li").on("click", function () {
        $(this).addClass("active").siblings('li').removeClass('active').children('.lg-sub-menu').slideUp().children('li').removeClass('active')
        $(this).children(".lg-sub-menu").stop().slideDown();
    });
    $('.ui.dropdown').dropdown();
});
