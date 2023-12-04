let timer;
let timeLeft = 0;

function start() {
  if (timer) {
    clearInterval(timer);
  }
  timeLeft = document.getElementById('inputTime').value;
  timer = setInterval(updateClock, 1000);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  timeLeft = 0;
  document.getElementById('inputTime').value = '';
  document.getElementById('clock').innerHTML = '00:00:00';
}

function updateClock() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert('¡Tiempo agotado!');
  } else {
    timeLeft--;
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    const formattedTime = 
      (hours < 10 ? "0" + hours : hours) + ":" +
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById('clock').innerHTML = formattedTime;
  }
}