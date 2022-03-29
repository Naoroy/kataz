const { Queue } = require('./index')

describe('Queue implementation', function() {
  const queue = new Queue()
  let x = 1

  test('Queue.prototype has push, peek, pop and empty functions', function() {
    expect(queue.push).toBeInstanceOf(Function)
    expect(queue.peek).toBeInstanceOf(Function)
    expect(queue.pop).toBeInstanceOf(Function)
    expect(queue.empty).toBeInstanceOf(Function)
  })

  test('Queue.prototype.push adds element to queue', function() {
    queue.push(x)
    expect(queue.array).toEqual([x])

    queue.push(x+1)
    console.log(queue.array, x)
    expect(queue.array).toEqual([x, x+1])
  })

  test('Queue.prototype.peek is a function', function() {
    expect(queue.peek).toBeInstanceOf(Function)
  })

  test('Queue.prototype.peek returns first element added', function() {
    queue.peek()
    expect(queue.peek()).toEqual(x)
  })


  test('Queue.prototype.pop removes first element at front of queue and returns it', function() {
    expect(queue.pop()).toEqual(x)
    expect(queue.array).toEqual([x+1])
  })

  test('Queue.prototype.empty returns true if queue is empty, false otherwise', function() {
    expect(queue.empty()).toEqual(false)
    queue.pop()
    expect(queue.empty()).toEqual(true)
  })
})
