
const el1 = document.querySelector('#output1')
const el2 = document.querySelector('#output2')
const el3 = document.querySelector('#output3')

function s1() {
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

/* DEMO 
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let lookup = {}

function setup (A) {
    lookup = {}
    for (let i = 0; i < A.length; i++) {
      lookup[Number(A[i])] = true
    }
}
function solution(A) {
    setup(A)
    let cur = 1
    while (true) {
      if (lookup[cur] !== true) {
        return cur
      }
      cur++
    }
}

const demoTest1 = [1, 3, 6, 4, 1, 2]

const demoTest2 = [1, 2, 3]

const demoTest3 = [-1, -3]

const testSet = [demoTest1, demoTest2, demoTest3]

testSet.forEach((x) => {
  console.log('x is ', x)
  console.log('solution is ', solution(x))
})