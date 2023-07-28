// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const a = rand(1, 100)
const b = rand(1, 100)

console.log('1 užd')
console.log(a, b)
if (a > b) {
  console.log('A skaičius didesnis už B skaičių')
} else if (b > a) {
  console.log('B skaičius didesnis už A skaičių')
} else {
  console.log('Skaičiai lygūs')
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
let rez = ''
for (let i = 1; i <= 10; i++) {
  rez += i + ' '
}
console.log('2 užd')
console.log('Skaičiai nuo 1 iki 10: ', rez)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
rez = ''
for (let i = 0; i <= 5; i++) {
  rez += 2 * i + ' '
}
console.log('3 užd')
console.log('Išvesti 3 užduoties skaičiai: ', rez)

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
rez = ''
for (let i = 0; i < 5; i++) {
  rez += rand(1, 10) + ' '
}
console.log('4 užd')
console.log('Sugeneruoti 5 atsitiktiniai skaičiai: ', rez)

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
rez = ''
while (true) {
  let number = rand(1, 10)
  rez += number + ' '

  if (number === 5) {
    break
  }
}
console.log('5 užd')
console.log('Atspausdinti skaičiai, kurių paskutinis skaitmuo: ', rez)

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
let length = rand(20, 30)
let max = 0
const array = []
for (let i = 0; i < length; i++) {
  let randNumbers = rand(10, 30)
  array.push(randNumbers)
  if (max < array[i]) {
    max = array[i]
  }
}
console.log('6 užd')
console.log('Masyvas: ', array, ' ir jo didžiausia reikšmė: ', max)

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let arrLenght = 100
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
const alph = ['A', 'B', 'C', 'D']
const alphArr = []
for (let i = 0; i < arrLenght; i++) {
  const index = rand(0, 3)
  alphArr.push(alph[index])
  if (alph[index] === 'A') {
    count1++
  }
  if (alph[index] === 'B') {
    count2++
  }
  if (alph[index] === 'C') {
    count3++
  }
  if (alph[index] === 'D') {
    count4++
  }
}
console.log('7 užd')
console.log('Raidžių masyvas: ', alphArr)
console.log('A raidžių:', count1, 'B raidžių:', count2, 'C raidžių:', count3, 'D raidžių:', count4)

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(firstVar, secondVar) {
  let sum = 0
  let isOdd = false

  if (typeof firstVar === 'number' && typeof secondVar === 'number') {
    sum = firstVar + secondVar
  } else if (Array.isArray(firstVar) && Array.isArray(secondVar)) {
    sum = firstVar.length + secondVar.length
  } else {
    return 'Kintamųjų tipai nesutampa, sudėtis negalima'
  }

  if (sum % 2 !== 0) {
    isOdd = true
  }

  if (isOdd) {
    return 'Suma nelyginė'
  } else {
    return 'Suma: ' + sum
  }
}
const testArr = [1, 2, 3]
const testArr1 = [2, 3, 5]
console.log('8 užd')
console.log(lygineSuma(testArr, testArr1))
//

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
let primeNumber = true
function pirminisSkaicius(digit) {
  if (typeof digit === 'number') {
    for (let i = 0; i < digit; i++) {
      for (let j = 2; j < digit; j++) {
        if (digit % j === 0) {
          primeNumber = false
        }
      }
      if (primeNumber === true) {
        return 'Skaičius pirminis'
      } else {
        return 'Skaičius ne pirminis'
      }
    }
  }
}
console.log('9 užd')
console.log(pirminisSkaicius(13))

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)
function telefonoNumeris(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr.length === 10 && arr[i] < 10) {
      const first = arr.slice(0, 3).join('')
      const second = arr.slice(3, 6).join('')
      const third = arr.slice(6, 10).join('')
      return `(${first}) ${second}-${third}`
    } else {
      return 'Masyvas neatitinka reikalavimų'
    }
  }
}
const test = [5, 2, 5, 5, 5, 6, 7, 8, 9, 8]
console.log('10 užd')
console.log('Atspausdintas tel. numeris: ', telefonoNumeris(test))
