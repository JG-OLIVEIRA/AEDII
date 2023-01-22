function arrangementWithRepetition(np) {
  for (var i = 1; i <= P.length; i++) {
    P[np] = i;
    if (np == q) {
      console.log(P);
      return;
    } else {
      arrangementWithRepetition(np + 1);
    }
  }
}

P = [1, 2, 3];

q = 3;

arrangementWithRepetition(0);
