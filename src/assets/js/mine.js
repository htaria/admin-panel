if (innerWidth >= 992) {
    $('.main').addClass('main-toggle');
    $('.sidebar').addClass('sidebar-toggle');
    $('.item-box').siblings('ul').slideUp();
}

if (innerWidth <= 576) {
    $('.bi-justify').on('click', function () {
        $(this).hide();
    });

    $('.bi-x').on('click', function () {
        $('.bi-justify').show();
    });

    $('.item-box').on('click', function () {
        $('.bi-justify').hide();
});
}

jQuery(function () {
    $('.sidebar-btn').on('click', function () {
        $('.main').toggleClass('main-toggle');
        $('.sidebar').toggleClass('sidebar-toggle');
        $('.item-box').siblings('ul').slideUp();
      

    });

    $('.item-box').on('click', function () {
        $('.main').addClass('main-toggle');
        $('.sidebar').addClass('sidebar-toggle');
        //----------
        $('.item-box').addClass('close');
        $(this).removeClass('close');

        $('.item-box.close').siblings('ul').slideUp();
        let sidebarClass = document.getElementsByClassName('sidebar-toggle');
        $('.item-box').parents('li').removeClass('active')
        $(this).parents('li').addClass('active');
        if (sidebarClass.length > 0) {
            $(this).siblings('ul').slideToggle();
        } else {
            $('.item-box').siblings('ul').slideUp();
        }
    });
});