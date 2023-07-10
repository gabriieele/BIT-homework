//1 uzduotis
let vardas = 'Matthew'
let pavarde = 'McConaughey'
console.log(vardas)

//2 uzduotis
let manoVardas = 'Gabrielė'
let manoPavarde = 'Bataitytė'
let gimimoMetai = 1999
let x = 2023 - gimimoMetai

console.log(`Aš esu ${manoVardas} ${manoPavarde}. Man yra ${x} metai`)

//3 uzduotis
//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

vardas = 'Matthew'
pavarde = 'McConaughey'
// let raides = vardas[4] + vardas[5] + vardas[6] + pavarde[8] + pavarde[9] + pavarde[10]
let raides = vardas.slice(-3) + pavarde.slice(-3)
console.log(raides)
