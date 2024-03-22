function add(){
	var num1 = parseInt(prompt("Enter first number here"))
	var num2 = parseInt(prompt("Enter second number here"))
	var answer = num1 + num2
	document.getElementById("num1").textContent= num1
	document.getElementById("num2").textContent= num2
	document.getElementById("ans").textContent= answer
}
function subtract(){
	var num1 = prompt("Enter first number here")
	var num2 = prompt("Enter second number here")
	var oman = num1 - num2
	document.getElementById("num1").textContent= num1
	document.getElementById("num2").textContent= num2
	document.getElementById("ans").textContent= oman
}
function divide(){
	var num1 = prompt("Enter first number here")
	var num2 = prompt("Enter second number here")
	var witty = num1 / num2
	document.getElementById("num1").textContent= num1
	document.getElementById("num2").textContent= num2
	document.getElementById("ans").textContent= witty
}
function multiply(){
	var num1 = prompt("Enter first number here")
	var num2 = prompt("Enter second number here")
	var swagg = num1 * num2
	document.getElementById("num1").textContent= num1
	document.getElementById("num2").textContent= num2
	document.getElementById("ans").textContent= swagg
}
function newv(){
	location.reload()
}
function testEqual(){
	var omosh= "yes, you got it."
	var ondi= "you missed it niggah"
	var omollo= "None of the above"
	var num1 = prompt("Enter your answer here")
	if (num1==1){
		return document.getElementById("love").textContent= omosh
	}	
	else if (num1==2){
		return document.getElementById("love").textContent= ondi
	}
	
	return document.getElementById("love").textContent= omollo
}
function countMe(){
	var num1 = parseInt(prompt("Enter your number here"))
	var num2 = num1 + 1
	var myArray = []
	for(i=0;i<num2;i++){
	myArray.push(i)}
	document.getElementById("count").textContent= myArray
}
/*function countMe(){
	var myArray = [9,10,11,12]
	var myTotal = 0
	for(var i=0;i<myArray.length;i++){
		myTotal+= myArray[i]
	}
	document.getElementById("count").textContent= myTotal
}*/


