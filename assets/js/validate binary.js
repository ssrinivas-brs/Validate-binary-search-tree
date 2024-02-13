class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function insert(root, val) {
    if (root === null) return new TreeNode(val);

    if (val < root.val) {
        root.left = insert(root.left, val);
    } else {
        root.right = insert(root.right, val);
    }

    return root;
}

function isValidBST(root, min = null, max = null) {
    if (root === null) return true;

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

function validateBST() {
    const input = document.getElementById("treeInput").value.trim();
    if (!input) {
        document.getElementById("validationResult").textContent = "Please enter BST elements.";
        return;
    }

    const elements = input.split(",").map(Number);
    let root = null;
    for (const element of elements) {
        root = insert(root, element);
    }

    const isValid = isValidBST(root);
    if (isValid) {
        document.getElementById("validationResult").textContent = "The entered tree is a valid BST.  True";
    } else {
        document.getElementById("validationResult").textContent = "The entered tree is not a valid BST.  False";
    }
}
   console.log('result', validateBST ? 'True' : 'False');