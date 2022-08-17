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

    var handle_faq = function(){

        var que = $('.faq__q'),
            ans = $('.faq__a');

        // ans.hide();

        que.on('click', function(){

            var $this = $(this),
                ans = $this.siblings('.faq__a'),
                icon = $this.children('.faq__icon');

            ans.slideToggle();

            icon.toggleClass('rotate-45');

        });

    }

    handle_faq();

    var handle_hero_parallax = function(el){

        const page_content = document.querySelector(el),
              page_style = getComputedStyle(page_content),
              initial_bgYpos = parseInt(page_style.backgroundPositionY, 10);

        window.addEventListener('scroll', function(){
            let offset = window.pageYOffset;
            if (initial_bgYpos > 0) {
                page_content.style.backgroundPositionY = initial_bgYpos - offset * .2 + 'px';
            } else {
                page_content.style.backgroundPositionY = offset * .7 + 'px';
            }
        });

    };

    handle_hero_parallax('.hero__content');

})();
