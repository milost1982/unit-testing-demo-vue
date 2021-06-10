var calculator = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  mul: (x, y) => x * y,
  div: function (x, y) {
    if (y === 0) throw new Error('Divide with 0 is not defined')
    return x / y
  }
}

exports.calculator = calculator
