const wrap = (a, b, msg) => {
  return '\u001b[' + a + 'm' + msg + '\u001b[' + b + 'm'
}

const bold = message => {
  return wrap(1, 22, message)
}

module.exports = { bold }
