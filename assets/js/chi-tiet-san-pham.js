$(document).ready(function() {
    function activeTab(obj) {
        $('.product-tab ul li').removeClass('active');
        $(obj).addClass('active');
        var id = $(obj).attr('data-tab');
        $('.tab-content').removeClass('active');
        $(id).addClass('active');
    }

    $('.product-tab ul li').click(function() {
        activeTab(this);
        return false;
    });

    setTimeout(function() {
        var ch = $('.product_getcontent').height(),
            smore = $('.show-more');
        console.log(ch);
        if (ch > 700) {
            $('.ba-text-fpt').addClass('has-height');
            smore.removeClass('d-none');
        }
    }, 200);
    $('.btn--view-more').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.parents('.product_getcontent').toggleClass('expanded');
        $('html, body').animate({
            scrollTop: $('.product_getcontent').offset().top - 110
        }, 'slow');
        $(this).toggleClass('active');

    });




    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        slidesPerView: 20,
        freeMode: true,
        lazy: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        hashNavigation: true,
        slideToClickedSlide: true,
        breakpoints: {
            300: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },
        navigation: {
            nextEl: '.gallery-thumbs .swiper-button-next',
            prevEl: '.gallery-thumbs .swiper-button-prev',
        },
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        lazy: true,
        hashNavigation: true,
        thumbs: {
            swiper: galleryThumbs
        }
    });
    var swiper = new Swiper('.product-relate-swiper', {
        slidesPerColumnFill: 'row',
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        navigation: {
            nextEl: '.product-lq .section-next',
            prevEl: '.product-lq .section-prev',
        },
        breakpoints: {
            280: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });

    // Sản phẩm đã xem
    setTimeout(function () {
        var swiper = new Swiper('.recent-viewed', {
            slidesPerColumnFill: 'row',
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            navigation: {
                nextEl: '.section-recenview-product .section-next',
                prevEl: '.section-recenview-product .section-prev',
            },
            breakpoints: {
                280: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        });
    }, 500);
});