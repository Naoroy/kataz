function func(root) {
  if (!root) return []

  return [
    ...func(root.left),
    root.val,
    ...func(root.right)
  ]
}

module.exports = func
