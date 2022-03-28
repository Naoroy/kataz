const { LinkedList, ListNode } = require('../../helpers')

const func = require('./index')

test('Func exists', function() {
  let arr1 = [1, 2, 3, 4, 5]
  let list1 = new LinkedList(arr1)
  let list2 = new LinkedList(arr1.reverse())

  expect(func(list1)).toEqual(list2)

})
