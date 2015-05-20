var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5)
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

function printNode(value){
    console.log(value);
}

//tree.inOrderTraverse(printNode);
//tree.preOrderTraverse(printNode);

console.log(tree.search(1)? "Key 1 found":"Key 1 not found");
console.log(tree.search(13)? "Key 13 found":"Key 13 not found");


function BinarySearchTree(){

    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    /**
     * Insert a node into the tree.
     * @param key
     */
    this.insert = function(key){

        var newNode = new Node(key);

        if(root === null){
            root = newNode;
        }
        else{
            insertNode(root, newNode);
        }

    };


    /**
     * Determine if key is in the tree
     *
     * @param key
     */
    this.search = function(key){
        return searchNode(root, key);
    };


    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    this.postOrderTraverse = function(){};


    /**
     * Fetch the minimum value in the tree
     */
    this.min = function(){
        return minNode(root);
    };


    /**
     * Fetch max value in the tree
     */
    this.max = function(){
        return maxNode(root);
    };

    this.remove = function(){};


    /**
     * Private insert function.
     * @param node
     * @param newNode
     */
    var insertNode = function(node, newNode){

        if(newNode.key < node.key){

            if(node.left === null){
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                insertNode(node.right, newNode);
            }
        }

    };

    var inOrderTraverseNode = function(node, callback){

        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };


    var preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    var minNode = function(node){
        if(node){

            while(node && node.left !== null){
                node = node.left;
            }

            return node.key;
        }

        return null;
    };

    var maxNode = function(node){
        if(node){

            while(node && node.right !== null){
                node = node.right;
            }

            return node.key;
        }

        return null;
    };

    var searchNode = function(node, key){

        if(node === null){
            return false;
        }
        if(key  < node.key){
            return searchNode(node.left, key);
        }
        else if(key > node.key){
            return searchNode(node.right, key);
        }
        else {
            return true;
        }



    }



}