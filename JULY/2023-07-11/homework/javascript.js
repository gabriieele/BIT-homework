function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//1uzd Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
let string = 'Once upon a time in hollywood'
string = string.toLowerCase().replaceAll('o', '*')
console.log(string)

//2uzd Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
let count = 0
let count1 = 0
let count2 = 0
let x = rand(0, 2)
let y = rand(0, 2)
let z = rand(0, 2)
let q = rand(0, 2)
console.log(
  `Atsiktinis skaičius yra ${x}, atsiktinis skaičius yra ${y}, atsiktinis skaičius yra ${z}, atsiktinis skaičius yra ${q} `
)

if (x === 0) {
  ++count
} else if (x === 1) {
  ++count1
} else if (x === 2) {
  ++count2
}

if (y === 0) {
  ++count
} else if (y === 1) {
  ++count1
} else if (y === 2) {
  ++count2
}
if (z === 0) {
  ++count
} else if (z === 1) {
  ++count1
} else if (z === 2) {
  ++count2
}
if (q === 0) {
  ++count
} else if (q === 1) {
  ++count1
} else if (q === 2) {
  ++count2
}

console.log(`Is viso nuliu: ${count}, is viso vienetu: ${count1}, is viso dvejetu ${count2}`)

//3uzd Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let firstNumber = rand(0, 4)
let secondNumber = rand(0, 4)

if (firstNumber > secondNumber) {
  console.log(`Didesne reiksme yra pirmas skaicius: ${(firstNumber / secondNumber).toFixed(2)}`)
} else if (firstNumber === secondNumber) {
  console.log('Rezultatas lygus')
} else if (firstNumber < secondNumber) {
  console.log(`Didesne reiksme yra antras skaicius: ${(secondNumber / firstNumber).toFixed(2)}`)
}

//4uzd Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

let first = rand(0, 25)
console.log(first)

let second = rand(0, 25)
console.log(second)

let third = rand(0, 25)
console.log(third)

let minNumber = Math.min(first, second, third)
let maxNumber = Math.max(first, second, third)

if (first !== minNumber && first !== maxNumber) {
  console.log(`Vidurinis skaičius: ${first}`)
} else if (second !== minNumber && second !== maxNumber) {
  console.log(`Vidurinis skaičius: ${second}`)
} else {
  console.log(`Vidurinis skaičius: ${third}`)
}

// if ((second <= first && first <= third) || (second >= first && first >= third)) {
//   console.log(first)
// } else if ((first <= second && second <= third) || (first >= second && second >= third)) {
//   console.log(second)
// } else if ((first <= third && third <= second) || (first >= third && third >= second)) {
//   console.log(third)
// }

//5uzd Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let name = 'Matthew'
let lastname = 'McConaughey'
let combine = name[0] + lastname[0]
console.log(combine)

//6uzd Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
let characters = 'abcdefghijklmnopqrstuvwxyz'
firstLetter = rand(0, characters.length - 1)
secondLetter = rand(0, characters.length - 1)
thirdLetter = rand(0, characters.length - 1)
console.log(
  `Atsitiktinis string'as: ${
    characters[firstLetter] + characters[secondLetter] + characters[thirdLetter]
  }`
)
