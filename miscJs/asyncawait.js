function wait(t) {
  return new Promise(res => {
    setTimeout(res, t);
  });
}
// without async await - 1 level of nesting
wait(5000).then(() => {
  console.log("im done");
});
