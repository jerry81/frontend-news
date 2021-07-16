const el = document.querySelector('#work')

let a = {}
let b = {}
const double = document.querySelector('#double')
const triple = document.querySelector('#triple')


double.innerHTML = JSON.stringify(a == b) 
triple.innerHTML = JSON.stringify(a === b) 

a = b
const doublea = document.querySelector('#doublea')
const triplea = document.querySelector('#triplea')

doublea.innerHTML = JSON.stringify(a == b) 
triplea.innerHTML = JSON.stringify(a === b) 

const obj = {
    count: 0
}

function add() {
    try {
   ++obj.count
   el.innerHTML = JSON.stringify(obj)
    } catch(e) {
        el.innerHTML = e
    }
}

function freeze() {
    Object.freeze(obj)
}

el.innerHTML = JSON.stringify(obj)

