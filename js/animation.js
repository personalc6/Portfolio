$(document).ready(function() {
	$(document).scroll(function(){
		if($(document).scrollTop() < ($(window).height() / 4)) {
			TweenLite.to($('.title'), 1, {className: '+=on'});
			setTimeout(function(){TweenLite.to($('.title'), 1, {className: '+=on1'});}, 500);
			setTimeout(function(){TweenLite.to($('.title'), 1, {className: '+=on2'});}, 1000);
			setTimeout(function(){TweenLite.to($('.title'), 1, {className: '+=on3'});}, 1500);
		}
	});
});