'use strict';

function prefix(P) {
  let i = 0;
  let j = -1;
  const p = new Array(P.length + 1);

  p[i] = j;
  while (i < P.length) {
    while (j >= 0 && P[i] !== P[j]) {
      j = p[j];
    }
    i++;
    j++;
    p[i] = j;
  }
  return p;
}

function kmp(T, P) {
  const n = T.length;
  const m = P.length;
  const result = [];
  let q = 0;
  const p = prefix(P);

  for (let i = 0; i < n; i++) {
    while (q > 0 && P[q] !== T[i]) {
      q = p[q];
    }
    if (P[q] === T[i]) {
      q++;
    }
    if (q === m) {
      result.push(i - m + 1);
      q = p[q];
    }
  }
  return result;
}

console.log(kmp('213213213', '32'));
