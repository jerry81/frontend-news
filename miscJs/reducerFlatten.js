const original = [
  ['a', 'b'],
  ['c', 'd']
];
function reducer(acc, cur) {
  acc = [...acc, ...cur];
  return acc;
}
const reduced = original.reduce(reducer, []);
console.log("reduced", reduced);
