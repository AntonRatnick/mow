import { gridTraveler } from './grid-traveler'

describe('gridTraveler', () => {
  it.each([
    [0, 0, 0],
    [1, 1, 1],
    [2, 1, 1],
    [7, 13, 18564],
    [8, 21, 888030],
    [12, 14, 2496144],
    [20, 20, 35345263800],
  ])('gridTraveler(%i, %i) should be %i', (h, w, expected) => {
    expect(gridTraveler(h, w)).toEqual(expected)
  })
})
