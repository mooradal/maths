var question = document.getElementById("question")
var input = document.getElementById("input")  
var select = document.getElementById("select")
var theme = document.getElementById("theme")
var body = document.getElementsByTagName("body")[0]
var html = document.getElementsByTagName("html")[0]
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
  } else if (select.value == "multiplication") {
  	Multiply()
  } else if (select.value == "division") {
  	Divide()
  }
  changeColour(theme.value)
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
 		correct.innerHTML = " "
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

function Multiply(){
	if (next == true) {
		createNum(15)

 		question.innerHTML = Num1 + " × " + Num2
 		next = false;
	}	

 if (enter == true) {
 	enter = false;
 	if (Num1 * Num2 == input.value) {
 		input.style.borderColor = "#00FF00"
 		correct.innerHTML = " "
 	} else {
 		input.style.borderColor = "#FF0000"
 		correct.innerHTML = Num1 * Num2
 	}
 	input.value = ""
 	next = true
 	}
}

function Divide(){
	if (next == true) {
		createNum(15)

 		question.innerHTML = Num1 + " ÷ " + Num2
 		next = false;
	}	

 if (enter == true) {
 	enter = false;
 	if (Num1 / Num2 == input.value) {
 		input.style.borderColor = "#00FF00"
 		correct.innerHTML = " "
 	} else {
 		input.style.borderColor = "#FF0000"
 		correct.innerHTML = Num1 / Num2
 	}
 	input.value = ""
 	next = true
 	}
}

function changeColour(value) {
	if (value == "blue") {
		change("#001132","#0558ff")
	} else if (value == "orange") {
		change("#110300","#FF5421")
	} else if (value == "white") {
		change("#111111","#FFFFFF")
	} else if (value == "green") {
		change("#00140A","#00F275")
	}
}

function change(primary, secondary) {
		body.style.background = primary
		html.style.background = primary
		input.style.borderColor = secondary
		select.style.borderColor = secondary
		select.style.background = primary
		theme.style.borderColor = secondary
		theme.style.background = primary
		question.style.color = secondary
}

document.onkeyup = function(event) {
  key_up = event.keyCode;
  if (key_up == 13) {
  enter = true
  }
};
