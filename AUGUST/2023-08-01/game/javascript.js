// Žaidimo esmė:
// Puslapyje atvaizduojamas kvadratas(50px x 50px) kuris keičia savo atsitiktinę poziciją bei savo fono spalvą kas 1 sekundę.
// Jeigu žaidėjas spėja per šį laiko tarpą paspausti ant kvadrato - taškas skiriamas jam. Priešingu atveju laimi kompiuteris.
// Kiekviename rounde naršyklėje atvaizduokite laikmatį skaičiuojantį roundo trukmę.
// Pasibaigus žaidimui atvaizduokite laimėtojo vardą bei mygtuką, ant kurio paspaudus žaidimas būtų pradedamas iš naujo.

function startGame(e) {
  e.target.style = 'display:none'
  const player = document.querySelector('.square')

  player.style = 'display:block'
  document.querySelector('h1').style = 'display:none'
  const mainPart = document.querySelector('.bckgrnd')
  const pointsShow = document.querySelector('.computer')
  const winner = document.querySelector('.winner')
  const playerPointsPlace = document.querySelector('.player')
  let isGoing = false
  let time = 30
  let round = 1
  let computerRounds = 0
  let playerRounds = 0
  let interval
  let isClicked = false

  function rand(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function rounds() {
    isClicked = false
    pointsShow.innerHTML = `Computer Points: `
    playerPointsPlace.innerHTML = `Player Points: `
    if (round <= 10) {
      if (!isGoing) {
        interval = setInterval(() => {
          player.style.backgroundColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`
          const newTop = rand(0, mainPart.clientHeight - player.clientHeight)
          const newLeft = rand(0, mainPart.clientWidth - player.clientWidth)

          player.style.position = 'absolute'
          player.style.top = `${newTop}px`
          player.style.left = `${newLeft}px`
          let minutes = Math.floor(time / 60)
          let seconds = time % 60
          let newTime = `${minutes}:${seconds.toString().padStart(2, '0')}`
          const timer = document.getElementById('timer')
          timer.innerHTML = newTime
          time--

          if (!isClicked) {
            computerPoints++
            isClicked = false
            pointsShow.innerHTML = `Computer Points: ${computerPoints}`
          }

          if (time < 0) {
            clearInterval(interval)
            if (!isClicked) {
              if (computerPoints > points) {
                computerRounds++
                winner.innerHTML = `Computer won the round with ${computerPoints} points. Computer won ${computerRounds} rounds, you won ${playerRounds} rounds`
              } else if (points > computerPoints) {
                playerRounds++
                winner.innerHTML = `You won the round with ${points} points. You won ${playerRounds} rounds, computer won ${computerRounds} rounds`
              } else if (points === computerPoints) {
                playerRounds++
                computerRounds++
                winner.innerHTML = `It's a tie! You won ${playerRounds} rounds, computer won ${computerRounds} rounds`
              }
              points = 0
              computerPoints = 0
              time = 30
              round++
              rounds()
              if (round === 11) {
                if (playerRounds > computerRounds) {
                  winner.innerHTML += `<br>You won the game!`
                } else {
                  winner.innerHTML += `<br>Game over! Computer won`
                }
                e.target.style = 'display:block'
                player.style = 'display:none'
                document.querySelector('h1').style = 'display:block'
                winner.innerHTML = ''
              }
            }
          }
        }, 1000)
      }
    }
  }
  rounds()
}

let isClicked = false
let computerPoints = 0
let points = 0

function pointsSum() {
  if (!isClicked) {
    points++
    const playerPointsPlace = document.querySelector('.player')
    playerPointsPlace.innerHTML = `Your Points: ${points}`
    isClicked = true

    setTimeout(() => {
      isClicked = false
    }, 1000)
  }
}

document.querySelector('.btn').onclick = startGame
// Sukurkite žaidimą.
// Žaidimą žaidžia du žaidėjai: Player(Jūs) ir Kompiuteris.
// Žaidimą sudaro 10 raundų, vieno raundo trukmė 30 sekundžių.
// Raundą laimi tas žaidėjas kuris surenka daugiau taškų.
// Kiekvieno raundo pabaigoje atvaizduokite laimėtojo vardą, surinktus taškus raunde ir visus laimėtus roundus prie žaidėjų vardų.
