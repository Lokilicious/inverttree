const depth = 5;

function setup() {
  let root = new Node(undefined, 0);
  this.buildBinaryTree(root, depth-1);
  this.invertTree(root);
  console.log(root);
}

function buildBinaryTree(node, currentDepth){
  if(currentDepth === 0){
    return node;
  } else {
    const leftChild = new Node(node, `${depth - currentDepth}:left`);
    const rightChild = new Node(node, `${depth - currentDepth}:right`);
    this.buildBinaryTree(node.addChild(leftChild), currentDepth-1);
    this.buildBinaryTree(node.addChild(rightChild), currentDepth-1);
  }
}

function invertTree(node){
  const children = node.children;
  if(!children){
    return;
  } else {
    node.swapChildren();
    children.forEach(child => {
      this.invertTree(child);
    });
  }
}

function draw() {
  // put drawing code here
  
}

function Node(parent, id){
  this.id = id;
  this.parent = parent;
  this.children = [];

  this.addChild = function(node){
    this.children.push(node);
    return node;
  }

  this.swapChildren = function(){
    this.children.reverse();
  }
}