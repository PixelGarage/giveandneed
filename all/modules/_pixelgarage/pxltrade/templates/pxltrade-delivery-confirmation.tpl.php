<?php
/**
 * @file
 * Customize confirmation screen after successful submission.
 *
 * This file may be renamed "webform-confirmation-[nid].tpl.php" to target a
 * specific webform e-mail on your site. Or you can leave it
 * "webform-confirmation.tpl.php" to affect all webform confirmations on your
 * site.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $progressbar: The progress bar 100% filled (if configured). This may not
 *   print out anything if a progress bar is not enabled for this node.
 * - $confirmation_message: The confirmation message input by the webform
 *   author.
 * - $sid: The unique submission ID of this submission.
 * - $url: The URL of the form (or for in-block confirmations, the same page).
 */
?>
<div class="webform-confirmation">
  <?php if($status == 'success'): ?>
    <span class="fa fa-check"></span>
  <?php endif; ?>
  <?php if($status == 'just-taken' || $status == 'no-contact'): ?>
    <span class="fa fa-exclamation"></span>
  <?php endif; ?>
  <?php if($status == 'error'): ?>
    <span class="fa fa-times"></span>
  <?php endif; ?>
  <div class="confirmation-message">
    <?php if ($confirmation_message): ?>
      <?php print $confirmation_message ?>
    <?php else: ?>
      <p><?php print t('Thank you, your submission has been received.'); ?></p>
    <?php endif; ?>
    <?php if ($access_token_url): ?>
      <div class="access-token" >
        <a href="<?php print $access_token_url; ?>" title="<?php print t('Manage your offer'); ?>"><?php print $access_token_url; ?></a>
      </div>
    <?php endif; ?>
  </div>
</div>
