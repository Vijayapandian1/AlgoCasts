// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(d, n){
        this.data = d,
        this.next = n
    }
    
}

class LinkedList {
    constructor(){
        this.head = null;
        this.list = [];

        
    }

    [Symbol.iterator]() { return this.list.values() }

    insertFirst(data){
        let n = new Node(data,this.head);
        this.head = n;
        if(!this.list) this.list = [];
        this.list.push(n);
    }
    size(){
       return (!this.list) ? 0 : this.list.length;
    }
    getFirst(){
       return (!this.list) ? null: this.list[this.list.length-1];
    }
    getLast(){
        return (!this.list) ? null: this.list[0];
    }

    clear(){
        this.list = null;//[];
    }
    removeFirst(){
           this.list && this.list.pop();
        if(this.list && this.list.length === 0) this.list = null;
    }
    removeLast(){
        this.list && this.list.shift();
        if(!this.list || this.list.length === 0) {this.list = null; this.head = null;}
        else{
            this.list[this.list.length-1].next == null;
        }
    }
    insertLast(data){
        let n = new Node(data,this.head);
        this.head = n;
        if(!this.list) {this.list = []; this.head = null; };
        this.list.unshift(n);
    }

    getAt(i){
         if(this.list && this.list.length > 0 && this.list[this.list.length-1-i]) return this.list[this.list.length-1-i];
         return null;
    }
    removeAt(i){
        if(this.list && this.list.length > 0)  this.list.splice((i+1)*-1,1);
        
    }
    insertAt(d,i){
        if(!this.list)  this.list = [];
        if(i == 0){ 
            this.list.push(new Node(d, this.getAt(i)))
        }
        else{
        i = i * -1;
        let n = new Node(d, this.getAt(i))
        this.list.splice(i,0,n);
        }
    }
    forEach(fn){
        this.list.map(i => {
            fn(i);
        });
    }
}

module.exports = { Node, LinkedList };
