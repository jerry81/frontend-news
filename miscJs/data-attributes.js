let butts = document.querySelectorAll('.but')
butts.forEach(but => {
  but.addEventListener('click', gHandler)
})
let cbutt = document.querySelector('.cbut')
cbutt.addEventListener('click', cbHandler)

function gHandler(e) {
  console.dir(e)
  e.target.innerHTML = `buttonD-${e.target.dataset['a']}`
}

function cbHandler(e) {
  console.log('tar', e.target)
  console.log('e curTar', e.currentTarget)
  e.target.innerText = `target is ${e.target.outerHTML}
  and currentTarget is ${e.currentTarget.outerHTML}`
}