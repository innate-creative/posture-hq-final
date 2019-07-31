$ (document).ready(function(){
//  this is the hamburger
$(".hamburger").click(function(){
  $(".hamburger").toggleClass('active');
  $(".mobile-nav").slideToggle();
  $(".navbar").toggleClass('activeburger');
   // $(".mobile-toggleable").toggleClass("offtheright");
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
  // Transition scroll bar

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
// 10 is the value of pixels in order to active this jq
    if (scroll <= 1) {
        $("header").removeClass("whitebg");
    } else {
        $("header").addClass("whitebg");
    }
});
// ready for the next thing

});
