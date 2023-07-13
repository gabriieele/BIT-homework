//1uzd Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * *

//2 uzd Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.
let result = ''
for (let i = 1; i <= 100; i++) {
  if ((i - 1) % 11 === 0 || (i - 10) % 9 === 0) {
    result += '<span style="color: red">*</span> '
  } else {
    result += '* '
  }
  if (i % 10 === 0) {
    result += '<br>'
  }
}
document.write(`<span style="letter-spacing: 3px">${result}</span>`)

//3 uzd Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// a)Iškritus herbui;
// b)Tris kartus iškritus herbui;
// c)Tris kartus iš eilės iškritus herbui;

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

result = ''
count = 0
document.write('<h4>Pirmas scenarijus</h4>')
while (true) {
  let random = rand(0, 1)
  if (random === 0) {
    result = 'H'
    console.log('Iskrito herbas, ciklas stabdomas', result)
    document.write('<br>Iskrito herbas, ciklas stabdomas ', result)
    break
  } else {
    result = 'S'
    console.log(result, 'Iskrito skaicius')
    document.write('<br>Iskrito skaicius ', result)
  }
}

document.write('<h4>Antras scenarijus</h4>')
while (true) {
  let random = rand(0, 1)
  if (random === 0) {
    result = 'H'
    count++
    console.log(result)
    document.write('<br>Iskrito herbas ', result)
  } else {
    result = 'S'
    console.log(result, 'Iskrito skaicius')
    document.write('<br>Iskrito skaicius ', result)
  }
  if (count === 3) {
    console.log('Herbas iskrito 3 kartus, ciklas stabdomas')
    document.write('<br>Herbas iskrito 3 kartus, ciklas stabdomas')
    break
  }
}

document.write('<h4>Trecias scenarijus</h4>')
let count1 = 0
while (true) {
  let random = rand(0, 1)
  if (random === 0) {
    result = 'H'
    count1++
    console.log(result)
    document.write('<br>Iskrito herbas ', result)
  } else {
    result = 'S'
    console.log(result, 'Iskrito skaicius')
    count1 = 0
    document.write('<br>Iskrito skaicius ', result)
  }
  if (count1 === 3) {
    console.log('Iskrito trys herbai is eiles, ciklas stabdomas')
    document.write('<br>Iskrito trys herbai is eiles, ciklas stabdomas')
    break
  }
}
