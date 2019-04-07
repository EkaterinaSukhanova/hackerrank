// revert one-way linked list

const {List, Node} = require('./LinkedList');


function revert(node) {
    if (!node.next) {
        return;
    }

    let sm = node;
    let mid = node.next;
    let large = null;
    if (mid.next) {
        large = mid.next;
    }

    sm.next = null;

    while (mid.next) {
        mid.next = sm;
        sm = mid;
        mid = large;
        large = mid.next;
    }

    mid.next = sm;
    return mid;
}


let l = new List();
l.add(new Node(1));
l.add(new Node(2));
l.add(new Node(3));
l.add(new Node(4));

let head = revert(l.getHead());
l.setHead(head);

l.printList(l.getHead());
