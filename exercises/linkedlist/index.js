// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
   constructor(data, next = null){
       this.data = data;
       this.next = next;
   }
    
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    size(){
        var node = this.head;
        var counter = 0;
        while(node){
            node = node.next;
            counter++;
        }
        return counter;
    }
    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        while(node){
            if(!node.next)
            return node
            node = node.next;
        }
    }
    clear(){
        this.head = null;
    }

    removeFirst(){
        if(this.head){
            this.head = this.head.next;
        }
    }
    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let node = this.head;
        let previousNode = this.head;
        
        while(node){
            if(!node.next){
                node = null;
                previousNode.next = null;
            }
            else{
                previousNode = node;
                node = node.next;
            }
 
        }
    }
    /*
    insertLast(data){
        var newNode = new Node(data);
        if(!this.head){
            this.head = newNode();
        }
        if(!this.head.next){
            this.head.next = newNode;
            return;
        }
        let node = this.head;        
        while(node){
            if(!node.next){
               node.next = newNode();
               return;
            } 
            node = node.next;
        }
    }
    */
   insertLast(data){
       const last = this.getLast();
       if(last)
            last.next = new Node(data);
       else
            this.head = new Node(data);
   }

   getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
   }

   removeAt(index){
       if(!this.head){
           return;
       }
       if(index === 0){
            this.head = this.head.next;
            return;
       }
       /* 
       let previous = this.head;
       let node = this.head.next;
       let counter = 1;
        
       while(node){
            if(counter === index){
                previous.next = node.next;
                return;
            }
            previous = node;
            node = node.next;
            counter++;
       }
       */
       let previous = this.getAt(index - 1);
       if(!previous || !previous.next)
        return;
       
       previous.next = previous.next.next;
       
    }

    insertAt(data, index){
        if(index === 0){
             this.head = new Node(data, this.head);
             return;
        }

        let previous = this.getAt(index - 1) || this.getLast();       
        previous.next = new Node(data, previous.next);
    }

    forEach(fn){
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }
    // Genrators JS topic
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
