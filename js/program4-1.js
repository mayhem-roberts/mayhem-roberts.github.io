function addNumbers() {
	//INPUT - two numbers are submitted, x and y
	 let number1 = parseFloat(document.getElementById('number1').value);
	 let number2 = parseFloat(document.getElementById('number2').value);
	 //PROCESSING - parseFloat converts the string imput into numbers. Adds the twon numbers and stores the sum in the output variable
   let sum = number1 + number2;
  //OUTPUT 
  document.getElementById("sum").innerHTML = "The sum of " + number1 + " and " + number2 + " <strong>is</strong> " + sum;
}