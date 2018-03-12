$('.dday .content-title>ul>li').each(function(index) {
	$(this).click(function(e) {
		e.preventDefault();
		var pre_index = index;

		$('.dday .content-title>ul>li').each(function() {
			$(this).removeClass('active');
		});
		$(this).addClass('active');

		$('.dday .list-title').each(function(index) {
			if(pre_index == index) $(this).addClass('active');
			else $(this).removeClass('active');
		});
	});
});

$('.notice .content-title>ul>li').each(function(index) {
	$(this).click(function(e) {
		e.preventDefault();
		var pre_index = index;

		$('.notice .content-title>ul>li').each(function() {
			$(this).removeClass('active');
		});
		$(this).addClass('active');

		$('.notice .list-title').each(function(index) {
			if(pre_index == index) $(this).addClass('active');
			else $(this).removeClass('active');
		});
	});
});