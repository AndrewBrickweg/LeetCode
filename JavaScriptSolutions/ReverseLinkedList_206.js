function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let reverseList = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
};

// Example usage:
let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let reversedHead = reverseList(head);

// Print reversed list
let curr = reversedHead;
while (curr) {
  console.log(curr.val); // 5, 4, 3, 2, 1
  curr = curr.next;
}
