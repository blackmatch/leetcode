const debug = require('debug')('swapPairs');

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

const swapPairs = (head) => {
  let pre = new ListNode();
  const h = pre;

  pre.next = head;

  while (pre.next && pre.next.next) {
    const pp = pre;

    const a = pre.next;
    const b = a.next;
    const t = b.next;
    b.next = a;
    a.next = t;

    pp.next = b;

    pre = a;
  }

  return h.next;
};

const h1 = swapPairs(headNode);
debug(h1);
