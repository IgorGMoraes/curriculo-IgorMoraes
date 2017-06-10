$(function(){
	$.scrollify({
		section: "section",
		scrollSpeed: 700,
		interstitialSection : "header, footer",
		setHeights:false, 
		before:function(i,sections) {

			var ref = sections[i].attr("data-section-name");

			$(".nav .active").removeClass("active");

			$(".nav").find("a[href=\"#" + ref + "\"]").addClass("active");
		},
	});
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	$.scrollify.disable();
}

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar");
	  var $scroll = $(".sobre")
	  $nav.toggleClass('navStyle', $(this).scrollTop() > $scroll.height());
	});
});