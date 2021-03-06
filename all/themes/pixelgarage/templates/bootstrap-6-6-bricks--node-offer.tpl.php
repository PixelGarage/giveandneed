<?php
/**
 * @file
 * Bootstrap 6-6 bricks template for Display Suite.
 */

$collapse_id = "collapse-bottom-row-" . $node->nid;
$button_text = t('Need');
?>

<<?php print $layout_wrapper; print $layout_attributes; ?> class="<?php print $classes; ?>">
  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>
  <?php if ($top) : ?>
    <div class="row row-top">
      <<?php print $top_wrapper; ?> class="col-sm-12 <?php print $top_classes; ?>">
        <?php print $top; ?>
      </<?php print $top_wrapper; ?>>
    </div>
  <?php endif; ?>
  <?php if ($topleft || $topright) : ?>
    <div class="row row-first">
      <<?php print $topleft_wrapper; ?> class="col-sm-6 <?php print $topleft_classes; ?>">
        <?php print $topleft; ?>
      </<?php print $topleft_wrapper; ?>>
      <<?php print $topright_wrapper; ?> class="col-sm-6 <?php print $topright_classes; ?>">
        <?php print $topright; ?>
      </<?php print $topright_wrapper; ?>>
    </div>
  <?php endif; ?>
  <?php if ($central) : ?>
    <div class="row row-central">
      <<?php print $central_wrapper; ?> class="col-sm-12 <?php print $central_classes; ?>">
        <?php print $central; ?>
      </<?php print $central_wrapper; ?>>
    </div>
  <?php endif; ?>
  <?php if ($bottomleft || $bottomright) : ?>
    <div class="row row-second">
      <div class="col-sm-12">
        <button class="btn btn-lg accept-offer" type="button" data-toggle="collapse" data-target="#<?php print $collapse_id; ?>" aria-expanded="false" aria-controls="<?php print $collapse_id; ?>">
          <span class="fa fa-check"></span><span class="btn-label"><?php print $button_text; ?></span>
        </button>
        <div id="<?php print $collapse_id; ?>" class="collapse">
          <div class="row">
            <div class="col-sm-6 <?php print $bottomleft_classes; ?>">
              <?php print $bottomleft; ?>
            </div>
            <div class="col-sm-6 <?php print $bottomright_classes; ?>">
              <?php print $bottomright; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if ($bottom) : ?>
    <div class="row row-bottom">
      <<?php print $bottom_wrapper; ?> class="col-sm-12 <?php print $bottom_classes; ?>">
        <?php print $bottom; ?>
      </<?php print $bottom_wrapper; ?>>
    </div>
  <?php endif; ?>
</<?php print $layout_wrapper ?>>


<!-- Needed to activate display suite support on forms -->
<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
