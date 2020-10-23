function getShoes() {
    let shoes;
  //input
  let weather = document.getElementById("weather").value;
  //processing
  if (weather === "hot") {
      shoes = "sandals";
  } else if (weather === "rain") {
      shoes = "galoshes";
  } else if (weather === "snow") {
      shoes = "boots";
  } else if (weather === "unknown") {
      shoes = "shoes";
  }
  //output
  document.getElementById("shoes").innerHTML = " Wear your " + shoes + "!";
}