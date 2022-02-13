import { fib } from './fib'

describe('fib', () => {
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [7, 13],
    [8, 21],
    [12, 144],
    [51, 20365011074],
  ])('fib(%i) should be %i', (q, expected) => {
    expect(fib(q)).toEqual(expected)
  })
})
