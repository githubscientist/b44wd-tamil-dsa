/*
    Arrays Vs Strings

    - BuiltIn Data Structures
    - Strings are immutable but Arrays are mutable
    - consecutive memory
    - indexing: first element stored at the first index 0
    - accessing: array[index] -> element (Random Access)
    - Insertion: last element: O(1), first element: O(n)
    - Deletion: O(1), O(n)
    - Methods:
        * push - pushes the element to the end of the array
        * pop - removes the element from the end of the array
        * unshift - inserts the element to the beginning of the array
        * shift - removes the element from the beginning of the array
        * splice - insert/remove an element at a specified index
        * forEach - iterates all the elements of the array and runs a callback function on every element
        * map
        * reduce
        * filter
        * sort
        * includes
        * join
        * length - property
*/

// create an array
// let array = [1, 2, 3, 4, 5];

// to access an element
// console.log(array[2]);

// console.log(array);

// console.log(array.length);

// update a value
// array[0] = 10;

// console.log(array);// arrays are mutable

// let string = 'apple';

// console.log(string);

// console.log(string[2]);

// console.log(string.length);

// update
// string[0] = 'm';

// console.log(string); // strings are immutable

// let index = 2;
// let char = 'k';
// // console.log(string.slice(0, index));
// // console.log(char);
// // console.log(string.slice(index + 1,));

// // work around
// string = string.slice(0, index) + char + string.slice(index + 1,);

// console.log(string);

// let array = [1, 2, 3, 4, 5];

// array.push(6);

// array.pop();

// array.unshift(10);

// array.shift();

// array.splice(2, 0, 21);

// array.splice(4, 1);

// console.log(array);

/*
    LinkedList

    - Data Structure
    - Abstract Data Type: user defined data type: defines its behaviour, data and operations
    - Types
        1. Singly Linked List
        2. Doubly Linked List
        3. Circularly Linked List
    - Singly Linked List:
        * non-consecutive memory
        * defined as a chain of nodes/objects from different memory location linked to one another
        * every node has a structure of two fields
            * data: actual data we want to store inside the memory
            * address/next: address of the next node/object in the memory
        * head pointer: points to the start of the linked list
        * head: null - signifies that the linked list is empty
        * tail node is the node whose address/next field points to the value null
        * accessing: linear access
        * insertion: insert at the head: O(1), insert at the tail - O(1)/O(n)
        * deletion: O(1), O(n)
*/

// Implementation

// define the structure of a node
class Node {
    // every node has two fields
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printList() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }

    insertTail(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail.next = null
            tail.next = newNode;
        }
    }

    insertHead(data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    // returns the length/number of nodes in a linked list
    length() {
        
    }

    // returns the middleNode 
    middleNode() {
        
    }

    deleteHead() {
        
    }

    deleteTail() {
        
    }
}

// let newNode = new Node(2);
// let newNode1 = new Node(3);

// newNode.next = newNode1;

// console.log(newNode.next.next);

// /*
//     newNode = Node {
//         data: 2,
//         next: Node {
//             data: 3,
//             next: null
//         }
//     }

//     newNode1 = Node {
//         data: 3,
//         next: null
//     }
// */

let list = new LinkedList();
// list.head = new Node(2);

// list.head.next = new Node(3);
// list.head.next.next = new Node(4);
// list.head.next.next.next = new Node(5);
list.insertTail(2);
list.insertTail(3);
list.insertTail(4);
list.insertTail(5);
list.insertHead(1);
list.insertHead(11);
list.printList();

/*
    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 3,
                next: Node {
                    data: 4,
                    next: Node {
                        data: 5,
                        next: Node {
                            data: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }

    list = LinkedList {
        head: null
    }

    newNode = Node {
        data: 6,
        next: null
    }

    tail = Node {
            data: 5,
            next: Node {
                data: 6,
                next: null
            }
        }
*/