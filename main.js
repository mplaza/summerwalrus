$(document).ready(function(){
	var buttonClick = function(){
		$("#timeButton").css("border", "none");
		$("#timeButton").css("margin-left", "37px");
		$("#timeButton").css("margin-top", "7px");
	};
	var buttonUP= function(){
		$("#timeButton").css("border-right", "solid 2px #949494");
		$("#timeButton").css("border-bottom", "solid 2px #949494");
		$("#timeButton").css("margin-left", "35px");
		$("#timeButton").css("margin-top", "5px");
	};
	$("#timeButton").on("mousedown", buttonClick);
	$("#timeButton").on("mouseup", buttonUP);
	var skyColor = function(){
		$('body').css("background-color", "#938EC8");
		$('body').animate({"background-color": "#C1ECFA"}, 3000);
		$("#summerSun").show();
		$("#summerSun").animate({top:"-40", left:'-40'}, 3000);
	};
	var summerAnimation = function(){
		skyColor();
		$("#sand").show();
		$("#ocean").show();
	};
	var walrusAnimation = function(){
		$("#walrusPic").addClass("Animate");
		for (var i=0; i<20; i++)
		{
			var walrusDelay = i*1000;
			if(i%2!==0){
				window.setTimeout(function(){$("#walrusPic").switchClass("Animate", "Reanimate", 1000);},walrusDelay);
			}
			else{
				window.setTimeout(function(){$("#walrusPic").switchClass("Reanimate", "Animate", 1000);},walrusDelay);
			};
		};
	};
	var penguinAnimation = function(){
		$("#penguinPic").css("bottom", "250");
		$("#penguinPic").css("right", "250");
		$("#penguinPic").css("width", "50px");
		for (var i=0; i<10; i++)
		{
			if(i%2!==0){
				$("#penguinPic").animate({bottom:"+=10", right:"-=6"}, 3000);
			}
			else{
				$("#penguinPic").animate({bottom:"-=10", right:"-=6"}, 3000);
			};
		};
		
	};
	var summerChanges = function(){
		summerAnimation();
		walrusAnimation();
		$("#snowStorm").hide();
		$("#iglooPic").hide();
		penguinAnimation();
	};
	var checkingTime = function(){
		var Guess = $("#timeGuess").val();
		if(Guess == "summertime"||
			Guess == "Summertime"||
			Guess == "summer"||
			Guess == "Summer"||
			Guess == "SUMMER"||
			Guess == "SUMMERTIME")
		{
		summerChanges();
		};
};
var focusFunction = function(){
	alert("sehw");
};
	$("#timeButton").on("click", checkingTime);
	$("#timeGuess").keypress(function(e){
	if(e.which==13){
		checkingTime();
		};
	});
	$("#timeGuess").focus(function(){
		alert("docus");
	});

});