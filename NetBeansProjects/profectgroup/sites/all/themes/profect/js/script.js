// Globals
var $window = $(window);
var $windowHeight = $window.height();
var $windowWidth;

var $isServiceOpen = false;
var $isServiceOpenSub = false;
var $isAnimationBusy = false;

var $ie8 = false;

if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
	$ie8 = true;
}

var pages = new Array();
	pages[1] = "Strategia";
	pages[2] = "Analytiikka";
	pages[3] = "Design";
	pages[4] = "Teknologia";
	pages[5] = "Markkinointi";
	pages[6] = "Insourcing";

// Static
var $navBar = $(".navBar");
var $logo = $(".logo");
var $serviceNavigationOverlay = $("#service-navigation-overlay");
var $backButton = $(".button-back");
var $backButton2 = $(".button-back2");
var $contactFormOverlay = $(".contact-form-overlay");
var $contactForm = $(".contact-form");
var $contactFormContent = $("#contactform");
var $contactFormThanksContent = $("#contactformthanks");
var $submitButton = $("#submitbutton");
var $submitStatus = $(".submitting");
var $caseOverlay = $(".case-overlay");
var $case = $(".case");
var $casethumb = $(".casethumb");
var $caseiframe = $("#caseiframe");

// Contentwrappers
var $page1 = $("#page1");
var $page2 = $("#page2");
var $page3 = $("#page3");
var $page4 = $("#page4");
var $page5 = $("#page5");
var $page6 = $("#page6");

var $page1background = $(".background1");
var $page2background = $(".background2");

// Content
var $page1content = $("#page1 .contentwrapper");
var $page2content = $("#page2 .contentwrapper");
var $page3content = $("#page3 .contentwrapper");
var $page4content = $("#page4 .contentwrapper");
var $page5content = $("#page5 .contentwrapper");
var $page6content = $("#page6 .contentwrapper");

// Anchors
var $page1anchor = $('a[name=frontpage]');
var $page2anchor = $('a[name=howwearedifferent]');
var $page3anchor = $('a[name=services]');
var $page4anchor = $('a[name=casestudies]');
var $page5anchor = $('a[name=aboutus]');
var $page6anchor = $('a[name=contactus]');
var $page3start = $('a[name=services-start]');


if(is_ipad()) {
	$windowWidth = 1000;
} else {
	$windowWidth = $window.width();
}


$(document).ready(function() {
	positionElements();
	$contactForm.show().hide();
	$contactFormOverlay.hide();
	$case.show().hide();
	$caseOverlay.hide();
	
	// Fix IE pageheights
	$(".thumboverlay").css("opacity", 0);
	$(".casename").css("opacity", 0);
	$(".zoom").css("opacity", 0);
	
	$.localScroll({ easing: "easeInOutQuart", onAfter:function(anchor, settings) {  }} );
	$(".service-subpage").css("left", $(window).width()*2);
	$(".sub-service-subpage").css("left", $(window).width()*3);
});

$(window).resize(function() {
	positionElements();
	if(is_ipad()) {
		$windowWidth = 1000;
	} else {
		$windowWidth = $window.width();
	}
});

$(window).bind('scroll',function(e){
	//if(is_ipad() == false && $ie8 == false) toggleNavigation();
});

