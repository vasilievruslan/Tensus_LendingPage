$(function(){

	var background = $('.banner__background')

	$(window).scroll(function(event) {
		var st = $(window).scrollTop();

		background.css({
			transform: `translateX(${st / 2}px)`
		})
	});

})