/**
 * # Logic
 *    - when AD touch Header
 *       スクロール量が、ADのoffset.topとheader高さの差分に等しくなった時 ⇛ ADがheaderに触れた時
 *    - chnage style of AD to fixed position
 * # 前提 
 *    - 媒体側のheaderが、fixd(固定)表示であること
 *    - 媒体側のheaderのheightを、paramterで渡されること
 */
$(function() {
	'use strict';
	
	var $ad = $('.ad');
	var HEADER_HEIGHT = 50;
	var range = $ad.offset().top - HEADER_HEIGHT;
	// console.log('[DEBUG] $ad.offset().top: ', $ad.offset().top)
	// console.log('[DEBUG] range: ', range)

	var scrollTop;
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		// console.log('[DEBUG] scrollTop: ', scrollTop)
		if (range <= scrollTop) {
			$ad.css({
				'position': 'fixed',
				'top': HEADER_HEIGHT, 'left': 0
			});
		} else {
			$ad.css({
				'position': 'relative',
				'top': 'inherit', 'left': 'inherit'
			});
		}
	});
});