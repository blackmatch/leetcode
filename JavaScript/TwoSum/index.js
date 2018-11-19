const debug = require('debug')('twoSum');

const nums = [2, 7, 11, 15];
const target = 9;

// solution1 -- O(n^2)
const solution1 = (ns, t) => {
  for (let i = 0, iLen = ns.length - 1; i < iLen; i += 1) {
    for (let j = i + 1, jLen = ns.length; j < jLen; j += 1) {
      if (ns[i] + ns[j] === t) {
        return [i, j];
      }
    }
  }

  return [];
};

debug('solution1:');
const result1 = solution1(nums, target);
debug(result1);

// solution2 -- O(n)
const solution2 = (ns, t) => {
  const ts = [];
  for (let i = 0, iLen = ns.length; i < iLen; i += 1) {
    const n = t - ns[i];
    const idx = ns.indexOf(n);
    if (idx !== -1 && idx !== i) { // attention
      ts.push(i);
      ts.push(idx);
      break;
    }
  }

  return ts;
};

debug('solution2:');
const result2 = solution2(nums, target);
debug(result2);
