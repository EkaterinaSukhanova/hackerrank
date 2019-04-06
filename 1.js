// detect a cycle in a linked list

function List() {
    this.head = null;
    this.tail = null;

    this.add = (node) => {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    this.getHead = () => {
        return this.head;
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}

function hasCycle(head) {
    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!slow.next) {
            return false;
        } else if (!fast.next) {
            return false;
        } else if (!fast.next.next) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}


let l = new List();
l.add(new Node(1));
l.add(new Node(2));
l.add(new Node(3));
let node = new Node(4);
l.add(node);
node.next = l.getHead(); // cycle

console.log(hasCycle(l.getHead()));
