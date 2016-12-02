jQuery(document).ready(function($){
	console.log(
	"Tiny bubbles, in my beer. It makes me happy, it makes me feel queer. Tiny bubbles, makes me warm all over. With the feeling that I'm gonna love you 'til the end of time ('til the end of time). So here's to golden boats and here's to silver seas, but most of all a toast to you and me (to you and me!). Tiny bubbles, in my wine. It makes me happy, it makes me feel fine. Tiny bubbles, make me warm all over. With the feeling that I'm gonna love you 'til the end of time ('til the end of time). So here's to golden boats, and here's to silver seas, but most of all a toast to you and me (to you and me!)."
	);

	// automatically udpate copyright date (is this illegal??)
	$("#year").text(new Date().getFullYear());

	$("#traditionD").on('click', function() {
		window.open('https://www.youtube.com/watch?v=mlCiDEXuxxA', '_blank');
	});

	$("#traditionR").on('click', function() {
		window.open('https://www.youtube.com/watch?v=9vd5X48svmg', '_blank');
	});

	$("#traditionO").on('click', function() {
		window.open('https://www.youtube.com/watch?v=clbD_eKC99w', '_blank');
	});

	$("#traditionT").on('click', function() {
		window.open('https://www.youtube.com/watch?v=nlbUoXSPx-8', '_blank');
	});

});


// TRUMPETS WEAR SHORTS // 

