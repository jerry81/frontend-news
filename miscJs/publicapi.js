const base = 'https://cat-fact.herokuapp.com'
const facts = '/facts'
const wa = document.querySelector('#work-area')

async function getFact() {
  const res = await fetch(`${base}${facts}`)
  console.log('res is ', res)
  wa.innerHTML = `<button onclick="getNextFact()">get next fact</button>`  
}

async function getNextFact() {
  console.log('get next fact called')
}