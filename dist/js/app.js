// aos
AOS.init()

// date
const year = (document.querySelector('.footer-date').innerHTML =
  new Date().getFullYear())

// Q and A
const questions = document.querySelectorAll('.section-question-content-item')

// looping
questions.forEach((question) => {
  const btn = question.querySelector('button')

  btn.addEventListener('click', () => {
    questions.forEach((i) => {
      if (i !== question) {
        i.classList.remove('show')
      }
    })
    question.classList.toggle('show')
  })
})
