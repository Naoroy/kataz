class LinkedList {
  list
  array

  constructor(array) {
    if (array.length < 1) {
      throw new Error('can\'t initialize empty list, provide array of numbers')
    }

    this.array = array
    this.list = new ListNode(array[0])
    let i = 1
    let node = this.list

    while (i < array.length) {
      node.next = new ListNode(array[i])
      node = node.next
      i++
    }
  }
}

class ListNode {
  val
  next

  constructor(val = 0, next = undefined) {
    this.val = val
    this.next = next
  }
}

module.exports = { LinkedList, ListNode }
