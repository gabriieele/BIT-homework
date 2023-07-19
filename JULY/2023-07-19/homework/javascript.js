// 1 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const letters = ['A', 'B', 'C', 'D']
const arrayLength = 200
const lettersArray = []
count = 0
count1 = 0
count2 = 0
count3 = 0

for (let i = 0; i < arrayLength; i++) {
  const index = rand(0, 3)
  lettersArray.push(letters[index])
  if (letters[index] === 'A') {
    count++
  }
  if (letters[index] === 'B') {
    count1++
  }
  if (letters[index] === 'C') {
    count2++
  }
  if (letters[index] === 'D') {
    count3++
  }
}

document.write('<h2>Atsitiktinių raidžių masyvas: </h2>', lettersArray)
console.log('A raidžių yra: ', count)
document.write(`<p>A raidžių yra: ${count}</p>`)
console.log('B raidžių yra: ', count1)
document.write(`<p>B raidžių yra: ${count1}</p>`)
console.log('C raidžių yra: ', count2)
document.write(`<p>C raidžių yra: ${count2}</p>`)
console.log('D raidžių yra: ', count3)
document.write(`<p>D raidžių yra: ${count3}</p>`)

// 2 Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
document.write(`<h2>Išrūšiuotas masyvas pagal abėcėlę: </h2> ${lettersArray.sort()}`)
console.log(lettersArray.sort())

// 3 Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami reiksmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
document.write(`<h2>Trys nauji sudėti masyvai: </h2>`)
function threeArrays() {
  const arr = []
  for (let i = 0; i < 200; i++) {
    const index = rand(0, 3)
    arr.push(letters[index])
  }
  return arr
}
const arrayOne = threeArrays()
const arrayTwo = threeArrays()
const arrayThree = threeArrays()
const arrayFour = []

let letterCounter = 0
let combinationCounter = 0
for (let i = 0; i < arrayOne.length; i++) {
  arrayFour.push(arrayOne[i] + arrayTwo[i] + arrayThree[i])
  if (
    arrayOne[i] !== arrayTwo[i] &&
    arrayOne[i] !== arrayThree[i] &&
    arrayTwo[i] !== arrayThree[i]
  ) {
    letterCounter++
  }
  if (!arrayFour.includes(arrayFour[i])) {
    combinationCounter++
  }
}
console.log('Naujas array ', arrayFour)
document.write(`<br>Naujas masyvas sudėtas iš trijų kitų: ${arrayFour}`)
console.log('Unikalių reikšmių yra: ', letterCounter)
document.write(`<br>Unikalių reikšmių yra: ${letterCounter}`)
console.log('Unikalių kombinacijų yra: ', combinationCounter)
document.write(`<br>Unikalių kombinacijų yra: ${combinationCounter}`)

// 4 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

document.write('<h2>Unikalių reikšmių masyvai su atsitiktinėmis reikšmėmis</h2>')
function uniqueNumbers(length, min, max) {
  const array = []
  while (array.length < length) {
    const randNumber = rand(min, max)
    if (!array.includes(randNumber)) {
      array.push(randNumber)
    }
  }
  return array
}
const firstArray = uniqueNumbers(100, 100, 999)
const secondArray = uniqueNumbers(100, 100, 999)

document.write('<h2>Unikalių reikšmių masyvai</h2>')
document.write(`Pirmas masyvas: ${firstArray}`)
console.log(firstArray)
document.write(`<br>Antras masyvas: ${secondArray}`)
console.log(secondArray)

// 5 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
document.write('<h2>Naujas masyvas sudarytas iš pirmojo masyvo reikšmių, kurių nėra antrajame</h2>')
const arr = []
for (let i = 0; i < firstArray.length; i++) {
  //   if (secondArray.indexOf(firstArray[i]) === -1) {
  //     arr.push(firstArray[i])
  //   }
  if (!secondArray.includes(firstArray[i])) arr.push(firstArray[i])
}
console.log(arr)
document.write(`<br>Masyvas, kurio reikšmės yra pirmame masyve, bet nėra antrame: ${arr}`)
// 6 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
document.write('<h2>Naujas masyvas sudarytas iš pirmojo ir antrojo masyvo reikšmių</h2>')
const arr1 = []
for (let i = 0; i < firstArray.length; i++) {
  if (secondArray.includes(firstArray[i])) {
    arr1.push(firstArray[i])
  }
}
console.log(arr1)
document.write(`<br>Masyvas, kurio reikšmės yra ir pirmame ir antrame masyvuose: ${arr1}`)
// 7 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
