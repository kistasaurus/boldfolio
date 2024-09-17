/**
 * @file
 * Boldfolio behaviors.
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.boldfolio = {
    attach (context, settings) {
      $("body").prepend("<div class='theme-switcher'>Click Here</div>");
      $(".theme-switcher").on("click", function() {
        $("html").css("--color-dark", "var(--seafoam-dark)");
        $("html").css("--color-highlight", "var(--seafoam-highlight");
        $("html").css("--color-light", "var(--seafoam-light");
        $("html").css("--color-background", "var(--seafoam-background");
        $("html").css("--color-alternate", "var(--seafoam-alternate");
      });
    }
  };

} (jQuery, Drupal));
