function permutation(start = 0) {
  if (start === n) {
    console.log(P);
    return;
  }
  for (var i = 1; i <= n; i++) {
    if (!P.includes(i)) {
      P.push(i);
      permutation(start + 1);
      P.pop();
    }
  }
}

var P = [];
n = 5;
permutation();
