const menuBtn = document.getElementById('menu-button-js')
const menuPage = document.getElementById('menu-page-block-js')
const menuBtnClose = document.getElementById('menu-button-close-js')

menuBtn.onclick = function () {
  menuPage.style.display = 'block'
}

menuBtnClose.onclick = function () {
  menuPage.style.display = 'none'
}

console.log(menuPage)
