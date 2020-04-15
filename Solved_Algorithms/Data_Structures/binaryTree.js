// Binary Search Tree 

class Tree {
    constructor(){
        this.root =null;

    }
    toObject(){
        return this.root;
    }
    add(value){
        if (this.root === null){
            // no head, create new head
            this.root =new Node(value);
            return;
        }
        // the node we are currently looking at
        let current = this.root;
        // Always a place to add into our tree
        while(true){
            if (current.value > value){
                // we go left if I have a left child 
                if (current.left){
                    current = current.left;
                }
                else {
                    current.left = new Node(value);
                return;
                }
            }
            else {
                // we go right
                if (current.right){
                    current = current.right;
                }
                else {
                    current.right = new Node(value);
                return;
                }
            }
        }
    }

}


class Node {
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}