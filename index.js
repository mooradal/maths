var question = document.getElementById("question")
var input = document.getElementById("input")  
var enter = false;
var next = true;

main()
function main() {
  window.requestAnimationFrame(main)
  Add()
}

function Add(){
	if (next == true) {
 		 Num1 = Math.floor(Math.random() * 100)
 		 Num2 = Math.floor(Math.random() * 100)

 		question.innerHTML = Num1 + " + " + Num2
 		next = false;
	}	
 if (enter == true) {
 	enter = false;
 	if (Num1 + Num2 == input.value) {
 		console.log("right answer")
 		input.style.borderColor = "#00FF00"
 	} else {
 		console.log("Wrong answer")
 		input.style.borderColor = "#FF0000"

 	}
 	next = true
 	}
}

document.onkeyup = function(event) {
  key_up = event.keyCode;
  if (key_up == 13) {
  enter = true
  }
};
