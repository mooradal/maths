var question = document.getElementById("question")
var input = document.getElementById("input")  
var select = document.getElementById("select")
var enter = false;
var next = true;
var oldvalue = select.value
var correct = document.getElementById("correct");

main()
function main() {
  window.requestAnimationFrame(main)
  console.log(select.value)
  if (select.value != oldvalue) {
  	oldvalue = select.value
  	next = true
  }
  if (select.value == "addition") {
 	Add()
  } else if (select.value == "subtraction") {
  	Sub()
  }
}

function createNum(range) {
	Num1 = Math.floor(Math.random() * range)
 	Num2 = Math.floor(Math.random() * range)
}

function Add(){
	if (next == true) {
		createNum(100)

 		question.innerHTML = Num1 + " + " + Num2
 		next = false;
	}	
 if (enter == true) {
 	enter = false;
 	if (Num1 + Num2 == input.value) {
 		input.style.borderColor = "#00FF00"
 		correct.innerHTML = ""
 	} else {
 		input.style.borderColor = "#FF0000"
 		correct.innerHTML = Num1 + Num2
 	}
 	input.value = ""
 	next = true
 	}
}

function Sub(){
	if (next == true) {
		createNum(100)

 		question.innerHTML = Num1 + " - " + Num2
 		next = false;
	}	
 if (enter == true) {
 	enter = false;
 	if (Num1 - Num2 == input.value) {
 		input.style.borderColor = "#00FF00"
 		correct.innerHTML = ""
 	} else {
 		console.log(Num1 + " " + Num2)
 		input.style.borderColor = "#FF0000"
 		correct.innerHTML = Num1 - Num2
 	}
 	next = true
 	input.value = ""
 	}
}

document.onkeyup = function(event) {
  key_up = event.keyCode;
  if (key_up == 13) {
  enter = true
  }
};
