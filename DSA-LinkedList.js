class Node {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {

            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item) {
        if (!this.head) {
            return null;
        }
    
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}


function main() {
const SLL = new LinkedList();
SLL.insertFirst();
console.log(SLL);
}

main();