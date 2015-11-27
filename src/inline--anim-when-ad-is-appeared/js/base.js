/**
 * # Logic
 *    - when AD appears in window, start animation
 *         ADがwindow内に現れたらアニメーションで表示する, animationのclassをaddClassする
 */
$(function() {
	var $ad = $('.ad');
	var adApperedDisdance = $ad.offset().top - $(window).height() + $ad.height();
	var adPassedDisdance = $ad.offset().top + $ad.height();

	console.log('[DEBUG] adApperedDisdance: ', adApperedDisdance)

	/**
	 * ページ読み込み時からADがwindow内に表示されていた場合
	 * 読み込み時にanimationさせるか...
	 */
	if (adApperedDisdance < 0) {
		console.log('[DEBUG] ADが最初から表示されています')
		$ad.addClass('anim');
	}

	/**
	 * スクロール中に、ADが現れたタイミングで何かしら処理をする
	 */
	var scrollTop;
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		console.log('[DEBUG] scrollTop: ', scrollTop)

		if (scrollTop >= adPassedDisdance) {
			console.log('[DEBUG] ADが通り過ぎた')
			$ad.removeClass('anim');

		} else if (scrollTop >= adApperedDisdance) {
			// ADがwindow内に現れた
			console.log('[DEBUG] ADがwindow内に現れた')
			$ad.addClass('anim');

		} else {
			console.log('[DEBUG] ADがwindow内ではない')
			$ad.removeClass('anim');
		}
	});

	

});