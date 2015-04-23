<ul class="timeline">
    <?php foreach ($rows as $id => $row): ?>
        <div<?php if ($classes_array[$id]) {
        print ' class="' . $classes_array[$id] . '"';
    } ?>>
        <?php print $row; ?>
        </div>
<?php endforeach; ?>
    <li class="timeline-inverted now">
        <div class="timeline-image">
            <h4>Now
                <br>
                <br></h4>
        </div>
    </li>
</ul>
