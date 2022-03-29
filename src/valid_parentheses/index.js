function func(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (s[i] == stack[stack.length - 1]) { stack.pop() }
        else { return false }
    }
  }

  return stack.length == 0
}

module.exports = func
