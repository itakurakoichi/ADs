/**
 * # Logic
 *    - when AD appears in window, start animation
 *         ADがwindow内に現れたらアニメーションで表示する, animationのclassをaddClassする
 */
$(function() {
	var $ad = $('.ad');
	var adApperedDisdance = $ad.offset().top - $(window).height() + $ad.height();
	var adPassedDisdance = $ad.offset().top + $ad.height();

	/**
	 * ページ読み込み時にADがwindow内に存在 -> animationさせる
	 */
	if (adApperedDisdance < 0) {
		$ad.addClass('anim');
	}

	/**
	 * スクロール中, ADがwindows内に表示されたタイミングでanimation
	 */
	var scrollTop;
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();

		if (scrollTop >= adPassedDisdance) {
			$ad.removeClass('anim');
		} else if (scrollTop >= adApperedDisdance) {
			$ad.addClass('anim');
		} else {
			$ad.removeClass('anim');
		}
	});

});