//1uzd Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const firstArray = []
for (let i = 0; i < 30; i++) {
  firstArray.push(rand(5, 25))
}
console.log('Masyvas iš 30 elementų:', firstArray)

//a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let count = 0
for (const value of firstArray) {
  if (value > 10) {
    count++
  }
}
console.log('Skaičių daugiau už 10: ', count)

//b) Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
let maxIndex = []
let max = Math.max(...firstArray)

for (let i = 0; i < firstArray.length; i++) {
  if (firstArray[i] === max) {
    maxIndex.push(i)
  }
}
console.log('Didžiausia masyvo reikšmė: ', max)
console.log('Didžiausios reikšmės indeksas: ', maxIndex)

//c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let sum = 0
for (let i = 0; i < firstArray.length; i++) {
  if (i % 2 === 0) {
    sum += firstArray[i]
  }
}
console.log('Porinių indeksų reikšmių sumą lygi: ', sum)

//d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
const newArray = []
for (let i = 0; i < firstArray.length; i++) {
  newArray.push(firstArray[i] - i)
}
console.log('Naujas masyvas su atimtomis reikšmėmis: ', newArray)

//e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
const additionalArray = [...firstArray] //sukuriama kopija, tam kad poto butu galima pasiekti nepakitusi firstArray
for (let i = 0; i < 10; i++) {
  additionalArray.push(rand(0, 25))
}
console.log('Papildytas masyvas: ', additionalArray)

//f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;
const evenArray = []
const oddArray = []
for (let i = 0; i < firstArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(firstArray[i])
  } else {
    oddArray.push(firstArray[i])
  }
}
console.log('Porinių indeksų reikšmių masyvas: ', evenArray)
console.log('Neporinių indeksų reikšmių masyvas: ', oddArray)

//g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

for (let i = 0; i < firstArray.length; i++) {
  if (i % 2 === 0 && firstArray[i] > 15) {
    firstArray[i] = 0
  }
}
console.log('Masyvas, kurių indeksų reikšmės diesnės už 15, lygios 0: ', firstArray)

// h) Naudodami funkciją splice() iš masyvo ištrinkite visus elementus kurių reikšmės didesnės už 10;

for (let i = firstArray.length - 1; i >= 0; i--) {
  if (i > 10) {
    firstArray.splice(i, 1)
  }
}
console.log('Pirmas masyvas su splice metodu: ', firstArray)

// i) Naudodami funkciją splice() iš masyvo ištrinkite visus elementus turinčius porinį indeksą

for (let i = firstArray.length - 1; i >= 0; i--) {
  if (i % 2 === 0) {
    firstArray.splice(i, 1)
  }
}
console.log('Pirmas masyvas su splice metodu: ', firstArray)
