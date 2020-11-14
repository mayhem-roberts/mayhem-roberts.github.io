function fiveTimes() {
    //input- message as a string
    let message = "";
    let answer;
    //processing- i start as 1 and add 1 up to 12
    for (let i = 1; i <= 12; i++) {
      answer= 5 * i;
      message += "5 x " + i + "=" + answer + "<br>";
    }
    //output- display string 5x1=5 and so on till 5x12=60
    document.getElementById("output").innerHTML = message;
  }