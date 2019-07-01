$ (document).ready(function(){
//  this is the hamburger
$(".hamburger").click(function(){
  $(".hamburger").toggleClass('active');
   $(".mobile-toggleable").toggleClass("offtheright");
});
// This is for the FAQ section
var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt > a').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt > a').removeClass('open');
  $(this).not(".closing").addClass('open').parent().next().slideDown();
    $('.accordion > dt > a').removeClass('closing');

    return false;
	});
// ready for the next thing


});
