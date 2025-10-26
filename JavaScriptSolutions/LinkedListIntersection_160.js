function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
  let currA = headA;
  while (currA !== null) {
    let currB = headB;
    while (currB !== null) {
      if (currA === currB) {
        return currA;
      }
      currB = currB.next;
    }
    currA = currA.next;
  }
  return null;
}

// Example
let intersectNode = new ListNode(8);
intersectNode.next = new ListNode(4);
intersectNode.next.next = new ListNode(5);

let headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = intersectNode;

let headB = new ListNode(5);
headB.next = new ListNode(0);
headB.next.next = new ListNode(1);
headB.next.next.next = intersectNode;

console.log(getIntersectionNode(headA, headB)); // returns the node with value 8
