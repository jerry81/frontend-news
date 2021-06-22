function p(input) {
    if (input.i) {
      input.i++
    } else {
       input++
    }
}

function passByExps() {
    let input = 1
  console.debug('passing int', input)
  p(input)
  console.debug('input is now ', input)
  input = {
      i: 1
  }
  console.debug('passing obj', input)
  p(input)
  console.debug('input is now ', input)
}

// conclusion - pass by value for primitive types
// pass by reference for objects