<?php  $title=str_replace(' ', '-', $fields['title']->content);
       $title_lower=strtolower($title);
     
 ?>

<li class="scroll"><a href="#<?php echo  $title_lower;?>"><?php echo $fields['field_extra_title']->content;?></a></li>

