$('html').click(function(e) {
	if(!$(e.target).hasClass('country') && !$(e.target).hasClass('city') && !$(e.target).hasClass('input-city')) {
		$('input[name="travcity"] ~ .citypicker').css('display', 'none');
		$('input[name="startcity"] ~ .citypicker').css('display', 'none');
	}
});

//포커스 입력 시 도시 선택 창 출력
$('input[name="travcity"]').focus(function() {
	$('input[name="travcity"] ~ .citypicker').css('display', 'block');
	$('input[name="startcity"] ~ .citypicker').css('display', 'none');
});
$('input[name="startcity"]').focus(function() {
	$('input[name="travcity"] ~ .citypicker').css('display', 'none');
	$('input[name="startcity"] ~ .citypicker').css('display', 'block');
});

//도시 선택 시 데이터 입력 및 창 제거
$('input[name="travcity"] ~ .citypicker > ul > li > ul > li').click(function() {
	$('input[name="travcity"]').val($(this).html());
	$('input[name="travcity"] ~ .citypicker').css('display', 'none');
});
$('input[name="startcity"] ~ .citypicker > ul > li > ul > li').click(function() {
	$('input[name="startcity"]').val($(this).html());
	$('input[name="startcity"] ~ .citypicker').css('display', 'none');
});