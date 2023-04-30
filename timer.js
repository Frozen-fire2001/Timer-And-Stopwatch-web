var stopwatchInterval;
var stopwatchSeconds = 0;
var deadline = new Date("dec 31, 2023 15:37:25").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);


function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(function() {
    stopwatchSeconds++;
    var hours = Math.floor(stopwatchSeconds / 3600);
    var minutes = Math.floor((stopwatchSeconds - (hours * 3600)) / 60);
    var seconds = stopwatchSeconds - (hours * 3600) - (minutes * 60);
    document.getElementById("stopwatch").innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

function pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;

}
