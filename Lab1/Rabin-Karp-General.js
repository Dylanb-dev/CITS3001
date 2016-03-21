'use strict';

/*

Only works for strings of numbers

*/

function rabinkarp(T, P) {
  const n = T.length;
  const m = P.length;

  let p = 0;

  for (let j = 0; j < m; j++) {
    p = p * 10 + P[j];
  }

  let z = 0;

  for (let j = 0; j < m - 1; j++) {
    z = z * 10 + T[j];
  }

  const result = [];

  for (let i = 0; i < (n - m + 1); i++) {
    z = z % (Math.pow(10, m - 1)) * 10 + T[i + m - 1];
    if (z === p) {
      result.push(i);
    }
  }
  return result;
}

console.log(rabinkarp('213213213', '32'));
