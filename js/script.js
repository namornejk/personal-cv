var introContainerHeight = $('#hello-box').height();

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if (wScroll <= introContainerHeight + 200) {

        $('#headline').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)',
            'display': 'initial'
        });

        $('#welcome').css({
            'transform': 'translate(0px, -' + wScroll / 2 + '%)'
        });

    } else {
        $('#headline').css({
            'display': 'none'
        });
    }

    $('#about-photo').css({
        'transform': 'translate(0px, -' + wScroll / 8 + '%)'
    });
})
