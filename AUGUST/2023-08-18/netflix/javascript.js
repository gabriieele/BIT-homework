const faqItems = document.querySelectorAll('.question')

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
  signInModal.show()
  sections.forEach(section => {
    section.style.display = 'none'
  })
  header.style.display = 'none'
  footer.style.display = 'none'
})
