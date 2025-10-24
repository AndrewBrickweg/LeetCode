function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let deleteDuplicates = (head) => {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

// Example usage:
let head = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);
let updatedHead = deleteDuplicates(head);

// Function to print the linked list
let printList = (node) => {
  let curr = node;
  let result = [];
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> "));
};

printList(updatedHead); // Output: 1 -> 2 -> 3
