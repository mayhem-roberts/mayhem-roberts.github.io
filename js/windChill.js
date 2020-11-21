function doInputOutput() {
    //get value of temp and speed
    let tempF = parseFloat(document.getElementById("tempF").value);
    let speed = parseFloat(document.getElementById("speed").value);
    //call windChill function and store in windchill var
    let windchill = windChill(tempF, speed);
    //output windchill
    document.getElementById("output").innerHTML = windchill; 
  }
  function windChill(tempF, speed) {
    //The formula for computing the wind chill factor is    f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
    let t = tempF;
    let s = Math.pow(speed, .16);
    let message = "No Wind Chill";

    if (tempF < 50 && speed > 3) {
      f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
      f = Math.round(f);
      return f + "&deg F";
    }
    else {
      message;
      return message;
    }
  }