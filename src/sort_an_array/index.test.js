const { mergeSort, insertionSort} = require('./index')

describe('912.Sort an array (merge sort)', function() {
  test('Func exists', function() {
    expect(mergeSort).toBeTruthy()
  })
  test('Example 1', function() {
    expect(mergeSort([5,2,3,1])).toEqual([1,2,3,5])
  })
  test('Example 2', function() {
    expect(mergeSort([5,1,1,2,0,0])).toEqual([0,0,1,1,2,5])
  })
})
describe('912.Sort an array (insertion sort)', function() {
  test('Func exists', function() {
    expect(insertionSort).toBeTruthy()
  })
  test('Example 1', function() {
    expect(insertionSort([5,2,3,1])).toEqual([1,2,3,5])
  })
  test('Example 2', function() {
    expect(insertionSort([5,1,1,2,0,0])).toEqual([0,0,1,1,2,5])
  })
})
