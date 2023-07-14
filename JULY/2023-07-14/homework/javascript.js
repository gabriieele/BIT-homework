//Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų
function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let result = 0
let result1 = 0

while (true) {
  let Petras = rand(10, 20)
  let Kazys = rand(5, 25)

  result += Petras
  result1 += Kazys

  if (result >= 222) {
    console.log('Petro taskai:', result, 'Kazio taskai:', result1, 'Partija laimejo: Petras')
    document.write('Petro taskai: ', result, ' Kazio taskai: ', result1, ' Partija laimejo: Petras')
    break
  } else if (result1 >= 222) {
    console.log('Petro taskai:', result, 'Kazio taskai:', result1, 'Partija laimejo: Kazys')
    document.write('Petro taskai: ', result, ' Kazio taskai: ', result1, ' Partija laimejo: Kazys')
    break
  } else if (result === result1) {
    console.log('Petro taskai:', result, 'Kazio taskai:', result1, 'Ivyko lygiosios')
    document.write('Petro taskai: ', result, ' Kazio taskai: ', result1, ' Ivyko lygiosios')
    break
  }
}

//2uzd Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
// a)“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
document.write('<h4>Silpnesni smugiai</h4>')
for (let i = 1; i <= 5; i++) {
  let strikes = 0
  let nailLength = 85

  while (nailLength > 0) {
    let depth = rand(5, 20)
    //uztikrinamas kad nevirsytu 85 ilgio
    if (depth > nailLength) {
      depth = nailLength
    }
    console.log('Ikalimo gylis: ', depth)
    document.write('<br>Ikalimo gylis: ', depth)
    nailLength -= depth
    strikes++

    if (nailLength <= 0) {
      console.log('Vinis ', i, 'ikalta is ', strikes, ' smugiu')
      document.write(`<br>Vinis ${i} ikalta is ${strikes} smugiu`)
      break
    }
  }
}

// b)“Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.
console.log('Didesni smugiai')
document.write('<h4>Stipresni smugiai</h4>')
for (let i = 1; i <= 5; i++) {
  let strikes = 0
  let nailLength = 85

  while (nailLength > 0) {
    let depth = rand(5, 20)
    let possibilty = rand(0, 1)
    if (depth > nailLength) {
      depth = nailLength
    }
    if (possibilty === 0) {
      strikes++
      console.log('Nepataikytas smugis')
      document.write('<br>Nepataikytas smugis')
      continue
    }
    console.log('Ikalimo gylis: ', depth)
    document.write('<br>Ikalimo gylis: ', depth)
    nailLength -= depth
    strikes++

    if (nailLength <= 0) {
      console.log('Vinis ', i, ' ikalta is ', strikes, ' smugiu')
      document.write('<br>Vinis ', i, ' ikalta is ', strikes, ' smugiu')
      break
    }
  }
}

//Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti).Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio.

document.write('<h4>Unikalus ir pirminiai skaiciai</h4>')

let rez = ''
let rez1 = ''

for (let i = 0; i < 50; i++) {
  let string = rand(1, 200)
  // patikrina, ar reikšmė jau yra rez eilutėje. Jei nera, tuomet prideda ja
  if (rez.indexOf(string) === -1) {
    rez += string + ' '

    let primeNumber = true

    for (let j = 2; j < string; j++) {
      //ar skacius daliasi be liekanos
      if (string % j === 0) {
        primeNumber = false
      }
    }
    if (primeNumber === true) {
      rez1 += string + ' '
    }
  }
}
//paverciam rez i skaiciu masyva
let rezArr = rez.trim().split(' ')
let rez1Arr = rez1.trim().split(' ')

//sortinimas
let sortRez = rezArr.sort((a, b) => a - b)
let sortRez1 = rez1Arr.sort((a, b) => a - b)

//grazinimas i stringa vel
let stringAgainRez = sortRez.join(' ')
let stringAgainRez1 = sortRez1.join(' ')

console.log('Unikalus skaiciai:', stringAgainRez)
document.write('<br>Unikalus skaiciai: ', stringAgainRez)
console.log('Pirminiai skaiciai:', stringAgainRez1)
document.write('<br>Pirminiai skaiciai: ', stringAgainRez1)
