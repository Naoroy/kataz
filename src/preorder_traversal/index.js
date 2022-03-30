function func(root) {
  if (!root) return []

  return [
    root.val,
    ...func(root.left),
    ...func(root.right)
  ]
}

module.exports = func
