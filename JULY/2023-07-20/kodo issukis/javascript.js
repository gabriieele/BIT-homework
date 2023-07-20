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
