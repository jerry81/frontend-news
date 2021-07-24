console.log('hi')
const el1 = document.querySelector('#output1')
const el2 = document.querySelector('#output2')
const el3 = document.querySelector('#output3')

console.log('el1 is ', el1)
function s1() {
  console.log('setting output1')
  el1.innerHTML = 'output1'
}

function s2() {
  el2.innerHTML = 'output2'
}

function s3() {
  el3.innerHTML = 'output3'
}

s1()
s2()
s3()