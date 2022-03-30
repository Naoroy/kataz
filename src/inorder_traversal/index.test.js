const func = require('./index')
const { TreeNode } = require('../../helpers')

describe('Preorder traversal', function() {
  test('Should return tree nodes left -> right', function() {
    let a = new TreeNode(1)
    a.right = new TreeNode(2)

    let b = a.right
    b.left = new TreeNode(3)

    expect(func(a)).toEqual([1, 3, 2])
  })

  test('Should return tree nodes left -> right', function() {
    let a = new TreeNode(1)
    a.left = new TreeNode(2)

    expect(func(a)).toEqual([2, 1])
  })

  test('Should return tree nodes left -> right', function() {
    let a = new TreeNode(1)
    a.right = new TreeNode(2)

    expect(func(a)).toEqual([1, 2])
  })

  test('Test with one node', function() {
    let a = new TreeNode(1)

    expect(func(a)).toEqual([1])
  })

  test('Test with no node', function() {
    expect(func(null)).toEqual([])
  })
})