$(".service-box1").click(function() { openServicePage(1); });
$(".service-box2").click(function() { openServicePage(2); });
$(".service-box3").click(function() { openServicePage(3); });
$(".service-box4").click(function() { openServicePage(4); });
$(".service-box5").click(function() { openServicePage(5); });
$(".service-box6").click(function() { openServicePage(6); });
$(".service-box7").click(function() { openServicePage(7); });
$(".service-box8").click(function() { openServicePage(8); });
$(".service-box9").click(function() { openServicePage(9); });
$(".service-box10").click(function() { openServicePage(10); });
$(".service-box11").click(function() { openServicePage(11); });
$(".service-box12").click(function() { openServicePage(12); });
$(".service-box13").click(function() { openServicePage(13); });
$(".service-box14").click(function() { openServicePage(14); });
$(".service-box15").click(function() { openServicePage(15); });
$(".service-box16").click(function() { openServicePage(16); });
$(".sub-service-box"+17).click(function() { openServicePageSub(17); });
$(".sub-service-box"+18).click(function() { openServicePageSub(18); });
$(".sub-service-box"+20).click(function() { openServicePageSub(20); });
$(".sub-service-box"+38).click(function() { openServicePageSub(38); });
$(".sub-service-box"+39).click(function() { openServicePageSub(39); });
$(".sub-service-box"+40).click(function() { openServicePageSub(40); });
$(".sub-service-box"+41).click(function() { openServicePageSub(41); });
$(".sub-service-box"+43).click(function() { openServicePageSub(43); });
$(".sub-service-box"+44).click(function() { openServicePageSub(44); });
$(".sub-service-box"+45).click(function() { openServicePageSub(45); });
$(".sub-service-box"+46).click(function() { openServicePageSub(46); });
$(".sub-service-box"+47).click(function() { openServicePageSub(47); });
$(".sub-service-box"+48).click(function() { openServicePageSub(48); });
$(".sub-service-box"+49).click(function() { openServicePageSub(49); });
$(".sub-service-box"+50).click(function() { openServicePageSub(50); });
$(".sub-service-box"+51).click(function() { openServicePageSub(51); });
$(".sub-service-box"+52).click(function() { openServicePageSub(52); });
$(".sub-service-box"+53).click(function() { openServicePageSub(53); });
$(".sub-service-box"+54).click(function() { openServicePageSub(54); });
$(".sub-service-box"+55).click(function() { openServicePageSub(55); });
$(".sub-service-box"+56).click(function() { openServicePageSub(56); });
$(".sub-service-box"+57).click(function() { openServicePageSub(57); });
$(".sub-service-box"+58).click(function() { openServicePageSub(58); });
$(".sub-service-box"+59).click(function() { openServicePageSub(59); });
$(".sub-service-box"+60).click(function() { openServicePageSub(60); });
$(".sub-service-box"+61).click(function() { openServicePageSub(61); });
$(".sub-service-box"+62).click(function() { openServicePageSub(62); });
$(".sub-service-box"+67).click(function() { openServicePageSub(67); });
$(".sub-service-box"+68).click(function() { openServicePageSub(68); });
$(".sub-service-box"+69).click(function() { openServicePageSub(69); });
$(".sub-service-box"+70).click(function() { openServicePageSub(70); });
$(".sub-service-box"+98).click(function() { openServicePageSub(98); });
$(".sub-service-box"+99).click(function() { openServicePageSub(99); });
$(".sub-service-box"+100).click(function() { openServicePageSub(100); });
$(".sub-service-box"+101).click(function() { openServicePageSub(101); });
$(".sub-service-box"+102).click(function() { openServicePageSub(102); });
$(".sub-service-box"+103).click(function() { openServicePageSub(103); });
$(".sub-service-box"+104).click(function() { openServicePageSub(104); });
$(".sub-service-box"+105).click(function() { openServicePageSub(105); });
$(".sub-service-box"+106).click(function() { openServicePageSub(106); });
$(".sub-service-box"+107).click(function() { openServicePageSub(107); });
$(".sub-service-box"+108).click(function() { openServicePageSub(108); });
$(".sub-service-box"+109).click(function() { openServicePageSub(109); });
$(".sub-service-box"+110).click(function() { openServicePageSub(110); });
$(".sub-service-box"+111).click(function() { openServicePageSub(111); });



function openServicePage(index) {
	if(is_mobile() || $window.width() > 480) {
	
		//_gaq.push(['_trackEvent', 'Sivu', pages[index]]);
		_gaq.push(['_trackPageview', '/Työnäyte/' + pages[index]]);
		
		$isServiceOpen = true;
		toggleBackButton();
		
		for(var i = 16; i > 0; i--) {
			$(".service-box" + i).animate({left: -$windowWidth}, {queue: false, duration:700, easing:"easeInOutQuart"});
		}
		$(".service-subpage").css("left", $windowWidth);

		$(".service-subpage-content").css("opacity", 0).hide();
		
		$(".service-subpage" + index).show().css("opacity", 1);
		$.scrollTo($page3start, 800);
		$(".service-subpage").animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
	}
}

