/*
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
*/

function solutionB(A) {
  let sums = [];
  for (let i = 0; i < A.length - 1; ++i) {
    sums[i] = [];
  }
  for (let j = A.length - 2; j >= 0; --j) {
    sums[j].push(A[j] + A[j + 1]);
    if (sums[j + 1]) {
      for (let k = 0; k < sums[j + 1].length; ++k) {
        sums[j].push(A[j] + sums[j + 1][k]);
      }
    }
  }
  // get min avg
  let minAvg = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;
  for (let k = 0; k < sums.length; k++) {
    let cur = sums[k];
    for (let l = 0; l < cur.length; l++) {
      let avg = cur[l] / (l + 2);
      if (avg < minAvg) {
        minAvg = avg;
        minIdx = k;
      }
    }
  }
  return minIdx;
}

function solutionB2(A) {
  let sums = [];
  let minAvg = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;
  for (let i = 0; i < A.length - 1; ++i) {
    sums[i] = [];
  }
  for (let j = A.length - 2; j >= 0; --j) {
    let sum = A[j] + A[j + 1];
    sums[j].push(sum);
    let avg = sum / 2;
    if (avg < minAvg) {
      minIdx = j;
      minAvg = avg;
    }
    if (sums[j + 1]) {
      for (let k = 0; k < sums[j + 1].length; ++k) {
        let sum2 = A[j] + sums[j + 1][k];
        let avg2 = sum2 / (3 + k);
        if (avg2 < minAvg) {
          minIdx = j;
          minAvg = avg2;
        }
        sums[j].push(sum2);
      }
    }
  }
  return minIdx;
  // get min avg
}


function solution(A) {
    let minIdx = -1
    let minSum = Number.MAX_SAFE_INTEGER
    let minDen = 1
    let minAvg = Number.MAX_SAFE_INTEGER
    for (let j = A.length - 2; j >= 0; --j) {
      let sum = A[j] + A[j + 1];
      let avg = sum / 2;
      if (avg > minAvg) {
          continue
      }
      if (minIdx < 0) {
        minAvg = avg;
        minDen = 2
        minSum = sum
        minIdx = j
        continue
      }
      minIdx = j;
      let potentialSum = minSum + A[j]
      let potentialDen = minDen + 1
      let potentialAvg = potentialSum / potentialDen
      if (potentialAvg < avg) {
        minAvg = potentialAvg;
        minDen = potentialDen
        minSum = potentialSum
      } else {
        minAvg = avg;
        minDen = 2
        minSum = sum
      }
      // check A[j} added to the current min chain 

    }
    return minIdx;
    // get min avg
  }

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
