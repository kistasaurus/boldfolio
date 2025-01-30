(function ($, Drupal, once) {
	Drupal.behaviors.boldfolioMenu = {
		attach: function (context, settings) {
			once('boldfolioMenu', 'html', context).forEach(function (element) {
				// Hamburger Menu Toggle for Mobile
				$(".nav--banner .nav--primary--toggle").on("click", function () {
					if ($(this).attr('aria-expanded') === "true") {
						closeAllNav();
						$(this).attr("aria-expanded", "false");
						$(this).parents(".nav--banner").find(".nav--menu").slideUp();
						$(this).parents(".nav--banner").removeClass("nav--banner--open");
					} else {
						closeAllNav();
						$(this).attr("aria-expanded", "true");
						$(this).parents(".nav--banner").find(".nav--menu").slideDown();
						$(this).parents(".nav--banner").addClass("nav--banner--open");
					}
				});
				// Submenu toggles
				$(".nav--banner .bf-menu--toggle").on("click", function () {
					if ($(this).attr('aria-expanded') === "true") {
						closeAllNav();
					} else {
						closeAllNav();
						$(this).attr("aria-expanded", "true");
						$(this).siblings(".bf-menu--level-2").slideDown();
					}
				});
				// Function to close everything that's open
				function closeAllNav() {
					$(".nav--banner .bf-menu--toggle[aria-expanded='true']").siblings(".bf-menu--level-2").slideUp();
					$(".nav--banner .bf-menu--toggle[aria-expanded='true']").attr("aria-expanded", "false");
				}
			});
		},
	};
})(jQuery, Drupal, once);
