// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    /* My Solution
    insert(data){
        let arr = [this];
        while(arr.length>0){
        		let node = arr.shift();
            if(data < node.data){
            		if(node.left){
                    arr.push(node.left);
                  }
                else{
                		node.left = new Node(data);
                 }
            }
            else{
            	if(node.right){
              		arr.push(node.right);
              }
              else{
              		node.right = new Node(data);
              }
            }
        }
    }
    */

    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data);
        }
        else if(data < this.data){
            this.left = new Node(data);
        }
        else if (data > this.data && this.right){
            this.right.insert(data);
        }
        else if(data > this.data){
            this.right = new Node(data);
        }
    }
    /* My Slution
    contains(data){
    		let arr = [this];
        while(arr.length>0){
        		let node = arr.shift();
            if(data === node.data){
            		return node;
            }
            if(data < node.data){
            		if(node.left){
                    arr.push(node.left);
                  }
            }
            else{
            	if(node.right){
              		arr.push(node.right);
              }
            }
        }
        return null;
    }
    */
    /* My SOlution 2
    contains(data){
        if(data === this.data){
           return this;
        }
        else if(data < this.data && this.left){
           return this.left.contains(data);
        }
        else if (data > this.data && this.right){
           return this.right.contains(data);
        }
        else{
            return null;
        }
    }
    */
   contains(data){
       if(data === this.data)   return this;

        if(data < this.data && this.left){
            return this.left.contains(data);
        }
        else if (data > this.data && this.right){
            return this.right.contains(data);
        }

        return null;
   }
}

module.exports = Node;
