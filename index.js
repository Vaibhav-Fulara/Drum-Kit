var click = document.querySelectorAll(".drum");

// Detect MouseKey Presses and play
for (var i = click.length - 1; i >= 0; i--) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {
		var press = this.innerHTML;
		play(press);
		addAnimation(press);
	});
}

// Detect Keyboard Presses and play
document.addEventListener("keypress",function(event) {
	play(event.key);
	addAnimation(event.key);
});

function play (event) {
	switch(event){
		case("w"):
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
		break;
		case("a"):
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
		break;
		case("s"):
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
		break;
		case("d"):
			var kickBass = new Audio("sounds/kick-bass.mp3");
			kickBass.play();
		break;
		case("j"):
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
		break;
		case("k"):
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
		break;
		case("l"):
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
		break;
		default: console.log(event);
	}
}

function addAnimation(key) {
	var active = document.querySelector("." + key);
	active.classList.add("pressed");
	setTimeout(function(){
		active.classList.remove("pressed");
	}, 100);
}