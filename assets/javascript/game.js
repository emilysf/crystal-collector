$(document).ready(function() {

var wins = 0;
var losses = 0;
var points = 0;
var randomNumber = Math.floor((Math.random() * 121) + 19);
var ruby = Math.floor((Math.random() * 13) + 1);
var sapphire = Math.floor((Math.random() * 13) + 1);
var emerald = Math.floor((Math.random() * 13) + 1);
var amethyst = Math.floor((Math.random() * 13) + 1);


$("#randomNumber").html("<h4>" + randomNumber + "</h4>");


//console.log(ruby, sapphire, emerald, amethyst);
$('#ruby').on('click', function() {
	$('#score').html(points + ruby);
	points += ruby;	
	winlose();
});

$('#sapphire').on('click', function() {
	$('#score').html(points + sapphire);
	points += sapphire;	
	winlose();
});

$('#emerald').on('click', function() {
	$('#score').html(points + emerald);
	points += emerald;	
	winlose();
});

$('#amethyst').on('click', function() {
	$('#score').html(points + amethyst);
	points += amethyst;	
	winlose();
});


var winlose = function() {
	if (points == randomNumber){
		wins++;
		$("#wins").html(wins);
		alert("You won!");
		restart();
	}
	else if(points > randomNumber){
		losses++;
		$("#losses").html(losses);
		alert("You lost.");
		restart();
	}
}	

var restart = function () {
    points = 0;
    $("#score").html("0");
    randomNumber = Math.floor((Math.random() * 121) + 19);
    $("#randomNumber").html("<h4>" + randomNumber + "</h4>");
    ruby = Math.floor((Math.random() * 13) + 1);
    sapphire = Math.floor((Math.random() * 13) + 1);
    emerald = Math.floor((Math.random() * 13) + 1);
    amethyst = Math.floor((Math.random() * 13) + 1);
}	

});
	

   

