const input = [2, 5, 1, 9, 4];
function sort(A) {
  for (let i = 0; i < input.length; ++i) {
    for (j = i; j >= 0; --j) {
      if (A[j + 1] < A[j]) {
        let temp = A[j + 1];
        A[j + 1] = A[j];
        A[j] = temp;
      } else {
        break;
      }
    }
  }
  return A;
}

console.log("sorted is ", sort(input));

function reduceSort(A) {
  return A.reduce((accum, cur) => {
    if (accum.length == 0) {
      return [cur];
    }
    for (let i = 0; i < accum.length; i++) {
      if (cur < accum[i]) {
        return accum.splice(i, 0, cur);
      }
    }
    accum.push(cur);
    return accum;
  }, []);
}

console.log("reduceSort", reduceSort(input));

function closestSub(sum, A) {
  /* starting with largest, add*/
  const sorted = sort(A);
  let sol = [];
  let curSum = 0;
  let curDiff = Number.MAX_VALUE;
  let smallestOverSum = Number.MAX_VALUE;
  let overSol = [];
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i] > sum) {
      if (sorted[i] < smallestOverSum) {
        smallestOverSum = sorted[i];
        overSol = [sorted[i]];
      }
    }
    let potential = sorted[i] + curSum
    if (potential <= sum) {
      sol.push(sorted[i]);
      curSum += sorted[i];
      curDiff = Math.abs(sum - curSum);
    } else {
        let potentialDiff = Math.abs(potential - sum)
        if (potentialDiff < curDiff) {
            overSol = [...sol, sorted[i]]
            smallestOverSum = potential
        }
    }
  }
  if (Math.abs(smallestOverSum - sum) < curDiff) {
    sol = overSol
  }
  return sol;
}

const input2 = [24, 25, 100];
const input3 = [24, 25, 32, 100];
console.log("closestSub ", closestSub(13, input));
console.log("closest 2", closestSub(80, input2)); // expect 100
console.log("closest 3", closestSub(80, input3));
/* 
  react event run immediately
*/
