const LinkedList = require('.');

let zipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  let newList = new LinkedList();
  newList.head = current1 || current2;

  let temp;
  while (current1 || current2) {
    if (current1) {
      temp = current1.next;
      if (current2) current1.next = current2;
      current1 = temp;
    }
    if (current2) {
      temp = current2.next;
      if (current1) current2.next = current1;
      current2 = temp;
    }
  }
  return newList;
};

let zipSort = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  let newList = new LinkedList();
  if (current1?.value <= current2?.value || !current2) {
    newList.head = current1;
    current1 = current1.next;
  } else if (current2?.value <= current1?.value || !current1){
    newList.head = current2;
    current2 = current2.next;
  }
  let currentResult = newList.head;

  while (current1 || current2) {
    while (current1 && (current1?.value <= current2?.value || !current2)) {
      currentResult.next = current1;
      currentResult = currentResult.next;
      current1 = current1.next;
    }
    while (current2 && (current2?.value <= current1?.value || !current1)) {
      currentResult.next = current2;
      currentResult = currentResult.next;
      current2 = current2.next;
    }
  }
  return newList;
};

module.exports = { zipLists, zipSort };
