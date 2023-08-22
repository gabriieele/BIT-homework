function selectLanguage(e, language) {
  e.preventDefault()
  document.getElementById('selected').textContent = language
  document.getElementById('selected1').textContent = language

  console.log(language)
}

const icons = document.querySelectorAll('.icons')

icons.forEach(icon => {
  icon.innerHTML +=
    '<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></span>'
})

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
const close = document.querySelector('.btn-close')

signInButton.addEventListener('click', () => {
  signInModal.show()
  sections.forEach(section => {
    section.style.display = 'none'
  })
  header.style.display = 'none'
  footer.style.display = 'none'
})

close.addEventListener('click', () => {
  sections.forEach(section => {
    section.style.display = 'block'
  })
  header.style.display = 'block'
  footer.style.display = 'block'
})
