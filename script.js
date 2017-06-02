$(document).ready(function(){

	// function randomPoke(){
	// 	var randomId = Math.floor(Math.random())
	// 	console.log(res);
	// 	$("#info").html("<img src='http://pokeapi.co/media/img/"+id+".png' /><h3>"+res.name+"</h3>");
	// 	$("#info").append("<h4>Types</h4><ul></ul>");
	// 	for (var j = 0; j < res.types.length; j++){
	// 		$("#info ul").append("<li>"+res.types[j].name+"</li>");
	// 	};
	// 	$("#info").append("<h4>Height</h4><p>"+res.height+"</p>");
	// 	$("#info").append("<h4>Weight</h4><p>"+res.weight+"</p>");
	// }

	var htmlStr = "";

	for(var i = 1; i <= 151; i++){

		htmlStr = "<img id='"+i+"' src='http://pokeapi.co/media/img/"+i+".png' alt='pokemon image'/>";
		$("#images").append(htmlStr);
	};

	$(document).on("click", "img", function(){
		var id = $(this).attr("id");
		var apiCall = "http://pokeapi.co/api/v1/pokemon/"+id+"/";
		// console.log(id);
		$.get(apiCall, function(res){
			console.log(res);
			$("#info").html("<img src='http://pokeapi.co/media/img/"+id+".png' /><h3>"+res.name+"</h3>");
			$("#info").append("<h4>Types</h4><ul></ul>");
			for (var j = 0; j < res.types.length; j++){
				$("#info ul").append("<li>"+res.types[j].name+"</li>");
			};
			$("#info").append("<h4>Height</h4><p>"+res.height+"</p>");
			$("#info").append("<h4>Weight</h4><p>"+res.weight+"</p>");
		}, 'json');

	$("button").click(randomPoke());

	});

});
