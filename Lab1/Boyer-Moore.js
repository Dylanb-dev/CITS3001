'use strict';

function boyerMoore(T, P) {
  const result = [];
  const n = T.length;
  const m = P.length;
  let s = 0;


  for (let i = m - 1; i < (n - m + 1); i++) {
    let l = -1;
    let match = true;
    s++;
    for (let j = m - 1; j >= 0; j--) {
      if (T[i + j - m + 1] !== P[j]) {
        match = false;
      }
      if (T[i] === P[j]) {
        l = m - j - 2;
      }
    }
    if (match) {
      result.push(i - m + 1);
    }
    if (l === -1) {
      i += m - 1;
    }
    else {
      i += l;
    }
  }
  console.log(s)
  return result;
}

console.log(boyerMoore('WHICH FINALLY HALTS.  AT THAT POINT...', 'AT THAT'));
