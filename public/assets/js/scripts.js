$(document).ready(function(){
	/*============================================
	 Page Preloader
	 ==============================================*/

	$(window).load(function(){
		$('#page-loader').fadeOut(500);
	});

	/*============================================
	 Navigation Functions
	 ==============================================*/
	if ($(window).scrollTop()< 10){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()< 10){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');
		}
	});

	$('a.scrollto').click(function(e){
		e.preventDefault();
		var target =$(this).attr('href');
		$('html, body').stop().animate({scrollTop: $(target).offset().top}, 1700, 'easeInOutExpo',
			function(){window.location.hash =target;});

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});


	/*============================================
	 Placeholder Detection
	 ==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}

	/*============================================
	 Waypoints Animations
	 ==============================================*/
	$(window).load(function(){

		$('.scrollimation').waypoint(function(){
			$(this).addClass('in');
		},{offset:'95%'});

	});

});
