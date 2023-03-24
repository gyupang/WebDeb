$(function () {

    $('.dropdown')
        .mouseenter(function () {
            $(this).find('ul').css({
                visibility: 'visible',
                opacity: 1
            });
            $(this).find('a i').removeClass('fa-angle-down').addClass('fa-angle-up');
        })
        .mouseleave(function () {
            $(this).find('ul').css({
                opacity: 0,
                visibility: 'hidden'
            });
            $(this).find('a i').removeClass('fa-angle-up').addClass('fa-angle-down')
        });



    $(window).scroll(function () {
        const oheight = $('#header').offset().top;
        if (oheight > 300) {
            $('#header').css({ top: '0em' });
        } else {
            $('#header').css({ top: '3em' });
        }
    });

    $('click-a-table-btn').click(function () {
        $('dropdown-content').toggleClass('show');
    });

}); //JQ