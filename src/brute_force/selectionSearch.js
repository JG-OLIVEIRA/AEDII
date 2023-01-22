function selectionSearch(vector, key) {
  for (var index = 0; index < vector.length; index++) {
    if (vector[index] === key) return index;
  }
  return -1;
}

var example = [2, 4, 6, 8, 10];

console.log(selectionSearch(example, 8));
