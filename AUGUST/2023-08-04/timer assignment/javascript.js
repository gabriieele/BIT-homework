let interval
const timer = document.getElementById('timer')
const iputValue = document.getElementById('minutes')
let time = 0
let timerRunning = false
function run(e) {
  if (!timerRunning) {
    if (time === 0) {
      time = iputValue.value * 60
    }
    timerRunning = true
    interval = setInterval(() => {
      let minutes = Math.floor(time / 60)
      let seconds = time % 60
      let newTime = `${minutes}m:${seconds.toString().padStart(2, '0')}s`
      timer.innerHTML = newTime
      time--

      if (time < 0) {
        clearInterval(interval)
        timerRunning = false
        //document.querySelector('.timer').innerHTML = `Time is over`
        e.target.textContent = 'Start'
        e.target.style.backgroundColor = 'rgb(185, 185, 185)'
      }
    }, 1000)
    timerRunning = true
    e.target.textContent = 'Pause'
    e.target.style.backgroundColor = 'rgb(235, 235, 235'
  } else {
    clearInterval(interval)
    e.target.textContent = 'Start'
    e.target.style.backgroundColor = 'rgb(185, 185, 185)'
    timerRunning = false
  }
}

document.querySelector('.startBtn').onclick = run

function reset() {
  clearInterval(interval)
  timerRunning = false
  document.querySelector('.startBtn').textContent = 'Start'
  document.querySelector('.startBtn').style.backgroundColor = 'rgb(185, 185, 185)'
  timer.innerHTML =
    '<label for="minutes">Minutes:</label>  <input type="number" id="minutes" min="0" value="0" />'
}

document.querySelector('.resetBtn').onclick = reset
