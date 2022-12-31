import fizzbuzz from '..'

describe('Fizzbuzz', () => {
  test('should return fizz when divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz')
  })

  test('should return the number when not divisible by 3', () => {
    expect(fizzbuzz(1)).toEqual(1)
  })

  test('should return buzz when divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz')
  })

  test('should return fizzbuzz when divisible by 15', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz')
  })
})
