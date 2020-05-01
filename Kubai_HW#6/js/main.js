$(document).ready(function () {

    let trigger = '.menu__btn',
        nav = '.nav-list';

    $(trigger).on('click', function () {
        $(nav).slideToggle(300);
    });

});

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });