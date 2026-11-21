function Timer(deadLine, selector){

  function getTimeRemainning(endtime) {
    let days, hours, minutes, seconds;
    const time = Date.parse(endtime) - Date.now();

    if (time <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(time / (1000 * 60 * 60 * 24));
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((time / (1000 * 60)) % 60);
      seconds = Math.floor((time / 1000) % 60);
    }

    return {
      totalTime: time,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  function formatNumber(number) {
    if (number >= 0 && number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);

    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    function upDateClock() {
      const time = getTimeRemainning(endtime);

      days.textContent = formatNumber(time.days);
      hours.textContent = formatNumber(time.hours);
      minutes.textContent = formatNumber(time.minutes);
      seconds.textContent = formatNumber(time.seconds);

      if (time.totalTime <= 0) {
        clearInterval(timeInterval);
      }
    }

    upDateClock();

    const timeInterval = setInterval(upDateClock, 1000);
  }

  setClock(selector, deadLine);
}
export default Timer