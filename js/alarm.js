function alarmCheck() {
    //input
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    //processing
    let message;

    if ((month == 0 && dayOfMonth == 1) || (month == 6 && dayOfMonth == 4) || (month == 11 && dayOfMonth == 25)){
      message = "Sleep in!";
    } else if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
      message = "Sleep in";
    } else {
      message = "Get up!";
    }
    //output
    document.getElementById("output").innerHTML = message;
  }