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

		//Faz com que os links na navbar movam para as sections quando clicados 
		afterRender:function() {
			// var nav = "<ul class=\"nav\">";
			// var activeClass = "";
			// $(".panel").each(function(i) {
			// 	activeClass = "";
			// 	if(i===0) {
			// 		activeClass = "active";
			// 	}
			// 	nav += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name");
			// });
			$(".nav a").on("click",$.scrollify.move);
			
		},

	});
});