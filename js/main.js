$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() >= $(window).height())
			$('.header').addClass('on');	//scrollTop > headerTop
		else 
			$('.header').removeClass('on');	//scrollTop < headerTop

		$('[highlight_ani]').each(function() {
			var objectBottom = $(this).offset().top+ $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + ($(window).height() * 0.95);

			if(windowBottom > objectBottom)
				$(this).addClass('on');
		});

		$('[timeline]').each(function() {
			var objectBottom = $(this).offset().top+ $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + ($(window).height() * 0.95);

			if(windowBottom > objectBottom)
				$(this).addClass('on');
		});

		$('[slide]').each(function() {
			var objectBottom = $(this).offset().top+ $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + ($(window).height());

			if(windowBottom > objectBottom)
				$(this).addClass('slide');
		});

	});

	$('#nav_home').click(function() {
		var nav_top = $('#home').offset().top;
		$('html, body').animate({scrollTop: nav_top}, 400);
		return false;
	});

	$('#nav_about').click(function() {
		var nav_top = $('#about').offset().top;
		$('html, body').animate({scrollTop: nav_top}, 400);
		return false;
	});

	$('a.skills, #nav_skills').click(function() {
		$('.skills_popup').addClass('on');
		TweenLite.to($('.skills_popup, .skills_table'),.5,{opacity:1});
	});

	$('#nav_work').click(function() {
		var nav_top = $('#work').offset().top;
		$('html, body').animate({scrollTop: nav_top}, 400);
		return false;
	});

	$('#nav_timeline').click(function() {
		var nav_top = $('#timeline').offset().top;
		$('html, body').animate({scrollTop: nav_top}, 400);
		return false;
	});

	$('.skills_popup, .skills_table .exit').click(function() {
		TweenLite.to($('.skills_popup, .skills_table'),.5,{opacity:0, onComplete:removeFunction});
		function removeFunction() {$('.skills_popup').removeClass('on');}
	});
});