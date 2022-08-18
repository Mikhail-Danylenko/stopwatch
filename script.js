const start = document.getElementById('start');
const stop = document.querySelector('.clock__button--stop');
const reset = document.querySelector('.clock__button--reset');

const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

let hour = 0;
let minute = 0;
let second = 0;

let interval;

start.addEventListener('click', function() {
  interval = setInterval(function() {
    if (second < 59) {
      second += 1;
      seconds.innerHTML = second < 10 ? '0' + second: second;
    } else {
      second = 0;
      seconds.innerHTML = second < 10 ? '0' + second: second;
      if (minute < 59) {
        minute += 1;
        minutes.innerHTML = minute < 10 ? '0' + minute : minute;
      } else {
        hour += 1;
        hours.innerHTML = hour < 10 ? '0' + hour: hour;
      }
    }
  }, 1000);
});

stop.addEventListener('click', function() {
  clearInterval(interval);
});

reset.addEventListener('click', function() {
  location.reload();
});
