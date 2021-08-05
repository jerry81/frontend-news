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
    accum.push(cur)
    return accum
  }, []);
}

console.log("reduceSort", reduceSort(input));
