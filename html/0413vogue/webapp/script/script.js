$(function(){
$('.language').click(function(){
$(this).toggleClass('arrow-down');
$(this).next('ul').fadeToggle();
});


});