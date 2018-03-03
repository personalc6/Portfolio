$('[data-content]').click(function() {
	var clsName = $(this).data('content');

	$('.attend-right .attend-data .attend-content div, .attend-right .attend-data .attend-title span').each(function() {
		$(this).removeClass('show');
	});
	$('#' + clsName).addClass('show');
	$('[data-content=' + clsName + ']').addClass('show');
});