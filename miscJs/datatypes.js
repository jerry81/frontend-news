const el = document.querySelector('#work')

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

