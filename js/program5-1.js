function poundsToKilograms() {
    //input
    let pounds = parseFloat(document.getElementById("pounds").value);
   //processing: multiply input number of pounds by kilograms
   let output = pounds*0.45359237;
   //output
   document.getElementById("output").innerHTML = output.toFixed(1) + " kilograms ";
}