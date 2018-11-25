const debug = require('debug')('reverseLinkedList');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create a list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const headNode = new ListNode(1);
let currentNode = headNode;
for (let i = 2; i <= 5; i += 1) {
  currentNode.next = new ListNode(i);
  currentNode = currentNode.next;
}

// Iterative Approach -> O(n), O(1)
const iterativeReverse = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return pre;
};

const h1 = iterativeReverse(headNode);
debug(h1);

// Recursive Appoach -> O(n), O(n)
const recursiveReverse = (head) => {
  const curNode = head;
  if (curNode === null || curNode.next === null) {
    return curNode;
  }

  const p = recursiveReverse(curNode.next);
  curNode.next.next = curNode;
  curNode.next = null;

  return p;
};

const h2 = recursiveReverse(headNode);
debug(h2);
