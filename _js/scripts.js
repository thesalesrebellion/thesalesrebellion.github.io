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

    // this allows for a smooth animation ending on the landing page
    // hero icon when the user begins to scroll.
    const handle_landing_page_hero_animation = function() {
        let animationCount = 0;
    
        document.documentElement.style.setProperty('--animation-iterations', 'infinite');
    
        document.querySelector('.landing-page__hero--icon')?.addEventListener('animationiteration', () => {
            animationCount++;
        });
    
        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty('--animation-iterations', animationCount + 1);
        });
    }
    
    handle_landing_page_hero_animation()

    // Modal logic
    const handleModal = (modalId, linkClass) => {
        const modal = document.getElementById(modalId);
        const links = document.querySelectorAll(linkClass);

        if (!modal || links.length === 0) return;

        const closeButton = modal.querySelector(".landing-page__modal--close");
    
        if (!closeButton) return;
    
        const toggleModal = () => modal.classList.toggle('show-modal');
    
        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                toggleModal();
            });
        });
    
        closeButton.addEventListener('click', toggleModal);
    
        window.addEventListener('click', (event) => {
            if (event.target === modal) toggleModal();
        });
    };

    const displayTotality = (totalityModal) => {
        totalityModal.classList.toggle('show-modal');
        totalityModal
          .querySelector(".landing-page__modal--close")
          .addEventListener('click', () => totalityModal.classList.toggle('show-modal'));
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        handleModal('learnMoreModal', '.learnMoreModal');
        handleModal('learnMoreNohotelModal', '.learnMoreNohotelModal');
        handleModal('learnMoreVipModal', '.learnMoreVipModal');
    });    

    document.addEventListener("DOMContentLoaded", function() {
        $('.slick-fade').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 9000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1,
            cssEase: 'linear'
        });

        $('.slick-me').slick({
            arrows: false,
            dots: true,
            customPaging: function(slick, index) {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle" width="44" height="44" viewBox="0 0 100 100" fill="#f77aff" stroke-width="0" stroke="#f77aff" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="50 15, 100 100, 0 100"/></svg>';
            }
        });

        $('.slick-me-center').slick({
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '90px',
            slidesToShow: 1,
            customPaging: function(slick, index) {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle" width="44" height="44" viewBox="0 0 100 100" fill="#f77aff" stroke-width="0" stroke="#f77aff" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="50 15, 100 100, 0 100"/></svg>';
            }
        });

        $('.slick-me-center-50').slick({
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 1,
            customPaging: function(slick, index) {
                return '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle" width="44" height="44" viewBox="0 0 100 100" fill="#f77aff" stroke-width="0" stroke="#f77aff" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="50 15, 100 100, 0 100"/></svg>';
            }
        });

        $('.tor-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            prevArrow: '<svg class="slick-prev" alt="Previous" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="37" width="36" height="38" rx="18" transform="rotate(-90 1 37)" stroke="#66FFC8" stroke-width="2"/><path d="M28 20L28 18L16 18L16 16L14 16L14 18L12 18L12 20L14 20L14 22L16 22L16 20L28 20ZM18 24L16 24L16 22L18 22L18 24ZM18 24L20 24L20 26L18 26L18 24ZM18 14L16 14L16 16L18 16L18 14ZM18 14L20 14L20 12L18 12L18 14Z" fill="#66FFC8"/></svg>',
            nextArrow: '<svg class="slick-next" alt="Next" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="39" y="1" width="36" height="38" rx="18" transform="rotate(90 39 1)" stroke="#66FFC8" stroke-width="2"/><path d="M12 18L12 20L24 20L24 22L26 22L26 20L28 20L28 18L26 18L26 16L24 16L24 18L12 18ZM22 14L24 14L24 16L22 16L22 14ZM22 14L20 14L20 12L22 12L22 14ZM22 24L24 24L24 22L22 22L22 24ZM22 24L20 24L20 26L22 26L22 24Z" fill="#66FFC8"/></svg>',
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.bonus-products-slider').slick({
            infinite: false,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            prevArrow: '<svg class="slick-prev" alt="Previous" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="37" width="36" height="38" rx="18" transform="rotate(-90 1 37)" stroke="#66FFC8" stroke-width="2"/><path d="M28 20L28 18L16 18L16 16L14 16L14 18L12 18L12 20L14 20L14 22L16 22L16 20L28 20ZM18 24L16 24L16 22L18 22L18 24ZM18 24L20 24L20 26L18 26L18 24ZM18 14L16 14L16 16L18 16L18 14ZM18 14L20 14L20 12L18 12L18 14Z" fill="#66FFC8"/></svg>',
            nextArrow: '<svg class="slick-next" alt="Next" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="39" y="1" width="36" height="38" rx="18" transform="rotate(90 39 1)" stroke="#66FFC8" stroke-width="2"/><path d="M12 18L12 20L24 20L24 22L26 22L26 20L28 20L28 18L26 18L26 16L24 16L24 18L12 18ZM22 14L24 14L24 16L22 16L22 14ZM22 14L20 14L20 12L22 12L22 14ZM22 24L24 24L24 22L22 22L22 24ZM22 24L20 24L20 26L22 26L22 24Z" fill="#66FFC8"/></svg>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.benefits-slider').slick({
            infinite: false,
            slidesToShow: 4.1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            prevArrow: '<svg class="slick-prev" alt="Previous" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="37" width="36" height="38" rx="18" transform="rotate(-90 1 37)" stroke="#66FFC8" stroke-width="2"/><path d="M28 20L28 18L16 18L16 16L14 16L14 18L12 18L12 20L14 20L14 22L16 22L16 20L28 20ZM18 24L16 24L16 22L18 22L18 24ZM18 24L20 24L20 26L18 26L18 24ZM18 14L16 14L16 16L18 16L18 14ZM18 14L20 14L20 12L18 12L18 14Z" fill="#66FFC8"/></svg>',
            nextArrow: '<svg class="slick-next" alt="Next" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="39" y="1" width="36" height="38" rx="18" transform="rotate(90 39 1)" stroke="#66FFC8" stroke-width="2"/><path d="M12 18L12 20L24 20L24 22L26 22L26 20L28 20L28 18L26 18L26 16L24 16L24 18L12 18ZM22 14L24 14L24 16L22 16L22 14ZM22 14L20 14L20 12L22 12L22 14ZM22 24L24 24L24 22L22 22L22 24ZM22 24L20 24L20 26L22 26L22 24Z" fill="#66FFC8"/></svg>',
            responsive: [{
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3.2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.rebels-slider').slick({
            infinite: false,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            prevArrow: '<svg class="slick-prev" alt="Previous" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="37" width="36" height="38" rx="18" transform="rotate(-90 1 37)" stroke="#66FFC8" stroke-width="2"/><path d="M28 20L28 18L16 18L16 16L14 16L14 18L12 18L12 20L14 20L14 22L16 22L16 20L28 20ZM18 24L16 24L16 22L18 22L18 24ZM18 24L20 24L20 26L18 26L18 24ZM18 14L16 14L16 16L18 16L18 14ZM18 14L20 14L20 12L18 12L18 14Z" fill="#66FFC8"/></svg>',
            nextArrow: '<svg class="slick-next" alt="Next" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="39" y="1" width="36" height="38" rx="18" transform="rotate(90 39 1)" stroke="#66FFC8" stroke-width="2"/><path d="M12 18L12 20L24 20L24 22L26 22L26 20L28 20L28 18L26 18L26 16L24 16L24 18L12 18ZM22 14L24 14L24 16L22 16L22 14ZM22 14L20 14L20 12L22 12L22 14ZM22 24L24 24L24 22L22 22L22 24ZM22 24L20 24L20 26L22 26L22 24Z" fill="#66FFC8"/></svg>',
            responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3.5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2.2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1.13,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    });

})();
