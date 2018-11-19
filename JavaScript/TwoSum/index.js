const debug = require('debug')('twoSum');

const nums = [3, 2, 4];
const target = 6;

// solution1 -- O(n^2)
const solution1 = (ns, t) => {
  for (let i = 0, iLen = ns.length; i < iLen; i += 1) {
    for (let j = i + 1, jLen = ns.length; j < jLen; j += 1) {
      if (ns[i] + ns[j] === t) {
        return [i, j];
      }
    }
  }

  throw new Error('No tow sum solution');
};

debug('solution1:');
const result1 = solution1(nums, target);
debug(result1);


// solution2 -- O(n)
const solution2 = (ns, t) => {
  for (let i = 0, iLen = ns.length; i < iLen; i += 1) {
    const n = t - ns[i];
    const idx = ns.indexOf(n);
    if (idx !== -1 && idx !== i) { // attention
      return [i, idx];
    }
  }

  throw new Error('No tow sum solution');
};

debug('solution2:');
const result2 = solution2(nums, target);
debug(result2);


// solution3 -- O(n)
// trading space for speed
const solution3 = (ns, t) => {
  const hashMap = {};
  for (let i = 0, iLen = ns.length; i < iLen; i += 1) {
    hashMap[`${ns[i]}`] = i;
  }

  for (let i = 0, iLen = ns.length; i < iLen; i += 1) {
    const complement = t - ns[i];
    if (hashMap[`${complement}`] !== undefined
    && hashMap[`${complement}`] !== i) {
      return [i, hashMap[`${complement}`]];
    }
  }

  throw new Error('No tow sum solution');
};

debug('solution3:');
const result3 = solution3(nums, target);
debug(result3);


// solution4 -- O(n)
const solution4 = (ns, t) => {
  const hashMap = {};

  for (let i = 0, iLen = ns.length; i < iLen; i += 1) {
    const complement = t - ns[i];
    if (hashMap[`${complement}`] !== undefined) {
      return [hashMap[`${complement}`], i];
    }

    hashMap[`${ns[i]}`] = i;
  }

  throw new Error('No tow sum solution');
};

debug('solution4:');
const result4 = solution4(nums, target);
debug(result4);
