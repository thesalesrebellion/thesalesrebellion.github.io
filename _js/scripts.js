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

        const page_content = document.querySelector(el)

        if (page_content) {
            const page_style = getComputedStyle(page_content),
                  initial_bgYpos = parseInt(page_style.backgroundPositionY, 10);

            window.addEventListener('scroll', function(){
                let offset = window.pageYOffset;
                if (initial_bgYpos > 0) {
                    page_content.style.backgroundPositionY = initial_bgYpos - offset * .1 + 'px';
                } else {
                    page_content.style.backgroundPositionY = offset * .7 + 'px';
                }
            });
        }
    };

    handle_hero_parallax('.hero__content');

    // scrolls to the corresponing section when menu with internal href is clicked
    var scroll_to = function(button_id, the_href){

        $('#'+button_id).on('click', function(event){
            event.preventDefault();

            var the_element = document.getElementById(the_href);

            the_element.scrollIntoView({
                behavior: 'smooth'
            });

        });
    };


    // NOTE: temporary solution for component placement on the promo page - will 
    // circle back around to come up with a more suitable approach for displaying 
    // promo hero component and overlay content in the future
    const handle_promo_feature_section = function(el) {
            const heroSection = document.querySelector('.landing-page__hero--icon'),
                nextSection = document.querySelector(el);
            
            if (heroSection && nextSection) {
                setTimeout(() => {
                    const rect = heroSection.getBoundingClientRect(),
                        heroHeight = rect.top;
        
                    nextSection.style.paddingTop = heroHeight + 60 + 'px';
                }, 10)
            }
    }

    handle_promo_feature_section('.landing-page__features');

    // NOTE: this is to prevent high CLS on the promo page due to the way the hero
    // component is set up - will remove this in the future when a reusable component
    // for promo hero is built

    scroll_to('goto-podcast', 'podcast');
    scroll_to('goto-slack', 'slack');
    scroll_to('goto-blog', 'blog');
    scroll_to('goto-market-tools', 'market-tools');
    scroll_to('goto-course-work', 'course-work');

    scroll_to('goto-podcast--mobile', 'podcast');
    scroll_to('goto-slack--mobile', 'slack');
    scroll_to('goto-blog--mobile', 'blog');
    scroll_to('goto-market-tools--mobile', 'market-tools');
    scroll_to('goto-course-work--mobile', 'course-work');

})();
