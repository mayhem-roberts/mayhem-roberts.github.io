function doFV() {
  let principal = parseFloat(document.getElementById("num1").value);
  let annualRate = parseFloat(document.getElementById("num2").value);
  let years = parseFloat(document.getElementById("num3").value);
  let periodsPerYear = parseFloat(document.getElementById("num4").value);

  let computeFV = computeFutureValue(principal, annualRate, years, periodsPerYear);

  document.getElementById("output").innerHTML = "$" + computeFV.toFixed(2); 
}
function computeFutureValue(principal, annualRate, years, periodsPerYear) {
  let a = principal;
  let r = periodsPerYear/annualRate;
  let n = periodsPerYear*years;

  f = a*(1 + r)**n;

  return f;

}
