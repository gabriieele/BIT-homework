let interval
let timerRunning = false
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')

function run(e) {
  if (!timerRunning) {
    let m = parseInt(min.value)
    let s = parseInt(sec.value)
    let time = m * 60 + s
    interval = setInterval(() => {
      let minutes = Math.floor(time / 60)
      let seconds = time % 60
      let newTime = `${minutes}m:${seconds.toString().padStart(2, '0')}s`
      const timer = document.getElementById('timer')
      timer.innerHTML = newTime
      time--
      if (time < 0) {
        clearInterval(interval)
        timerRunning = false
      }
    }, 1000)
    e.target.textContent = 'Pause'
    e.target.style.backgroundColor = 'rgb(235, 235, 235)'
    timerRunning = true
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
  let m = parseInt(min.value)
  let s = parseInt(sec.value)
  time = m * 60 + s
  const startBtn = document.querySelector('.startBtn')
  startBtn.textContent = 'Start'
  startBtn.style.backgroundColor = 'rgb(185, 185, 185)'
  const timer = document.getElementById('timer')
  timer.innerHTML =
    '<label for="minutes">Minutes:</label>  <input type="number" id="minutes" min="0" value="0" /> <label for="seconds">Seconds:</label>     <input type="number" id="seconds" min="0" value="0" />'
}

document.querySelector('.resetBtn').onclick = reset
