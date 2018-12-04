const debug = require('debug')('LinkedListCycle2');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const headNode = new ListNode(1);
let currentNode = headNode;
let secondNode;
let lastNode;

for (let i = 2; i <= 5; i += 1) {
  currentNode.next = new ListNode(i);
  if (i === 2) {
    secondNode = currentNode.next;
  }

  if (i === 5) {
    lastNode = currentNode.next;
  }

  currentNode = currentNode.next;
}

// if (secondNode && lastNode) {
//   lastNode.next = secondNode;
// }

if (lastNode) {
  lastNode.next = headNode;
}

debug(headNode);

const detectCycle = (head) => {
  let begin = null;
  const nodes = [];
  let cur = head;

  while (cur) {
    if (nodes.includes(cur)) {
      begin = cur;
      break;
    }

    nodes.push(cur);
    cur = cur.next;
  }

  return begin;
};

// const b = detectCycle(headNode);
// debug(b);

const detectCycle2 = (head) => {
  let slow = head;
  let fast = head;
  let isCycle = false;

  while (slow !== null && fast !== null) {
    slow = slow.next;
    if (fast.next === null) {
      return null;
    }

    fast = fast.next.next;

    if (slow === fast) {
      isCycle = true;
      break;
    }
  }

  if (!isCycle) {
    return null;
  }

  let h = head;
  while (h !== fast) {
    h = h.next;
    fast = fast.next;
  }

  return h;
};

const b2 = detectCycle2(headNode);
debug(b2);
