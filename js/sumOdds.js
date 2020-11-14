function sumOdds() {
    //input
    let n = parseFloat(document.getElementById("n").value);
    let sum = 0;
    //processing
    for (let i=1; i<=n; i+=2){
      sum += i;
    }
    //output
    document.getElementById("output").innerHTML= "The sum is " + sum;
  }