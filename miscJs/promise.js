const pr = new Promise((res, _) => {
  setTimeout(() => {
    console.log("promise success after 3 s");
    res();
  }, 3000);
});
pr.then(() => {
  console.log("after resolve");
});
console.log("immediately after");

const pr2 = new Promise(res => {
  setTimeout(() => {
    console.log("after 1 second, pr2");
    res();
  });
});
Promise.all([pr, pr]).then(() => {
  console.log("all promises completed");
});
console.log("immediately after promise all");
