function doPayment() {
    let principal = parseFloat(document.getElementById("num1").value);
    let annualRate = parseFloat(document.getElementById("num2").value);
    let years = parseFloat(document.getElementById("num3").value);
    let periodsPerYear = parseFloat(document.getElementById("num4").value);
    
    let computePay = computePayment(principal, annualRate, years, periodsPerYear);

    document.getElementById("output1").innerHTML = "$" + computePay.toFixed(2);
  }
  function doBalance() {
    let principal = parseFloat(document.getElementById("num1").value);
    let annualRate = parseFloat(document.getElementById("num2").value);
    let years = parseFloat(document.getElementById("num3").value);
    let periodsPerYear = parseFloat(document.getElementById("num4").value);
    let numberOfPaymentPaidToDate = parseFloat(document.getElementById("num5").value);

    let computeBal = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate);

    document.getElementById("output2").innerHTML = "$" + computeBal.toFixed(2);
  }
  function computePayment(principal, annualRate, years, periodsPerYear) {
    let a = principal;
    let r = annualRate/periodsPerYear;
    let n = periodsPerYear*years;
     
    p = (a*r)/(1-(Math.pow(1+r,-n)));
    
    return p;
  }
  function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    let p = computePayment(principal, annualRate, years, periodsPerYear);
    let a = principal;
    let r = annualRate/periodsPerYear;
    let n = periodsPerYear*years;
    let d = numberOfPaymentPaidToDate;

    b = (a*(Math.pow(1+r,d))) - (p*((Math.pow(1+r,d)-1))) / r;

    return b; 
  }