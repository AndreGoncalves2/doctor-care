window.addEventListener('scroll', OnScroll)

OnScroll()
function OnScroll() {
  showNaviOnScroll()
  showbuttonBackToHomeonScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(sobre)
  activateMenuAtCurrentSection(contato)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seçao passou da linha (linha horizontal imaginaria no cetro da tela)
  //quias dados vou precisar ?
  const sectionTop = section.offsetTop //valor do topo da seçao home
  const sectionHeight = section.offsetHeight //valor total do section home

  // a seçao passou chegou ou passou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //console.log('O topo chegou ou passou da linha ? ',sectionTopReachOrPassedTargetLine)
  //verificar se a base ta abaixo da linha alvo
  //dados

  //a seçao termina onde
  const sectiomEndAt = sectionTop + sectionHeight

  const sectionEndPasseTargetLine = sectiomEndAt <= targetLine

  //Limites da seçao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPasseTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
function showNaviOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showbuttonBackToHomeonScroll() {
  if (scrollY > 600) {
    buttonBackToHome.classList.add('show')
  } else {
    buttonBackToHome.classList.remove('show')
  }
}

function OpenMenu() {
  document.body.classList.add('menu-expanded')
}

function closemenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700'
}).reveal(`
  #home,
  #home img,
  #home .box-geral,
  #services header,
  #services .card,
  #sobre,
  #sobre .conteudo,
  #sobre img
`)
