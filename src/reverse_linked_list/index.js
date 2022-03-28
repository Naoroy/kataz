const { ListNode } = require('../../helpers')

function func(list) {
  let newlist
  let values = []
  let node = list
  let i = 0

  while (node) {
    values.push(node.val)
    node = node.next
  }

  values = values.reverse()
  newlist = new ListNode()
  current = newlist
  while (i < values.length) {
    current.next = new ListNode(values[i])
    current = current.next
    i++
  }

  return newlist.next
}

module.exports = func
