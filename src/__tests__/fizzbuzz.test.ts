import fizzbuzz from '..'

describe('Fizzbuzz', () => {
  test('should return fizz when divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz')
  })

  test('should return the number when not divisible by 3', () => {
    expect(fizzbuzz(1)).toEqual(1)
  })
})
