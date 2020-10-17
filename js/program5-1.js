function poundsToKilograms() {
    //input
    let pounds = parseFloat(document.getElementById("pounds").value);
   //processing
   let output = pounds*0.45359237;
   //output
   document.getElementById("output").innerHTML = output.toFixed(2) + " kilograms ";
}