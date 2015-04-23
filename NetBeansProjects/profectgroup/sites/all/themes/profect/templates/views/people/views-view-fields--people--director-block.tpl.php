<div class="col-sm-3">
    <div class="team-member wow fadeInUp animated">
        <div class="team-img">
          <?php print $fields['field_image']->content;?>
        </div>
        <div class="team-info">
            <h4><?php print $fields['title']->content;?></h4>
            <span><?php print $fields['field_position']->content;?></span>
        </div>
        <p><?php print $fields['field_body']->content; ?></p>
    </div>
</div>

