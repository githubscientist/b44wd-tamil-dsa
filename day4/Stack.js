/*
    Stack

    - Data Structure and an Abstract Data Type
    - Behaviour: LIFO (Last In First Out) or FILO (First In Last Out)
    - Data Stacked upon the current top element
    - Implementation:
        1. Array
        2. Object
*/

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    // returns the topmost data
    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(5);
stack.push(7);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

// console.log(stack.peek());
console.log('is stack empty:', stack.isEmpty());