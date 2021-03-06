/**
 * This file contains all Drupal behaviours of the Apia theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

  /**
   * This behavior adds shadow to header on scroll.
   *
   */
  Drupal.behaviors.addHeaderShadow = {
    attach: function (context) {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
          $("header.navbar .container").css("box-shadow", "0 4px 3px -4px gray");
        }
        else {
          $("header.navbar .container").css("box-shadow", "none");
        }
      });
    }
  };

  /**
   * Handles the filter click behaviour and prevents the click propagation (close of exposed form).
   */
  Drupal.behaviors.clickFilters = {
    attach: function () {
      var $exposedForm = $('footer .footer-exposed-form'),
          $exposedFormSubmit = $exposedForm.find('.views-submit-button > button'),
          $categoryCheckboxes = $('#edit-term-node-tid-depth-wrapper').find('.pxl-checkbox'),
          $genderCheckboxes = $('#edit-field-sex-tid-wrapper').find('.pxl-checkbox'),
          $exposedWidgets = $('.views-exposed-widgets');

      // select/unselect category checkboxes
      $categoryCheckboxes.once('checked', function() {
        $(this).on('click', function() {
          var $checkbox = $(this),
              $isSelected = $checkbox.hasClass('selected'),
              $input = $checkbox.find('input');

          // reset all checkboxes first
          $categoryCheckboxes.each(function() {
            var $checkbox = $(this),
                $input = $checkbox.find('input');

            $checkbox.removeClass('selected');
            $input.prop('checked', false);
          });

          // de-/select checkbox
          if (!$isSelected) {
            $checkbox.addClass('selected');
            $input.prop('checked', true);
            //$exposedFormSubmit.click();
          }

          // don't propagate click event (otherwise exposed form is closed)
          return false;
        });
      });

      // select/unselect gender checkboxes
      $genderCheckboxes.once('checked', function() {
        $(this).on('click', function() {
          var $checkbox = $(this),
              $isSelected = $checkbox.hasClass('selected'),
              $input = $checkbox.find('input');

          // reset all checkboxes first
          $genderCheckboxes.each(function() {
            var $checkbox = $(this),
                $input = $checkbox.find('input');

            $checkbox.removeClass('selected');
            $input.prop('checked', false);
          });

          // de-/select checkbox
          if (!$isSelected) {
            $checkbox.addClass('selected');
            $input.prop('checked', true);
            //$exposedFormSubmit.click();
          }

          // don't propagate click event (otherwise exposed form is closed)
          return false;
        });
      });

      $exposedWidgets.once('checked', function() {
        $(this).on('click', function(ev) {
          // prevent click on widget to close exposed form
          ev.stopPropagation();
        });
      });
    }
  };

  /**
   * Implements the active state of the filter menus and opens or closes the filter section
   * according to the menu state.
   */
  Drupal.behaviors.activateFilterMenus = {
    attach: function() {
      var $exposedForm = $('footer .footer-exposed-form'),
          $exposedFormSubmit = $exposedForm.find('.views-submit-button'),
          $exposedFormSubmitButton = $exposedFormSubmit.find('> button'),
          $categoryFilters = $exposedForm.find('#edit-term-node-tid-depth-wrapper'),
          $genderFilters = $exposedForm.find('#edit-field-sex-tid-wrapper'),
          $locationFilters = $exposedForm.find('#edit-field-address-locality-wrapper'),
          $footer = $('.footer-content'),
          $menus = $footer.find('li.menu'),
          $body = $('body');

      var _showExposedForm = function() {
        // set actual window height and show panel
        $exposedForm.css({'height': $(window).height(), 'overflow-y': 'auto'});
        $exposedForm.slideDown(400);

        // prevent background scrolling
        $body.css('overflow', 'hidden');
      };

      var _hideExposedForm = function() {
        // highlight filter menu, if at least one checkbox is selected
        if ($categoryFilters.find('.pxl-checkbox').hasClass('selected')) {
          $footer.find('li.menu-filter').addClass('selected');
        }
        if ($locationFilters.find('.form-text').val()) {
          $footer.find('li.menu-location').addClass('selected');
        }
        $menus.removeClass('active');

        // hide filter panel
        $exposedForm.slideUp(400);

        // enable background scrolling
        $body.css('overflow', 'auto');
      };

      // filter menus click
      $menus.once('activated', function() {
        $(this).on('click', function() {
          var $menu = $(this),
              $menuIsActive = $menu.hasClass('active');

          // reset active menu
          $menus.removeClass('active').removeClass('selected');

          // menu specific
          if ($menu.hasClass('menu-filter')) {
            $locationFilters.hide();
            $categoryFilters.show();
            $genderFilters.show();
            $exposedFormSubmit.show();

          } else if ($menu.hasClass('menu-location')) {
            $categoryFilters.hide();
            $genderFilters.hide();
            $locationFilters.show();
            $exposedFormSubmit.show();
          }

          // show / hide filter section
          if(!$menuIsActive) {
            $menu.addClass('active');
            _showExposedForm();

          } else {
            // hide form
            _hideExposedForm();
          }
        });
      });

      // submit button click hides exposed form
      $exposedFormSubmitButton.off('.submit');
      $exposedFormSubmitButton.on('click.submit', function() {
        // hide exposed form
        _hideExposedForm();
      });


      // exposed form click hides itself
      $exposedForm.off('.exposed');
      $exposedForm.on('click.exposed', function() {
        // hide exposed form
        _hideExposedForm();
      });

      // resize exposed form on window resize
      $(window).off('.filter-panel');
      $(window).on('resize.filter-panel', function(){
        if ($exposedForm.is(':visible')) {
          $exposedForm.css('height', $(window).height());
        }
      });
    }
  };


  /**
   * Swaps images from black/white to colored on mouse hover.
   Drupal.behaviors.hoverImageSwap = {
    attach: function () {
      $('.node-project.node-teaser .field-name-field-images a img').hover(
        function () {
          // mouse enter
          src = $(this).attr('src');
          $(this).attr('src', src.replace('teaser_bw', 'teaser_normal'));
        },
        function () {
          // mouse leave
          src = $(this).attr('src');
          $(this).attr('src', src.replace('teaser_normal', 'teaser_bw'));
        }
      );
    }
  }
   */

  /**
   * Open file links in its own tab. The file field doesn't implement this behaviour right away.
   Drupal.behaviors.openDocumentsInTab = {
    attach: function () {
      $(".field-name-field-documents").find(".field-item a").attr('target', '_blank');
    }
  }
   */

})(jQuery);
