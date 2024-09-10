$(document).ready(function() {
    var swiper = new Swiper('.home-slider', {
        autoplay: false,
        pagination: {
            el: '.home-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.home-slider .swiper-button-next',
            prevEl: '.home-slider .swiper-button-prev',
        },
    });

    $('.faq li h3').on('click', function(e){
        e.preventDefault();var $this = $(this);
        $this.parents('li').find('.content-faq').slideToggle();
        $this.parents('li').toggleClass('active');
        return false;
    });

    // Sharing

	$('.addThis_iconContact .item-contact,.addThis_listSharing .addThis_close').on('click', function(e){
		if($('.addThis_listSharing').hasClass('active')){
			$('.addThis_listSharing').removeClass('active');
			$('.addThis_listSharing').fadeOut(150);				
		}
		else{		
			$('.addThis_listSharing').fadeIn(100);
			$('.addThis_listSharing').addClass('active');
		}
	});
	$('.listSharing_overlay').on('click', function(e){
		$('.addThis_listSharing').removeClass('active');
		$('.addThis_listSharing').fadeOut(150);				
	})


    // Popup left
    $('.popup-sapo .icon').click(function() {
		$(".popup-sapo").toggleClass("active");
	}); 
	$('.close-popup-sapo').click(function() {
		$(".popup-sapo").toggleClass("active");
	}); 
})