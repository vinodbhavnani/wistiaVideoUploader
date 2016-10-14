var getAllVideos = function(){
	$(".videos").empty();
	$.ajax({
	  method: "GET",
	  url: "https://api.wistia.com/v1/medias.json?api_password=df57d46a0e8b32656582dc77e9a98e2efb024a14c046be15f4316e4952849474"
	}).done(function( msg ) {
		console.log(msg);
		msg.forEach(function(item){
			var embedCode = item.embedCode;
			$(".videos").append(embedCode.replace(/width="960" height="540"/g, 'width="300" height="300"'));
		})
	});
};
$(document).ready(function(){
	getAllVideos();
});
