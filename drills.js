const BinarySearchTree = require ('./BinarySearchTree')


function main(){
    const BST = new BinarySearchTree();
  // const strings = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  // strings.forEach(element => BST.insert(element));
  const inserts = [3, 1, 4, 6, 9, 2, 5, 7];
  inserts.forEach(element => BST.insert(element));
  // const inserts [10, 7, 6];
  // inserts.forEach(element => BST.insert(element));
  return BST;
}
// console.log(main());

/* 
4. What does this program do?
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
This function sums all of the values in a tree.
*/

// const sumTree = main();
// 3, 1, 4, 6, 9, 2, 5, 7 => expect 37

// changed 'value' to 'key' because all of our values were null
// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) + t.key + tree(t.right);
// }

// console.log(sumTree);
// console.log(`

// `);
// console.log(tree(sumTree));

////////////////////////////////////////////////////////
// 5. write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
function findBSTHeight(tree) {
    if (!tree) {
      return 0;
    }
    if (!tree.left && !tree.right) {
      return 1;
    }
    let height = 0;
    if (tree.right) {
      let rightHeight = 1 + findBSTHeight(tree.right);
      if (rightHeight > height) height = rightHeight;
    }
    if (tree.left) {
      let leftHeight = 1 + findBSTHeight(tree.left);
      if (leftHeight > height) height = leftHeight;
    }
    return height;
  }
  
  // console.log(findBSTHeight(main()));
  // 6. Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

function isItBSTree(tree) {
    if (!tree) return false;
  
    if (tree.right) {
      if (tree.right.key > tree.key) {
        isItBSTree(tree.right);
      } else {
        return false;
      }
    }
  
    if (tree.left) {
      if (tree.left.key < tree.key) {
        isItBSTree(tree.left);
      } else {
        return false;
      }
    }
  
    return true;
  }
  
  // console.log(isItBSTree(main()));

  //7 Write an algorithm to find the 3rd largest node in a binary search tree.
  function findThirdNode(tree) {
    const height = findBSTHeight(tree);
    if (height < 2) {
      return null;
    } else if (height < 3) {
      if (tree.left && tree.right) {
        return tree.left.value;
      } else return null;
    } else if (height > 3) {
      return findThirdNode(tree.right);
    } else return tree.key;
  }
// console.log(findThirdNode(main()));
  
// 8. algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
function isBalanced(tree) {
    if (!tree) return false;
    if (!tree.right && !tree.left) return true;
    if (Math.abs(findBSTHeight(tree.right) - findBSTHeight(tree.left)) > 1)
      return false;
    return true;
  }
  
  console.log(isBalanced(main()));

  //9 You are given two arrays which represent two sequences of keys that are used to create two binary search trees. 
  //Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. 
  //You may use another data structure such as an array or a linked list but don't construct the BST. 
  //What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.
  function checkBSTFromArray(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) return false;
    if (arr1.length === 0 || arr2.length === 0) return true;
  
    const higher1 = [];
    const higher2 = [];
    const lower1 = [];
    const lower2 = [];
  
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] > arr1[0]) {
        higher1.push(arr1[i]);
      } else {
        lower1.push(arr1[i]);
      }
    }
  
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[i] > arr2[0]) {
        higher2.push(arr2[i]);
      } else {
        lower2.push(arr2[i]);
      }
    }
  
    return (
      checkBSTFromArray(higher1, higher2) && checkBSTFromArray(lower1, lower2)
    );
  }
  
  const arr1 = [3, 5, 4, 6, 1, 0, 2];
  const arr2 = [3, 1, 5, 2, 4, 6, 0];
  console.log(checkBSTFromArray(arr1, arr2));