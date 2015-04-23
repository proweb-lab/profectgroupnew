<header id="header" role="banner">
    <div class="container">
        <?php if ($page['header']): ?>
            <div class="language-switcher">
                <?php print render($page['header']); ?>
            </div>
        <?php endif; ?>
        <div class="navbar-header">
            <?php if ($logo): ?>
                <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                    <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                </a>
            <?php endif; ?>
        </div>
        <nav id="main-menu">
            <div class="navbar-collapse">
                <ul class="menu nav nav navbar-nav">
                    <?php print views_embed_view('menu_items', 'block'); ?>
                </ul>
            </div>
        </nav>
    </div>
</header>
<section id="main-slider">
    <?php print views_embed_view('slider', 'front_slider'); ?>
</section>
<div id="cta" class="wow fadeIn animated">
    <?php print views_embed_view('front_text', 'block'); ?>
</div>
<section id="about-us" class="bg-about">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown animated"><?php echo t('About Us') ?></h2>
            <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="center column-title">
                    <?php echo t('Who We Are') ?></h3></div>
        </div>
        <div class="row">
                <?php //print views_embed_view('about_us', 'story_block'); ?>
                <?php 
              $about = node_view(node_load(73)); 
              print(drupal_render($about));
          ?>
            </div>
        </div>
    </div>
</section>
<section id="values"class="bg-values">
     <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="center column-title">
                    <?php echo t('Our Values') ?></h3></div>
        </div>
        <div class="row">
                     <?php 
              $about = node_view(node_load(74));
              print(drupal_render($about));
          ?>
        </div>
     </div>
</section>
<section id="vision"class="bg-vision">
     <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="center column-title">
                    <?php echo t('Strategic Vision') ?></h3></div>
        </div>
        <div class="row">
                   <?php 
              $about = node_view(node_load(75));
              print(drupal_render($about));
          ?>
        </div>
     </div>
</section>
<section id="history"class="bg-history">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="center column-title"><?php echo t('Our History') ?></h3></div>
        </div>
    
    <?php print views_embed_view('history', 'history_block'); ?>
</section>
<section id="services" class="services bg-services">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="center column-title">
               <?php echo t('Main Works');?></h3>
          
            </div>
            <div class="row main-work-sub-page">
                
                <?php print views_embed_view('section', 'descripton_block'); ?>
            </div>
            <div class="row main-work-boxes">
                
                <?php print views_embed_view('section', 'front_block'); ?>
            </div>
        </div>
    </div>

</section>
<!--<section id="portfolio">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="center column-title" ><?php //echo t('Our Projects');?></h3>
            </div>
            <div class="row">
                <?php //print views_embed_view('about_us', 'project_block'); ?>
            </div>
        </div>
    </div>
</section>-->
<section id=people>
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown animated" ><?php echo t('People') ?></h2>
            <div class="row">
                <?php print views_embed_view('people', 'director_block'); ?>
            </div>
        </div>
    </div>
</section>
<section id="team" class="bg-team">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <h3 class="column-title center"><?php echo t('Our Team');?></h3>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-7 team-middle">
            <?php print views_embed_view('people', 'team_block'); ?>
        </div>
    </div>
</section>
<!--<section id="our-partners">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown animated" ><?php echo t('Our Partners') ?></h2>
        </div>
        <?php// print views_embed_view('partner', 'featured_block'); ?>
    </div>

    <div class="clients_showcase-container container">
        <?php //print views_embed_view('partner', 'good_partner_block'); ?>
    </div>
</section>-->
<section id="our-branches">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown animated" ><?php echo t('Our Branches') ?></h2>
        </div>
        <?php print views_embed_view('office', 'block'); ?>
    </div>
</section>

<section id="join-us">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title text-center wow fadeInDown animated" ><?php echo t('Join Us') ?></h2>
            <div class="row">
                <div class="col-sm-6 wow fadeInLeft">
                    <?php
                    $join_form_block = module_invoke('webform', 'block_view', 'client-block-23');
                    print render($join_form_block['content']);
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact-us">
    <div id="get-in-touch">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title text-center wow fadeInDown animated">Get in Touch</h2>
                <p class="text-center wow fadeInDown animated">Get in Touch</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 wow fadeInLeft">
                <?php
                $contact_form_block = module_invoke('webform', 'block_view', 'client-block-30');
                print render($contact_form_block['content']);
                ?>
            </div>
        </div>
    </div>
</section>
<section<?php print $content_column_class; ?>>     
    <?php print render($title_suffix); ?>
    <?php print $messages; ?>
    <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
    <?php endif; ?>
    <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
    <?php endif; ?>
    <?php print render($page['content']); ?>
</section>

<footer class="footer">
    <div class="row">
        <?php print render($page['footer']); ?>
    </div>


</footer>
<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-55371821-1', 'auto');
    ga('send', 'pageview');

</script>