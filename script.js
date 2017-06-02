$(document).ready(function(){

	var htmlStr = "";

	for(var i = 1; i <= 151; i++){

		htmlStr = "<img src='http://pokeapi.co/media/img/"+i+".png' alt='pokemon image'/>";
		$("#images").append(htmlStr);
	};

});
