(function ($, Drupal, once) {
	Drupal.behaviors.boldfolioAnimations = {
		attach: function (context, settings) {
			once('boldfolioAnimations', 'html', context).forEach(function (element) {
				// Function to check if an item is in the viewport
				$.fn.isInViewport = function () {
					var elementTop = $(this).offset().top;
					var elementBottom = elementTop + $(this).outerHeight();

					var viewportTop = $(window).scrollTop();
					var viewportBottom = viewportTop + $(window).height();

					return elementBottom > viewportTop && elementTop < viewportBottom;
				};

				// Let the teasers fade in if they haven't been viewed yet
				$('.boldfolio-teaser').each(function (i) {
					if (!$(this).isInViewport()) {
						$(this).css('opacity', '0');
					} else {
						$(this).addClass('boldfolio-animation-done');
					}
				});

				$(window).on('resize scroll', function () {
					$('.boldfolio-teaser').each(function (i) {
						if ($(this).isInViewport() && !$(this).hasClass('boldfolio-animation-done')) {
							$(this).addClass('animate__animated animate__fadeIn animate__slow');
							$(this).addClass('boldfolio-animation-done');
							$(this).css('opacity', 'unset');
						}
					});
				});
		});
	},
};
})(jQuery, Drupal, once);
