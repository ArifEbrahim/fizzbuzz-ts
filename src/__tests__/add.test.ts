import { add } from '..'

describe('Add', () => {
  test('should return 5 when inputs are 2 and 3', () => {
    expect(add(3, 2)).toBe(5)
  })
})
