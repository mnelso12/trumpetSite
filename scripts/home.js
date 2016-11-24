jQuery(document).ready(function($){
	console.log(
	"Tiny bubbles, in my beer. It makes me happy, it makes me feel queer. Tiny bubbles, makes me warm all over. With the feeling that I'm gonna love you 'til the end of time ('til the end of time). So here's to golden boats and here's to silver seas, but most of all a toast to you and me (to you and me!). Tiny bubbles, in my wine. It makes me happy, it makes me feel fine. Tiny bubbles, make me warm all over. With the feeling that I'm gonna love you 'til the end of time ('til the end of time). So here's to golden boats, and here's to silver seas, but most of all a toast to you and me (to you and me!)."
	);

	// default is players
	$("#funInfo").hide();
	$("#seeUsInfo").hide();
	$("#statsInfo").hide();
	$("#playersInfo").show();
	$("#playersDot").css('opacity', '.9');
	$("#statsDot").css('opacity', '.4');
	$("#funDot").css('opacity', '.4');
	$("#traditionDot").css('opacity', '.4');
	$("#seeUsDot").css('opacity', '.4');

	// hover handlers
	$("#playersDot").hover(function(){
		console.log('players hoveringggg');	
		$("#statsInfo").hide();
		$("#funInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#playersInfo").show();
		$("#playersDot").css('opacity', '.9');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#statsDot").hover(function(){
		console.log("stats hovered");
		$("#playersInfo").hide();
		$("#funInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#statsInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.9');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#funDot").hover(function(){
		console.log("fun hovered");
		$("#playersInfo").hide();
		$("#statsInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#funInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.9');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#traditionDot").hover(function(){
		console.log("fun hovered");
		$("#playersInfo").hide();
		$("#statsInfo").hide();
		$("#seeUsInfo").hide();
		$("#funInfo").hide();
		$("#traditionInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.9');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#seeUsDot").hover(function(){
		console.log("see us hovered");
		$("#playersInfo").hide();
		$("#funInfo").hide();
		$("#statsInfo").hide();
		$("#traditionInfo").hide();
		$("#seeUsInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.9');
	});
	
	$("#playersCell").hover(function(){
		console.log('players hoveringggg');	
		$("#statsInfo").hide();
		$("#funInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#playersInfo").show();
		$("#playersDot").css('opacity', '.9');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#statsCell").hover(function(){
		console.log("stats hovered");
		$("#playersInfo").hide();
		$("#funInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#statsInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.9');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#funCell").hover(function(){
		console.log("fun hovered");
		$("#playersInfo").hide();
		$("#statsInfo").hide();
		$("#seeUsInfo").hide();
		$("#traditionInfo").hide();
		$("#funInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.9');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#traditionCell").hover(function(){
		console.log("fun hovered");
		$("#playersInfo").hide();
		$("#statsInfo").hide();
		$("#seeUsInfo").hide();
		$("#funInfo").hide();
		$("#traditionInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.9');
		$("#seeUsDot").css('opacity', '.4');
	});
	
	$("#seeUsCell").hover(function(){
		console.log("see us hovered");
		$("#playersInfo").hide();
		$("#funInfo").hide();
		$("#statsInfo").hide();
		$("#traditionInfo").hide();
		$("#seeUsInfo").show();
		$("#playersDot").css('opacity', '.4');
		$("#statsDot").css('opacity', '.4');
		$("#funDot").css('opacity', '.4');
		$("#traditionDot").css('opacity', '.4');
		$("#seeUsDot").css('opacity', '.9');
	});
	
	
	// click handlers
	$("#homePlayersButton").click(function(){
		console.log("players clicked");
	});
	
	$("#homeStatsButton").click(function(){
		console.log("stats clicked");
	});
	
	$("#homeFunButton").click(function(){
		console.log("fun clicked");
	});
	
	$("#homeSeeUsButton").click(function(){
		console.log("see us clicked");
	});
});


