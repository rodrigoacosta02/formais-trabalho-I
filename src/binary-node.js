/**
 * A typical implementation of binary tree
 */
var BinaryNode = module.exports = function() {
  this.left = undefined;
  this.right = undefined;
  this.content = undefined;
};

/**
 * Return whether the node is a leaf
 */
BinaryNode.prototype.is_leaf = function() {
  return this.left === undefined && this.right === undefined;
};
