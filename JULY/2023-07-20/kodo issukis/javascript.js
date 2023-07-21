const number = 789948162
const arr = [
  153, 71, 62, 207, 79, 277, 314, 305, 138, 115, 281, 237, 232, 183, 122, 189, 102, 77, 290, 268,
  239, 24, 319, 253, 58, 126, 54, 141, 41, 267, 18, 148, 194, 50, 47, 315, 249, 94, 285, 69, 27, 33,
  140, 149, 96, 227, 119, 258, 288, 229, 56,
]
let rez = []
let rez1 = 0
let rez2 = 0
// cikle visada bus atnaujinta min reikšmė, kai bus rastas mažesnis skirtumas, su 0 sąlyga neišsipildytų
let min = Infinity
let skaicius = 0
for (let i = 0; i < arr.length; i++) {
  //surandame daugiklį, kurį sudauginus bus gaunamas artimiausias skaičius targetui
  const multiplier = number / arr[i]
  const roundedMultiplier = Math.round(multiplier)
  let sandauga = arr[i] * roundedMultiplier
  //skirtumas tarp targeto ir gautos skaičių sandaugos
  const difference = Math.abs(number - sandauga)
  //   console.log(difference)
  console.log(`${arr[i]} dauginant iš ${roundedMultiplier} lygu ${sandauga}`)

  if (number === sandauga) {
    rez1 = sandauga
    skaicius = arr[i]
    rez2 = sandauga + arr[i]
  } else if (difference < min) {
    min = difference
    // console.group(difference)
    rez1 = sandauga
    skaicius = arr[i]
    rez2 = sandauga + arr[i]
  }
}
console.log(`${rez1} yra arčiausiai ${number}`)
console.log(`Atsakymas ${rez2} (${skaicius} + ${rez1})`)

//2uzd
// Kiekvienas mąstytojas savo lentelėje turi keturių atsitiktinių vienaženklių skaitmenų eilę. Kieno pirmasis eilės skaičius didesnis, tas laimi žaidimo raundą, pasiima tiek savąjį, tiek priešininko skaičių ir deda juos į lentelėje esančių skaičių eilės galą mažėjančia tvarka.

// Mąstytojai susiginčijo, kuris laimės žaidimą. Platonokodas įsitikinęs, kad jis bus pirmasis. Padėk jam išsiaiškinti kiek raundų prireiks išlošti visus skaičius iš Aristokodo, jei Platonokodas turi eilę sudarytą iš 8, 1, 4, 7, o Aristokodas eilę iš 2, 5, 3, 6.
const playerOne = [
  780, 893, 423, 548, 247, 395, 92, 815, 871, 194, 908, 76, 174, 552, 526, 544, 883, 712, 937, 239,
  399, 187, 808, 647, 868, 652, 870, 767, 403, 344, 659, 237, 317, 170, 984, 367, 493, 120, 97, 60,
  235, 615, 117, 684, 337, 157, 200, 905, 725, 1000,
]
const playerTwo = [
  674, 59, 259, 568, 989, 842, 87, 658, 903, 882, 798, 820, 300, 598, 714, 853, 215, 127, 992, 945,
  971, 748, 789, 455, 394, 404, 113, 364, 962, 649, 356, 324, 796, 709, 627, 562, 904, 313, 374,
  286, 175, 182, 140, 326, 953, 600, 550, 233, 220, 566,
]

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let newRez = 0
let newRez1 = 0
const newArr = []
const newArr1 = []

for (let i = 0; i < 50; i++) {
  const index = rand(0, 49)
  newArr.push(playerOne[index])
  newArr1.push(playerTwo[index])
}

while (true) {
  if (newArr[0] > newArr1[0]) {
    console.log('Pirmo zaidejo skaiciai:', newArr)
    console.log('Antro zaidejo skaiciai:', newArr1)
    console.log(
      `Žaidėjas nr. 1 žaidžia: ${newArr[0]}, Žaidėjas nr. 2 žaidžia: ${newArr1[0]}. Partiją laimėjo žaidėjas nr. 1!`
    )
    newArr.push(newArr.shift())
    newArr.push(newArr1.shift())
    const sort = newArr.slice(-2).sort((a, b) => b - a)
    //grazinimas i masyva, -2 paskutiniai 2, 2 kiek reiksmiu, ...sort kuo pakeista bus
    newArr.splice(-2, 2, ...sort)
  } else {
    console.log('Pirmo zaidejo skaiciai:', newArr)
    console.log('Antro zaidejo skaiciai:', newArr1)
    console.log(
      `Žaidėjas nr. 1 žaidžia: ${newArr[0]}, Žaidėjas nr. 2 žaidžia: ${newArr1[0]}. Pirmą partiją laimėjo žaidėjas nr. 2!`
    )
    newArr1.push(newArr1.shift())
    newArr1.push(newArr.shift())
    const sort1 = newArr1.slice(-2).sort((a, b) => b - a)
    //grazinimas i masyva, -2 paskutiniai 2, 2 kiek reiksmiu, ...sort kuo pakeista bus
    newArr1.splice(-2, 2, ...sort1)
  }

  if (newArr.length === 1) {
    console.log(
      `Žaidėjas nr. 1 žaidžia: ${newArr[0]}, Žaidėjas nr. 2 žaidžia: ${newArr1[0]}, Žaidėjas nr. 1 laimi ŽAIDIMĄ!`
    )
    break
  } else if (newArr1.length === 1) {
    console.log(
      `Žaidėjas nr. 1 žaidžia: ${newArr[0]}, Žaidėjas nr. 2 žaidžia: ${newArr1[0]}, Žaidėjas nr. 2 laimi ŽAIDIMĄ!`
    )
    break
  }
}
