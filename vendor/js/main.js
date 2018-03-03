$('[data-drop]').each(function(index) {
	$(this).click(function(e) {
		e.preventDefault();
		var pre_index = index;
		$(this).toggleClass('dropdown');

		$('[data-drop]').each(function(index) {
			if(pre_index != index)
				$(this).removeClass('dropdown');
		});
	});
});