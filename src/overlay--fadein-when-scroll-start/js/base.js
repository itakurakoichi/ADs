/**
 * # Logic
 *    - スクロール量が一定値を超えたら、ADをfadeIn表示する
*/
$(function() {
	var $ad = $('.ad');
	var SCROLL_OFFSET = 120;

	var scrollTop;
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		// console.log('[DEBUG] scrollTop: ', scrollTop)
		if (scrollTop > SCROLL_OFFSET) {
			$ad.fadeIn();
		} else {
			$ad.fadeOut();
		}
	});
});