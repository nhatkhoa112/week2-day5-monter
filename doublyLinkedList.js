class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(items){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let temp =this.tail;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
    }

    unshift(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;

        } else {
            let temp = this.head;
            this.head = node.next;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
    }

    shift(){
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;

        }
        this.length--;
        return this;
    }
}

let list = new DoublyLinkedList()
list.push(1);
list.push(2);
console.log(list)