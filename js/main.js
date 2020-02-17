jQuery(function() {
	var $body = jQuery('body'),
		$menuBtn = jQuery('.hamburger'),
		$slider = jQuery('.b-slider');

	$body.niceScroll();
	$slider.slick({
		dots: false,
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$menuBtn.click(function() {
		$body.toggleClass('menu-open');
		jQuery(this).toggleClass('is-active');
	});
});
