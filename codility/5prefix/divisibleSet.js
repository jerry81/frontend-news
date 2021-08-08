/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the
 range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, 
because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

function solution1(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    // loop between A and B, checking each for modulo K

    // naive

    // better, starting at A
    // count up to first item divisible by K
    // then count by K until > B
/*     let offset = A % K == 0 ? 1 : 0
    return Math.floor((B - A) / K) + offset */
    let first = A
    let count = 0

    while (first % K != 0) {
        ++first
    }

    while (first <= B) {
        if (first <= B) {
            ++count
        }
        first += K
    }
    return count
}

function solution(A, B, K) { 
    return Math.ceil((B - A) / K)
}

/*
Example test:   [6, 11, 2] // expect 3 
A = 11, B = 345, K = 17 // expect - 20
*/


console.log('sol', solution(6, 11, 2))

console.log('sol2', solution(11, 345, 17))