$(function($) {
	var tab = $('.black_bar'),
	offset = tab.offset();
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top) {
			tab.addClass('fixed');
		}
		else {
			tab.removeClass('fixed');
		}
	});
});