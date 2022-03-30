class ListNode {
  val
  next

  constructor(val = 0, next = undefined) {
    this.val = val
    this.next = next
  }
}

class LinkedList extends ListNode {
  val = 0
  next = undefined

  constructor(array) {
    super()
    if (array.length < 1) {
      throw new Error('can\'t initialize empty list, provide an array with a least one element')
    }

    this.val = array[0]
    let i = 1
    let node = this

    while (i < array.length) {
      node.next = new ListNode(array[i])
      node = node.next
      i++
    }
  }
}

class TreeNode {
  val = 0
  left
  right

  constructor(
    val = 0,
    left = null,
    right = null
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

module.exports = {
  LinkedList,
  ListNode,
  TreeNode,
}
