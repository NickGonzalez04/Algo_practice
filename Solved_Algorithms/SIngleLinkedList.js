
class LinkedList {
    constructor(){
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    push(value){
        const node = new Node(value);
        this.length++;
        if (!this.head) {
            this.tail = node;
        }else {
            this.tail.next = node;
        }
        this.tail = node;
    }
    // delete the node off our list
    pop(){
        return this.delete(this.length-1);
    }
    // going node to node until we located the node we are looking for 
    _find(value, test=this._test){

        let current = this.head;
        let i = 0;
        // While you have somehting in current
        while(current){
            // value is what we are looking for 
            // current.value is node we are on and looking at 
            // i is iteration we are on
            // current the node its self
            if (test(value, current.value, i, current)){
                //if test is true we return current as it is what we are looking for 
                return current;
            }
            current = current.next;
            i++;
        }
        // did not find searched node
        return null;
    }
            //internal methods
            // comparator ( use it to compare to find what it is looking for)
            _test(a,b){
                return a === b;
            }
            // did i find the correct index I was looking for 
            // '__' i dont care what I am looking for 
            // Only concerned about 'search' and 'i'
            _testIndex(search, __, i){
                return search === i;
            }

    // get the node we are searching for 
    get(index){
        // using the _find internal method
        const node = this._find(index, this._testIndex);
        // if we dont have a node
        if(!node) return null;
        // otherwise return node.value
        return node.value;
    }


    delete(index){
        if (index === 0) {
            const head = this.head;
            if (head) {
                this.head = head.next;
            }
            else {
                    this.tail = this.head = null;
            }
                this.length--;
                return head.value;
            }   
                const node = this._find(index-1, this._testIndex);
                // the node we will delete
                const excise = node.next;
                // if no node to delete
                if (!excise) return null;
                // grab the node you are going to delete
                // take that nodes next and make its the previous nodes next
                node.next = excise.next;
                //
                if (node.next && !node.next.next) {
                this.tail = node.next;
            }
            this.length--;
            return excise.value;
    }
}


// Our node
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}