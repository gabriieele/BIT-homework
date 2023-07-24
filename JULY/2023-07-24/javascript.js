// 1. Sukurkite 5 skirtingus objektus su šiais laukų pavadinimais:
// gyvunoPavadinimas, amzius, arGaliSkristi, vardas, spalva.
// Jiems sugalvokite ir priskirkite savybiu reikšmes. Ir juos sudėkite į masyvą.
const gyvunai = []
const kate = {
  gyvunoPavadinimas: 'katinas',
  amzius: '3 metai',
  arGaliSkristi: false,
  vardas: 'Enzo',
  spalva: 'Pilka',
}
const suo = {
  gyvunoPavadinimas: 'šuo',
  amzius: '10 metų',
  arGaliSkristi: false,
  vardas: 'Tviksas',
  spalva: 'Juoda',
}
const paukstis = {
  gyvunoPavadinimas: 'kolibris',
  amzius: '1 metai',
  arGaliSkristi: true,
  vardas: 'Kolis',
  spalva: 'Žalia',
}
const dramblys = {
  gyvunoPavadinimas: 'dramblys',
  amzius: '5 metai',
  arGaliSkristi: false,
  vardas: 'Markas',
  spalva: 'Pilka',
}
const zirafa = {
  gyvunoPavadinimas: 'žirafa',
  amzius: '7 metai',
  arGaliSkristi: false,
  vardas: 'Liusė',
  spalva: 'Oranžinė ir juoda',
}
gyvunai.push(kate, suo, paukstis, dramblys, zirafa)
console.log(gyvunai)

// 2. Sukurkite funkciją, kuri gražina gyvūno aprašymą:
// tarkime turime gyvūną:
// Šikšnosparnis, 14, true, Arūnas Šikšna, Pilkas
// Funkcija gražina:
// "Sveiki, aš Arūnas Šikšna, man yra 14 metų ir aš esu Šikšnosparnis, mano odos spalva: Pilkas ir aš galiu skristi!"
// ir rezultatą išveskite su console.log į ekraną.
function description(gyvunoPavadinimas, amzius, arGaliSkristi, vardas, spalva) {
  const animal = {
    gyvunoPavadinimas: gyvunoPavadinimas,
    amzius: amzius,
    arGaliSkristi: arGaliSkristi,
    vardas: vardas,
    spalva: spalva,
  }
  if (arGaliSkristi === true) {
    arGaliSkristi = 'galiu'
  } else {
    arGaliSkristi = ' negaliu'
  }
  return `Sveiki, aš ${animal.vardas}, man yra ${amzius} metų/ai ir aš esu ${animal.gyvunoPavadinimas}, mano odos spalva: ${spalva} ir aš ${arGaliSkristi} skristi!`
}
console.log(description('šikšnosparnis', 14, true, 'Arūnas Šikšna', 'Pilka'))

// 3. Sukurkite du atskirus masyvus kuriuose išskirstysime skraidančius ir neskraidančius gyvūnus. Tada padarome kovą ir laimės tie gyvūnai, kurių buvo daugiau.
// pvz: skraidančių gyvūnų masyve yra 3 elementai o neskraidančių gyvūnų masyve yra 2 elementai, todėl skraidantys gyvūnai laimi. Rezultatą išvesti su console.log
const canFly = []
const cannotFly = []

function newDescription(gyvunoPavadinimas, amzius, arGaliSkristi, vardas, spalva) {
  const animal = {
    gyvunoPavadinimas: gyvunoPavadinimas,
    amzius: amzius,
    arGaliSkristi: arGaliSkristi,
    vardas: vardas,
    spalva: spalva,
  }
  if (arGaliSkristi === true) {
    canFly.push(animal)
  } else {
    cannotFly.push(animal)
  }
}

const firstAnimal = newDescription('šikšnosparnis', 14, true, 'Arūnas Šikšna', 'Pilka')
const secondAnimal = newDescription('kolibris', 3, true, 'Kolibris Kolibriavičius', 'Mėlyna')
const thirdAnimal = newDescription('gandras', 7, true, 'Gandras Gandraitis', 'Balta')
const fourthAnimal = newDescription('dramblys', 8, false, 'Dramblaitis', 'Pilka')
const fifthAnimal = newDescription('Pantera', 2, false, 'Pante', 'Juoda')

if (canFly.length > cannotFly.length) {
  console.log('Skraidantys gyvūnai laimėjo')
} else {
  console.log('Neskraidantys gyvūnai laimėjo')
}

// 4. Sukurkite registracijos formą html'e kuris registruotų vartotojų:
// Vardą, pavardę, username, el.paštą, slaptažodį.
// Paspaudus mygtuką register į žmonių masyvą turėtų užsiregistruoti naujas varotojas. Masyvą išveskite į lentelę po forma.
// (Rekomenduoju šiek tiek stilizuoti, kad prisimintumėte css bei html sintaksę)

const people = []
const validUsers = []
const emailLenght = []

const submitButton = document.getElementById('submitButton')
//kur atvaizduos
const view = document.getElementById('view')
const validPeople = document.getElementById('validUsers')
submitButton.addEventListener('click', function () {
  const firstName = document.getElementById('fname').value
  const lastName = document.getElementById('lname').value
  const username = document.getElementById('username').value
  const email = document.getElementById('eml').value
  const password = document.getElementById('psw').value

  const person = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
  }

  people.push(person)
  view.innerHTML = table(people)
  // 5. Validuokite, ar el. pašto savybėje yra panaudotas @ ir top level domain simboliai ant galo: Tai pvz example@example.com yra tinkamas el paštas, kol justinas@justinas yra netinkamas el pašto adresas, šiuos vartotojus sudėkite į validUsers masyvą.
  if (
    email.includes('@') &&
    (email.includes('.com') || email.includes('.org') || email.includes('.net'))
  ) {
    validUsers.push(person)
    console.log('Teisingi email: ', validUsers)
    // 6. Į atskirą lentelę išveskite vartotojus iš validUsers masyvo, turinčius ilgesnį el.paštą nei 20 simbolių.
    if (email.length >= 20) {
      emailLenght.push(person)
      validPeople.innerHTML = table(emailLenght)
    }
  }
})
function table(arr) {
  let tableHTML = '<table>'
  tableHTML +=
    '<tr><th>Vardas</th><th>Pavardė</th><th>Vartotojo vardas</th><th>El. paštas</th><th>Slaptažodis</th></tr>'
  for (const person of arr) {
    tableHTML += `<tr><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.username}</td><td>${person.email}</td><td>${person.password}</td></tr>`
  }
  tableHTML += '</table>'
  return tableHTML
}
