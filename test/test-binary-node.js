var assert = require('assert');
var BinaryNode = require('../src/binary-node');

describe('BinaryNode', function() {
  var node, node2, node3;

  beforeEach(function() {
    node = new BinaryNode();
    node2 = new BinaryNode();
    node3 = new BinaryNode();
  });

  describe('initialization', function() {
    it('should initilize with empty attributes', function() {
      assert.equal(node.left, undefined);
      assert.equal(node.right, undefined);
      assert.equal(node.content, undefined);
    });
  });

  describe('#is_leaf()', function() {
    it('should return true if node has no children, false otherwise', function() {
      assert.equal(node.is_leaf(), true);
      node.left = node2;
      assert.equal(node.is_leaf(), false);
      node.left = undefined;
      assert.equal(node.is_leaf(), true);
      node.right = node3;
      assert.equal(node.is_leaf(), false);
      node.left = node2;
      assert.equal(node.is_leaf(), false);
    });
  });
});
