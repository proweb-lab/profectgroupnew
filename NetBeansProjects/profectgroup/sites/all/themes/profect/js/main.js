(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.profect = {
    attach: function (context, settings) {


      $('.navbar-collapse ul li a').eq(0).addClass('active');
      $('.navbar-collapse ul li a').on('click', function () {
        if ($('.navbar-collapse ul li a').hasClass('active')) {
          $('.navbar-collapse ul li a').removeClass('active');
        }
   
        $(this).addClass('active');
        return false;
      });
      
       $('.portfolio-item').hover(
              function () {
                $(this).find('.portfolio-overlay').show();
               
              },
              function () {
               $(this).find('.portfolio-overlay').hide();
              }
      );
      $("#team .container .item").slice(0,3).show();
      
      
      
      $(".next").click(function(event) { 
  var $currElements = $("#container .item:visible");
  var $nextElements = $("#container .item:hidden");


    $currElements.hide();
    $nextElements.show();

    event.preventDefault();

});

/* offices tabs*/
      $('.offices-tab-content').eq(0).show();
      $('.offices-tabs a').eq(0).addClass('active');
      $('.offices-tabs a').on('click', function () {
        if ($('.offices-tabs a').hasClass('active')) {
          $('.offices-tabs a').removeClass('active');
        }
        $('.offices-tab-content').hide();
        $(this).addClass('active');
        id = $(this).attr('id');
        $('#' + id + '-content').show();
        return false;
      });
 }
  };





 
      
})(jQuery, Drupal, this, this.document);







jQuery(function($) {'use strict';

	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
        
//        $('.navbar-collapse ul li').on('click', function() {  
//	if($(this).hasClass('active')){
//            $(this).removeClass('active');}
//        else{
//            $(this).addClass('active');
//        }
//	});

        });