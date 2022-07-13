(function(){

    var handle_menu = function(){

        var the_show_btn = $('#menu__burger'),
            the_close_btn = $('#menu__close'),
            the_menu = $('#menu'),
            the_body = $('body');

        the_show_btn.on('click', function(){
            the_menu.addClass('menu__show');
            the_show_btn.hide();
            the_close_btn.show();
            the_body.addClass('do-not-scroll');
        });

        the_close_btn.on('click', function(){
            the_menu.removeClass('menu__show');
            the_show_btn.show();
            the_close_btn.hide();
            the_body.removeClass('do-not-scroll');
        });

    }

    handle_menu();


})();