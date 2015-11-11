/**
 * # Logic
 *    - when scroll end
 *    - display AD, fadeIn and falling 一定値の上部から下降
*/
$(function() {
	var $ad = $('.ad');
	$ad.css({'opacity': 0});
	var FALL_OFFSET = '60px';

	var scrollStopEvent = new $.Event('scrollstop');
	var timer = false;
	function scrollStopEventTrigger() {
		if (timer !== false) {
			// console.log('[DEBUG] timer is true, so clear timer');
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			$(window).trigger(scrollStopEvent);
		}, 100);
	}

	$(window).on('scroll', scrollStopEventTrigger);

	$(window).on('scrollstop', function() {
		// console.log('[DEBUG] scroll is end...');
		$ad.css({
			'bottom': FALL_OFFSET,
			'background': '#ad4',
			'opacity': 0
		})
		.animate({ 
			'bottom': 0,
			'opacity': 1
		}, {
			duration: 800,
			complete: function() {
				// below is test of complete handlr.
				$(this).css({background: '#f00'});
			}
		});
	});
});