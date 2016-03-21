'use strict';

function matchingNaive(T, P) {
  const result = [];
  const n = T.length;
  const m = P.length;

  for (let i = 0; i < (n - m + 1); i++) {
    let match = true;
    for (let j = 0; j < m; j++) {
      if (T[i + j] !== P[j]) {
        match = false;
      }
    }
    if (match) {
      result.push(i);
    }
  }
  return result;
}

console.log(matchingNaive('baaabbaabbba', 'aa'));
