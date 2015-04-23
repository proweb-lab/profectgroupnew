<li>
    <div class="timeline-image">
        <?php print $fields['field_image']->content; ?>
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <h4 class="history-title"> <?php print $fields['title']->content; ?></h4>
            <h4 class="subheading"> <?php print $fields['field_extra_title']->content; ?></h4>
        </div>
        <div class="timeline-body">
            <p class="text-muted"><?php print $fields['field_body']->content; ?></p>
        </div>
    </div>
</li>