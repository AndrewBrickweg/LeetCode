class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode();
  let tail = dummy;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next; //move pointer
    } else {
      tail.next = list2;
      list2 = list2.next; //move pointer
    }
    tail = tail.next; //move pointer
  }

  tail.next = list1 != null ? list1 : list2;

  return dummy.next; //return merged list
};

const printList = (head) => {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result.join(" -> ");
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

console.log(printList(mergedList)); // 1 -> 1 -> 2 -> 3 -> 4 -> 4
