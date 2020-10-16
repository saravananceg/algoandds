/*
We are given a binary tree(with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.The answer can be returned in any order.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    
    const result = [];
    var targetNode;
  
    const addLevelNodes = (node, startLevel, targetLevel) => {
        if (!node || node === targetNode) {
            return;
        }
        
        if (startLevel === targetLevel) {
            result.push(node.val);
            return;
        }
        
        if (startLevel < targetLevel) {
            addLevelNodes(node.left, startLevel+1, targetLevel);
            addLevelNodes(node.right, startLevel+1, targetLevel);
        }
    }
    
    const getNodes = (node) => {
        if (!node) {
            return false;
        }
        
        if (node === target) {
            addLevelNodes(node, 0, K);
            targetNode = node;
            return true;
        }

        var isFound;
        
        if (!isFound) {
            isFound = getNodes(node.left) || getNodes(node.right);
        }
        
        if (isFound && K>0) {
            addLevelNodes(node, 0, --K);
            targetNode = node;
        }
        
        return isFound;

    } 
    getNodes(root);

    return result;
};