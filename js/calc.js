function checkAnswer() {
    //input
    let num1 = parseFloat(document.getElementById('num1').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    let answer = parseFloat(document.getElementById('answer').value);
    //processing
    let message;
    let total;

    switch (operator){
      case 'add':
        total = (num1 + num2);
        if (answer == total){
          message = "Correct!"
        } else {
          message = "Incorrect"
        }
        break
      case 'sub':
      total = (num1 - num2);
        if (answer == total){
          message = "Correct!"
        } else {
          message = "Incorrect"
        }
        break 
      case 'mul': 
      total = (num1 * num2);
        if (answer == total){
          message = "Correct!"
        } else {
          message = "Incorrect"
        }
        break 
      case 'div': 
      total = (num1 / num2);
        if (answer == total){
          message = "Correct!"
        } else {
          message = "Incorrect"
        }
    }
    //output
    document.getElementById('output').innerHTML = message + "";
  
  }