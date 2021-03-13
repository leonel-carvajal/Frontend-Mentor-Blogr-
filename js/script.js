const headerItems = document.querySelectorAll('.header__item')
const iconHam = document.getElementById('header__img')
const headerMenu = document.getElementById('header__menu')

headerItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('animation')
    e.target.children[0].classList.toggle('rotate')
  })
})
iconHam.addEventListener('click', (e) => {
  if (!headerMenu.classList.contains('show')) {
    headerMenu.classList.add('show')
    iconHam.src = 'images/icon-close.svg'
  } else {
    headerMenu.classList.remove('show')
    iconHam.src = 'images/icon-hamburger.svg'
  }
})