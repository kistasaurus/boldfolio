(function ($, Drupal, once) {
	Drupal.behaviors.boldfolioAnimations = {
		attach: function (context, settings) {
			once('boldfolioAnimations', 'html', context).forEach(function (element) {
				// Apply the myCustomBehaviour effect to the elements only once.
				$('.boldfolio-teaser').waypoint(function (direction) {
					if (direction === 'down') {
						$(this.element).toggleClass('animate__animated animate__fadeIn');
					}
				}, {
					offset: '100%'
				})

				$('.boldfolio-animate-fadeIn').waypoint(function (direction) {
					if (direction === 'down') {
						$(this.element).toggleClass('animate__animated animate__fadeIn');
					}
				}, {
					offset: '100%'
				})
		});
	},
};
})(jQuery, Drupal, once);
