(function($){
	$(document).ready(function (){

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function(){
			$('.of-searchbox').hide(200);
		});

        $('.pgwSlideshow').pgwSlideshow();

        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 5,
            centeredSlides: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500 ) {
                $('.lys-menu').addClass('ap-menufix');
            } else {
                $('.lys-menu').removeClass('ap-menufix');
            }
        });

        $(".lys-bannerdel2, .lys-btn-dk").click(function (){
            $('html, body').animate({ scrollTop: $(".lys-s7").offset().top - 60 }, 1000);
        });
        $(".lys-ddsp").click(function (){
            $('html, body').animate({ scrollTop: $(".lys-s1").offset().top - 60 }, 1000);
        });
        $(".lys-tdkt").click(function (){
            $('html, body').animate({ scrollTop: $(".lys-s6").offset().top - 60 }, 1000);
        });
        $(".lys-tlds").click(function (){
            $('html, body').animate({ scrollTop: $(".lys-s8").offset().top - 60 }, 1000);
        });
        $(".lys-cmt").click(function (){
            $('html, body').animate({ scrollTop: $(".lys-cmt").offset().top - 60 }, 1000);
        });

        $("input.ya-ipcolor").change(function(){
            if ($("input.ya-ipcolor:checked").val() == "vang") {
                $('.gi-oderimg img').attr('src', 'images/lys/p-vang.jpg');
            }
            else if ($("input.ya-ipcolor:checked").val() == "hong"){
                $('.gi-oderimg img').attr('src', 'images/lys/p-hong.jpg');
            }
            else if ($("input.ya-ipcolor:checked").val() == "den"){
                $('.gi-oderimg img').attr('src', 'images/lys/p-den.jpg');
            }
        });

	});
})(window.jQuery);