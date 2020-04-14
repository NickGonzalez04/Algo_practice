
class LinkedList {
    constructor(){
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    push(value){
        const node = new Node(value);
        this.length++;
        if (!this.head){
            this.tail = node;
        }else {
            this.tail.next = node;
        }
        this.tail = node;
    }
    pop(){
        return this.delete(this.length-1);
    }
    // going to node to node until we located the node we are looking for 
    _find(value, test=this._test){
        let current = this.head;
        let i = 0;
        while(current){
            if (test(value, current.value, i,current)){
                return current;
            }
            current = current.next;
            i++;
        }
        // did not find searched node
        return null;
    }
    //internal method 
    _test(a,b){
        return a === b;
    }
    testIndex(search, __, i){
        return search === i;
    }

    get(index){
        const node = this._find(index,_testIndex);
        if(!node) return null;
        return node.value;
    }


    delete(index){
        if(index === 0){
            const head = this.head;
            if(head){
                this.head = head.next;
            }
            else{
                this.tail = this.head = null;
            }
            this.length--;
            return head.value;
        }
    const node = this._find(index-1, this._testIndex);
    const excise = node.next;
    if(!excise)return null;
    node.next = excise.next;
    if(node.next && !node.next.next) {
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