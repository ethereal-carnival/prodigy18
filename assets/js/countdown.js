// Set the date we're counting down to
var countDownDate = new Date("Feb 1, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;
    var percent = (distance-5575755156/5575755156)*100;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.getElementById("timer").innerHTML = days + " " + hours + " "
  //+ minutes + " " + seconds + " ";
    document.getElementById("timer-days").innerHTML = days;
    document.getElementById("timer-hours").innerHTML = hours;
    document.getElementById("timer-minutes").innerHTML = minutes;
    document.getElementById("timer-seconds").innerHTML = seconds;
    document.getElementById("brand").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds + " ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's here!";
    document.getElementById("brand").innerHTML = "It's here!";
  }
}, 1000);
