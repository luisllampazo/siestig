// JavaScript Document
$('.accordion-toggle').click(function(){
	$('.hiddenRow').hide();
//alert($(this).next('tr').text());
	$(this).next('tr').find('.hiddenRow').show();
});

