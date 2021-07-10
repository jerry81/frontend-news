let butts = document.querySelectorAll('.but')
butts.forEach(but => {
  but.addEventListener('click', gHandler)
})

function gHandler(e) {
  console.dir(e)
  e.target.innerHTML = `buttonD-${e.target.dataset['a']}`
}