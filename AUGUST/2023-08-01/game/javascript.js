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

  let isGoing = false
  let time = 30
  let interval

  function rand(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  //   player.addEventListener('click', function () {
  //     player.style.backgroundColor = 'blue'
  //   })

  //   const click = document.querySelector('.square').addEventListener('click', function () {
  //     player.style.backgroundColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`
  //     const newTop = rand(0, mainPart.innerHeight - player.clientHeight)
  //     const newLeft = rand(0, mainPart.innerWidth - player.clientWidth)

  //     // Set the new position of the player element
  //     player.style.position = 'absolute'
  //     player.style.top = `${newTop}px`
  //     player.style.left = `${newLeft}px`
  //   })

  if (!isGoing)
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
      if (time < 0) {
        clearInterval(interval)
      }
    }, 1000)
}
let points = 0
function pointsSum() {
  let rez = ''
  points++
  rez += points + ''
  console.log(`Taškai: ${rez}`)
  // Add your code here to perform actions when the button is clicked
}

// Add an event listener to the button
player = document.addEventListener('click', pointsSum)

document.querySelector('.btn').onclick = startGame

// Sukurkite žaidimą.
// Žaidimą žaidžia du žaidėjai: Player(Jūs) ir Kompiuteris.
// Žaidimą sudaro 10 raundų, vieno raundo trukmė 30 sekundžių.
// Raundą laimi tas žaidėjas kuris surenka daugiau taškų.
// Kiekvieno raundo pabaigoje atvaizduokite laimėtojo vardą, surinktus taškus raunde ir visus laimėtus roundus prie žaidėjų vardų.
