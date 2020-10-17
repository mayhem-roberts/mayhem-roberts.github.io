function poundsToKilograms() {
    //input
    let pounds = parseFloat(document.getElementById("pounds").value);
   //processing: multiply the number of pounds by formula k
   let output = pounds*0.45359237;
   //output: display 
   document.getElementById("output").innerHTML = output.toFixed(2) + " kilograms ";
}