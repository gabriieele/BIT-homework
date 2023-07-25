// Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const arr = []
for (i = 0; i < 10; i++) {
  arr[i] = []
  for (j = 0; j < 5; j++) {
    arr[i].push(rand(5, 25))
  }
}
console.log(arr)

// Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra elementų didesnių už 10;
let counter = 0
for (const child of arr) {
  for (const val of child) {
    if (val > 10) {
      counter++
    }
  }
}
console.log('Reikšmių didesnių už 10: ', counter)

// Raskite didžiausio elemento reikšmę;

let max = 0
for (const child of arr) {
  for (const val of child) {
    if (val > max) {
      max = val
    }
  }
}
console.log('Didžiausia reikšmė: ', max)

// Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)
let sumArray = []

for (let i = 0; i < arr[0].length; i++) {
  let sum = 0
  for (let j = 0; j < arr.length; j++) {
    if (j === j) {
      sum += arr[j][i]
    }
  }

  sumArray.push(sum)
  console.log(`Indekso ${i} reikšmių suma lygi: ${sum}`)
}

// Visus antro lygio masyvus “pailginkite” iki 7 elementų

const newArr = arr.map(smallerArr => {
  while (smallerArr.length < 7) {
    smallerArr.push(rand(5, 25))
  }
  return smallerArr
})

console.log('Prailgintas masyvas: ', newArr)

// Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).
const array = []
const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

for (let i = 0; i < 10; i++) {
  let length = rand(2, 20)
  array[i] = []
  for (let j = 0; j < length; j++) {
    let alph = rand(0, 25)
    array[i].push(letters[alph])
  }
  array[i].sort()

  //Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje.
  array.sort((a, b) => a.length - b.length)
}

console.log('Išrūšiuotas atsitiktinių raidžių masyvas: ', array)
//Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje
const arrK = array.filter(value => value.includes('K'))
const arrNoK = array.filter(value => !value.includes('K'))

const filteredArray = [...arrK, ...arrNoK]

console.log('Išrūšiuotas atsitiktinių raidžių masyvas su K raidėmis: ', filteredArray)
