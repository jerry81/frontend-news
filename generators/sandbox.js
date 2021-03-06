console.log(`\nexample 1\n`)
function *hello() {
    yield console.log('first yield')
    yield console.log('second yield')
    return // causes done to become true
}

const x = hello()
x.next() // runs first yield
x.next() // runs second yield

console.log(`\nexample 2\n`)

const ex2 = hello()
for (let _ of ex2) {
    console.log('iterated')
}

// saving a line
for (let _ of hello()) {
    console.log('iterated')
}

console.log('\nexample 3\n')

function randInt() {
    return Math.round(Math.random() * 100)
}

function *twentyYields() {
  for(let i = 0; i < 20; i++) {
      yield randInt()
  }
}

for (let r of twentyYields()) {
    console.log('r is ', r)
}

const usingNext = twentyYields()
let {value, done} = usingNext.next()
console.log(`value: ${value}, done: ${done}`)
console.log('\nexample 4\n')

function *withArgs() {
    for (a of arguments) {
        yield a 
    }
}

for (a of withArgs('a', 'b', 'c')) {
    console.log('a is ', a)
}