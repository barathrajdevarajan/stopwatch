// TIMER
window.onload = function () {
  let initialSeconds = 00;
  let initialTens = 00;

  // ASSIGNING BUTTONS

  const startBtn = document.querySelector('.start-btn');
  const stopBtn = document.querySelector('.stop-btn');
  const resetBtn = document.querySelector('.reset-btn');

  const tens = document.querySelector('.tens');
  const seconds = document.querySelector('.seconds');
  let timer;

  startBtn.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval(startTimer, 10);
  });

  stopBtn.addEventListener('click', function () {
    clearInterval(timer);
  });

  resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    initialSeconds = 00;
    initialTens = 00;
    tens.textContent = '00';
    seconds.textContent = '00';
  });

  function startTimer() {
    initialTens++;
    if (initialTens < 9) {
      tens.textContent = '0' + initialTens;
    }
    if (initialTens > 9) {
      tens.textContent = initialTens;
    }
    if (initialTens > 99) {
      initialSeconds++;
      seconds.textContent = '0' + initialSeconds;
      initialTens = 00;
      tens.textContent = initialTens;
    }
    if (initialSeconds > 9) {
      seconds.textContent = initialSeconds;
    }
  }
};
