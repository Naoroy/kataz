function Queue() {
  this.array = []
}

Queue.prototype.push = function (x) {
  this.array.push(x)
}

Queue.prototype.peek = function () {
  return this.array[0]
}

Queue.prototype.pop = function () {
  return this.array.shift()
}

Queue.prototype.empty = function () {
  return this.array.length == 0
}

module.exports = { Queue }