function openServicePageSub(index) {
	if(is_mobile() || $window.width() > 480) {
	
		//_gaq.push(['_trackEvent', 'Sivu', pages[index]]);
		_gaq.push(['_trackPageview', '/Työnäyte/' + pages[index]]);
		
		$isServiceOpenSub = true;
		toggleBackButton2();
		
		
			$(".service-subpage").animate({left: -$windowWidth}, {queue: false, duration:700, easing:"easeInOutQuart"});
		
		$(".sub-service-subpage").css("left", $windowWidth);

		$(".sub-service-subpage-content").css("opacity", 0).hide();
		
		$(".sub-service-subpage" + index).show().css("opacity", 1);
		$(".sub-service-subpage").animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
	}
}

$("#services-navigation li:nth-child(2)").click(function() { swapServicePage(1); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(3)").click(function() { swapServicePage(2); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(4)").click(function() { swapServicePage(3); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(5)").click(function() { swapServicePage(4); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(6)").click(function() { swapServicePage(5); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(7)").click(function() { swapServicePage(6); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(8)").click(function() { swapServicePage(7); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(9)").click(function() { swapServicePage(8); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(10)").click(function() { swapServicePage(9); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(11)").click(function() { swapServicePage(10); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(12)").click(function() { swapServicePage(11); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(13)").click(function() { swapServicePage(12); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(14)").click(function() { swapServicePage(13); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(15)").click(function() { swapServicePage(14); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(16)").click(function() { swapServicePage(15); $.scrollTo($page3start, 800); });
$("#services-navigation li:nth-child(17)").click(function() { swapServicePage(16); $.scrollTo($page3start, 800); });

function swapServicePage(i) {
	if($isServiceOpen == false) {
		//_gaq.push(['_trackEvent', 'Sivu', pages[i]]);
		_gaq.push(['_trackPageview', '/Työnäyte/' + pages[i]]);
		openServicePage(i);
	} else {
		$(".service-subpage-content").animate({opacity: 0}, {queue: false, duration:500, easing:"easeOutSine", complete:function(){ $(this).hide(); }});
		$(".service-subpage" + i).show().stop().animate({opacity: 1}, {queue: false, duration:500, easing:"easeOutSine"});
	}
}

$backButton.click(function() {
	toggleBackButton();
	$isServiceOpen = false;
	for(var i = 16; i > 0; i--) {
   		$(".service-box" + i).animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
  	}
  	$(".service-subpage").animate({left: $windowWidth}, {queue: false, duration:700, easing:"easeInOutQuart"});
	
	
});

$backButton2.click(function() {
	toggleBackButton2();
	$isServiceOpenSub = false;
	
   		$(".service-subpage").animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});

  	$(".sub-service-subpage").animate({left: $windowWidth}, {queue: false, duration:700, easing:"easeInOutQuart"});
	
	
});

$page1anchor.bind('inview', function (event, visible) {
	if (visible == true) {
		//_gaq.push(['_trackEvent', 'Sivu', 'Etusivu']);
		//_gaq.push(['_trackPageview', '/Etusivu']);
		resetNavigation(1);
	}
});

$page2anchor.bind('inview', function (event, visible) {
	if (visible == true) {
		//_gaq.push(['_trackEvent', 'Sivu', 'Kuinka olemme erilaisia']);
		//_gaq.push(['_trackPageview', '/Kuinka olemme erilaisia']);
		resetNavigation(2);
	}
});

$page3anchor.bind('inview', function (event, visible) {
	if (visible == true) {
		//_gaq.push(['_trackEvent', 'Sivu', 'Palvelut']);
		//_gaq.push(['_trackPageview', '/Palvelut']);
		resetNavigation(3);
	}
});

$page4anchor.bind('inview', function (event, visible) {
	if (visible == true) {
		//_gaq.push(['_trackEvent', 'Sivu', 'Työnäytteet']);
		//_gaq.push(['_trackPageview', '/Työnäytteet']);
		resetNavigation(4);
	}
});

$page5anchor.bind('inview', function (event, visible) {
	if (visible == true) {
		//_gaq.push(['_trackEvent', 'Sivu', 'Tietoa meistä']);
		//_gaq.push(['_trackPageview', '/Tietoa meistä']);
		resetNavigation(5);
	}
});

$page6anchor.bind('inview', function (event, visible) {
	if (visible == true) {
		//_gaq.push(['_trackEvent', 'Sivu', 'Yhteystiedot']);
		//_gaq.push(['_trackPageview', '/Yhteystiedot']);
		resetNavigation(6);
	}
});

function positionElements() {
	if(is_mobile() || $window.width() > 480) {
		$page1content.css("paddingTop", $page1.height()/2-60 + "px");
		$page2content.css("paddingTop", $page2.height()/2 - 180  + "px");
		$page3content.css("paddingTop", $page3.height()/2 - $page3content.height()/2 + "px");
		$page4content.css("paddingTop", $page4.height()/2 - $page4content.height()/2 + 30 + "px");
		$page5content.css("paddingTop", $page5.height()/2 - $page5content.height()/2 + "px");
		$page6content.css("paddingTop", $page6.height()*0.17 + "px");
		$case.css("top", $page4.offset().top + $page4.height()/2 + "px");
	} else {
		$(".contentwrapper").css("paddingTop", "35px");
		$page1content.css("paddingTop", "230px");
		$page2content.css("paddingTop", "65px");
	}
	
	// Make sure that service subpage won't peak when scaling browser
	if($isServiceOpen == true) {
		$(".service-box").css("left", -$windowWidth + "px");
		$(".service-subpage").css("left", 0);
	} else {
		$(".service-box").css("left", "0px");
		$(".service-subpage").css("left", -$windowWidth + "px");
	}
	
	if($isServiceOpenSub == true) {
		$(".service-subpage").css("left", -$windowWidth + "px");
		$(".sub-service-subpage").css("left", 0);
	} else {
		
		$(".sub-service-subpage").css("left", -$windowWidth + "px");
	}
}

function resetNavigation(currentPage) {
	$("nav li").removeClass("active");
	$('li:nth-child(' + currentPage + ')').addClass("active");
}	


$(".casethumb").hover(function() {
	$(this).find($('.thumboverlay')).stop().css({ opacity: 0.85 });
	$(this).find($('.zoom')).stop().css({ top: "70px", opacity: 0 });
	$(this).find($('.casename')).stop().css({ top: "150px", opacity: 0 });
	
	$(this).find($('.zoom')).stop().animate({top: "50px", opacity: 1}, {queue: false, duration:400, easing:"easeOutQuad"});
	$(this).find($('.casename')).stop().animate({top: "105px", opacity: 1}, {queue: false, duration:400, easing:"easeOutQuad"});
},function() {
	$(this).find($('.zoom')).stop().animate({top: "10px", opacity: 0}, {queue: false, duration:400, easing:"easeOutQuad"});
	$(this).find($('.casename')).stop().animate({top: "85px", opacity: 0}, {queue: false, duration:400, easing:"easeOutQuad"});
	$(this).find($('.thumboverlay')).stop().animate({opacity: 0}, {queue: false, duration:400, easing:"easeOutQuad"});
});


$(".service-box").hover(function() {
		if($isServiceOpen == false) {
			$(this).find($('li')).stop().css({ opacity: 0, paddingTop:15});
			$(this).find($('li')).each(function(index) {
				tweenTime = index * 50 + 300;
				delayTime = index * 250;
				$(this).delay(delayTime).stop().animate({opacity: 1, paddingTop:0}, {queue: false, duration:tweenTime, easing:"easeOutQuad"});
			});
			$(this).find($('.hover-arrow')).stop().css({ left: 130, opacity: 0});
			$(this).find($('.hover-arrow')).stop().animate({opacity: 1, left: 149}, {queue: false, duration:350, easing:"easeOutQuad"});
		}
	},function() {	
		$(this).find($('.hover-arrow')).stop().css({ left: 130, opacity: 0});
	});


$("#services-navigation li").hover(function() {
	serviceNavigationOverlay($(this).index(), "on");
}, function() {
	serviceNavigationOverlay($(this).index(), "off");
});

function toggleBackButton() {
	if($backButton.css("marginLeft") == "-90px") {
		$backButton.stop().delay(1100).animate({marginLeft:0}, {queue: true, duration:300, easing:"easeOutQuad"});
	} else {
		$backButton.stop().animate({marginLeft:-90}, {queue: false, duration:300, easing:"easeOutQuad"});
	}
}

function toggleBackButton2() {
	if($backButton2.css("marginLeft") == "-90px") {
		$backButton2.stop().delay(1100).animate({marginLeft:0}, {queue: true, duration:300, easing:"easeOutQuad"});
		$backButton.stop().animate({marginLeft:-90}, {queue: false, duration:300, easing:"easeOutQuad"});
	} else {
		$backButton2.stop().animate({marginLeft:-90}, {queue: false, duration:300, easing:"easeOutQuad"});
		$backButton.stop().delay(1100).animate({marginLeft:0}, {queue: true, duration:300, easing:"easeOutQuad"});
	}
}

function serviceNavigationOverlay(currentService, targetMode) {
	if(targetMode == "on") {
		$("#service-navigation-overlay .overlay-content .title").stop().animate({marginTop: 70, opacity: 0}, {queue: false, duration:400, easing:"easeOutQuart"});
		$("#service-navigation-overlay .overlay-content .description").stop().animate({marginTop: 70, opacity: 0}, {queue: false, duration:400, easing:"easeOutQuart"});
	
		$("#service-navigation-overlay").stop().animate({bottom: -22}, {queue: false, duration:400, easing:"easeOutQuart"});
		$("#service-navigation-overlay .overlay-content .title.service" + currentService).delay(200).animate({marginTop: 33, opacity: 1}, {queue: true, duration:400, easing:"easeOutQuart"});
		$("#service-navigation-overlay .overlay-content .description.service" + currentService).delay(200).animate({marginTop: 40, opacity: 1}, {queue: true, duration:400, easing:"easeOutQuart"});
	} else {
		$("#service-navigation-overlay").stop().delay(150).animate({bottom: -200}, {queue: true, duration:400, easing:"easeInQuad"});
		$("#service-navigation-overlay .overlay-content .title.service" + currentService).animate({marginTop: 70, opacity: 0}, {queue: false, duration:400, easing:"easeInQuad"});
		$("#service-navigation-overlay .overlay-content .description.service" + currentService).animate({marginTop: 70, opacity: 0}, {queue: false, duration:400, easing:"easeInQuad"});
	}
}

$casethumb.click(function() {
	//var targetId = $(this).attr('class').split(' ')[1];
	//openCase(targetId);
});

$caseOverlay.click(function() {
	closeCase();
});

function openCase(id) {
	//_gaq.push(['_trackEvent', 'Työnäyte', 'Työnäyte avattu', id]);
	_gaq.push(['_trackPageview', '/Työnäyte/' + id]);
	$case.show();
	$case.show().css("opacity", 0);
	$caseOverlay.show().css("opacity", 0);
	$case.stop().delay(200).animate({opacity: 1}, {queue: true, duration:500, easing:"easeOutQuad"});
	$caseOverlay.stop().animate({opacity: 0.8}, {queue: false, duration:500, easing:"easeOutQuad"});
	$caseiframe.attr('src', 'http://www.youtube.com/embed/' + id);
	//$case.html('<iframe width="640" height="360" src="http://www.youtube.com/embed/' + id + '" frameborder="1" allowfullscreen></iframe>');
}

function closeCase() {
	$caseiframe.attr('src', '');
	$case.stop().stop().animate({opacity: 0}, {queue: true, duration:500, easing:"easeOutQuad", complete:function() { $case.hide(); }});
	$caseOverlay.stop().delay(200).animate({opacity: 0}, {queue: true, duration:500, easing:"easeOutQuad", complete:function() { $caseOverlay.hide(); }});
}

function contactForm(mode) {
	if(mode == "hide") {
		$contactForm.stop().animate({opacity: 0}, {queue: false, duration:500, easing:"easeOutQuad", complete:function() { $contactForm.hide(); } });
		$contactFormOverlay.stop().delay(200).animate({opacity: 0}, {queue: true, duration:500, easing:"easeOutQuad", complete:function() { $contactFormOverlay.hide(); } });
	} else {
		_gaq.push(['_trackEvent', 'Yhteydenotto', 'Lomake avattu']);
		$contactForm.show().css("opacity", 0);
		$contactFormOverlay.show().css("opacity", 0);
		$contactForm.stop().delay(200).animate({opacity: 1}, {queue: true, duration:500, easing:"easeOutQuad"});
		$contactFormOverlay.stop().animate({opacity: 0.7}, {queue: false, duration:500, easing:"easeOutQuad"});
	}
}
	
$("#contactform").submit(function(event) {
		event.preventDefault(); 
		if($("#phone").val() != "" && $("#email").val() != "" && $("#message").val() != "") {
			$submitButton.stop().animate({opacity:0}, {queue: false, duration:300, easing:"easeOutQuad", complete:function() { $submitButton.hide(); }});
			$submitStatus.stop().delay(300).animate({opacity:1}, {queue: true, duration:300, easing:"easeOutQuad"});
			
			_gaq.push(['_trackEvent', 'Yhteydenotto', 'Lomake lähetetty']);
			
			$.post("sendMail.php", $("#contactform").serialize(), function(data) { 
				$contactFormContent.stop().animate({opacity:0}, {queue: false, duration:300, easing:"easeOutQuad"});
				$contactFormThanksContent.stop().delay(300).animate({opacity:1}, {queue: true, duration:300, easing:"easeOutQuad"});
			});
			
	} else {
		alert("Et täyttänyt kaikkia kenttiä. Yritä uudelleen.");
	}			
});
		
(function(){
 
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
 
    special.scrollstart = {
        setup: function() {
 
            var timer,
                handler =  function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.handle.apply(_self, _args);
                    }
 
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid1, handler);
 
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };
 
    special.scrollstop = {
        latency: 300,
        setup: function() {
 
            var timer,
                    handler = function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    }
 
                    timer = setTimeout( function(){
 
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.handle.apply(_self, _args);
 
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid2, handler);
 
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };
 
})();

$(window).bind('scrollstart', function(e){
	//toggleNavigation();
});
            
$(window).bind('scrollstop', function(e){
	//if(is_ipad() == false && $ie8 == false) toggleNavigation();
});
	
function toggleNavigation() {
	if(is_mobile() || $window.width() > 480) {
		if($window.scrollTop()>100) {
			if($isAnimationBusy == false)
			{
				$isAnimationBusy = true;
				$navBar.animate({height: "54px"},{queue: false, duration:300, easing:"easeOutQuad", complete:function() { $isAnimationBusy = false; } });
				$logo.animate({top: "0px"},{queue: false, duration:300, easing:"easeOutQuad"});
			}
		} else {
			if($isAnimationBusy == false)
			{
				$isAnimationBusy = true;
				$navBar.animate({height: "0px"},{queue: false, duration:300, easing:"easeInQuad", complete:function() { $isAnimationBusy = false; }});
				$logo.animate({top: "50px"},{queue: false, duration:300, easing:"easeInQuad"});
			}
		}
	}
}

function smallPopup(url) {
	window.open(url,'sharer','toolbar=0,status=0,width=626,height=436');
}

function is_mobile() {
    var agents = ['android', 'webos', 'iphone', 'blackberry'];
    for(i in agents) {
        if(navigator.userAgent.match('/'+agents[i]+'/i')) {
            return true;
        }
    }
    return false;
}

function is_ipad(){
    return (
        (navigator.platform.indexOf("iPad") != -1)
    );
}


