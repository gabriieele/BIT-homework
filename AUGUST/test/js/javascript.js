function math(a, fn) {
  let rez = a * a

  fn([4, 8, 8, 'laba diena'])
}

math(4, param => {
  for (const prod of param) {
    console.log(prod)
  }
})

const funct = (a, b) => {
  return a + b
}

console.log(funct(4, 8))

let visible = false

document.getElementById('test').addEventListener('click', function () {
  const text = document.getElementById('text')

  if (visible) {
    text.style.display = 'none'
  } else {
    text.style.display = 'block'
  }

  visible = !visible
})
