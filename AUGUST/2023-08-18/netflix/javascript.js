const faqItems = document.querySelectorAll('.question')
let isClicked = false
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
  })
})

const signInButton = document.getElementById('signInButton')
const signInModal = new bootstrap.Modal(document.getElementById('exampleModal'))
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const sections = document.querySelectorAll('section')

signInButton.addEventListener('click', () => {
  isClicked = true
  signInModal.show()
  sections.forEach(section => {
    section.style.display = 'none'
  })
  header.style.display = 'none'
  footer.style.display = 'none'
})

signInModal.addEventListener('hidden.bs.modal', () => {
  if (isClicked === false) {
    sections.forEach(section => {
      section.style.display = 'block'
    })
    header.style.display = 'block'
    footer.style.display = 'block'
  }
})
