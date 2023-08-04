let time = document.querySelector('input').value
let interval
let timerRunning = false

function run(e) {
  if (!timerRunning) {
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
  time = 600
  const startBtn = document.querySelector('.startBtn')
  startBtn.textContent = 'Start'
  startBtn.style.backgroundColor = 'rgb(185, 185, 185)'
  const timer = document.getElementById('timer')
  timer.innerHTML = '10m:00s'
}

document.querySelector('.resetBtn').onclick = reset
