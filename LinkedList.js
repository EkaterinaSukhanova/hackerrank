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
    };

    this.getHead = () => {
        return this.head;
    };

    this.setHead = (head) => {
        return this.head = head;
    };

    this.printList = (node) => {
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
}

function Node(data) {
    this.data = data;
    this.next = null;
}


module.exports.List = List;
module.exports.Node = Node;
