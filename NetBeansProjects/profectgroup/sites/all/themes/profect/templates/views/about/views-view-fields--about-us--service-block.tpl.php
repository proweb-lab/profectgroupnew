
<div class="service-item">
    <?php print $fields['field_image']->content; ?>
    <h4>
        <strong><?php print $fields['title']->content; ?></strong>
    </h4>
    <p><?php print $fields['field_body']->content; ?></p>
    
    <span class="btn btn-primary more-link"><?php print $fields['field_link']->content; ?><?php echo t('More')?></span>
    
</div>
