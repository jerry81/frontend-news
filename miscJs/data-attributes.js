let butts = document.querySelectorAll('.but')
butts.forEach(but => {
  but.addEventListener('click', gHandler)
})
let cbutt = document.querySelector('.cbut')
cbutt.addEventListener('click', cbHandler)

function gHandler(e) {
  e.stopPropagation()
  console.dir(e)
  e.target.innerHTML = `buttonD-${e.target.dataset['a']}`
}

let nostop = document.querySelector('.noStop')
nostop.addEventListener('click', nostopHandler)

function nostopHandler() {
  console.log('buttons handler')
}

function cbHandler(e) {
  e.stopPropagation()
  console.log('tar', e.target)
  console.log('e curTar', e.currentTarget)
  e.target.innerText = `target is ${e.target.outerHTML}
  and currentTarget is ${e.currentTarget.outerHTML}`
}

window.addEventListener('click', wHandler)

function wHandler(e) {
  console.log('global handler clicked', e)
}