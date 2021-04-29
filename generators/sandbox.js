console.log(`\nexample 1\n`)
function *hello() {
    yield console.log('first yield')
    yield console.log('second yield')
}

const x = hello()
x.next() // runs first yield
x.next() // runs second yield

console.log(`\nexample2\n`)

const ex2 = hello()
for (let _ of ex2) {
    console.log('iterated')
}

// saving a line
for (let _ of hello()) {
    console.log('iterated')
}

console.log('\nexample3\n')

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
