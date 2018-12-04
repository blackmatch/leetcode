const debug = require('debug')('LinkedListCycle');

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

if (secondNode && lastNode) {
  lastNode.next = secondNode;
}

debug(headNode);

const checkCycle = (head) => {
  let cycle = false;
  if (head && head.next && head.next.next) {
    let slow = head.next;
    let fast = head.next ? head.next.next : null;


    while (slow && fast) {
      if (slow === fast) {
        cycle = true;
        break;
      }

      slow = slow.next;
      fast = fast.next ? fast.next.next : null;
    }
  }

  return cycle;
};

const c = checkCycle(headNode);

debug(c);

const cycle2 = (head) => {
  const nodes = [];
  let cur = head;
  let cycle = false;

  while (cur) {
    if (nodes.includes(cur)) {
      cycle = true;
      break;
    }

    nodes.push(cur);

    cur = cur.next;
  }

  return cycle;
};

const cc = cycle2(headNode);
debug(cc);
