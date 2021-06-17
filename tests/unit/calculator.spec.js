var calc = require('@/lib/calculator').calculator

describe('Math tests', () => {
  it('5 + 6 = 11', () => {
    expect(calc.add(5, 6)).toBe(11)
  })

  it('5 - 3 = 2', () => {
    expect(calc.sub(5, 3)).toBe(2)
  })

  it('5 * 5 = 25', () => {
    expect(calc.mul(5, 5)).toBe(25)
  })

  it('4 / 2 = 2', () => {
    expect(calc.div(4, 2)).toBe(2)
  })
})

describe('Undefined math operations', () => {
  it('Divide by zero throws error', () => {
    expect(() => calc.div(1, 0)).toThrowError()
  })

  it('Multiply ∞ with 0 gives NaN', () => {
    expect(calc.mul(Infinity, 0)).toBe(NaN)
  })
})
