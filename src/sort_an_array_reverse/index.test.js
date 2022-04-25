const { mergeSortReverse, insertionSortReverse } = require('./index')

describe('912.Sort an array (But in descending order)', function() {
  test('Func exists', function() {
    expect(mergeSortReverse).toBeTruthy()
  })
  test('Example 1', function() {
    expect(mergeSortReverse([5,2,3,1])).toEqual([1,2,3,5].reverse())
  })
  test('Example 2', function() {
    expect(mergeSortReverse([5,1,1,2,0,0])).toEqual([0,0,1,1,2,5].reverse())
  })
})
describe('912.Sort an array (Insertion sort, but in descending order)',
function() {
  test('Func exists', function() {
    expect(insertionSortReverse).toBeTruthy()
  })
  test('Example 1', function() {
    expect(insertionSortReverse([5,2,3,1])).toEqual([1,2,3,5].reverse())
  })
  test('Example 2', function() {
    expect(insertionSortReverse([5,1,1,2,0,0])).toEqual([0,0,1,1,2,5].reverse())
  })
})
