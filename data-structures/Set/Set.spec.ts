import { MSet } from './Set'

describe('Set<T>', () => {
  it('.add(el) should add (element: T) in collection, return boolean, true if was unique and successfully added', () => {
    const set = new MSet()
    expect(set.add(1)).toBeTruthy()
    expect(set.values()).toEqual([1])

    expect(set.add(2)).toBeTruthy()
    expect(set.values()).toEqual([1, 2])

    expect(set.add(2)).toBeFalsy()
    expect(set.values()).toEqual([1, 2])
  })

  it('.remove(el) should remove (element: T) from collection, return boolean, true if has been in collection and successfully removed', () => {
    const set = new MSet()
    set.add(1)
    set.add(2)
    set.add(3)

    expect(set.values()).toEqual([1, 2, 3])
    expect(set.remove(2)).toBeTruthy()

    expect(set.remove(2)).toBeFalsy()
    expect(set.values()).toEqual([1, 3])

    expect(set.remove(5)).toBeFalsy()
    expect(set.values()).toEqual([1, 3])
  })

  it('.has(el) should return (has: boolean), true if collection has el', () => {
    const set = new MSet()
    set.add(1)
    set.add(2)

    expect(set.has(1)).toBeTruthy()
    expect(set.has(2)).toBeTruthy()
    expect(set.has(3)).toBeFalsy()
  })

  it('.values() should return (collection: T)', () => {
    const set = new MSet()

    set.add(1)
    expect(set.values()).toEqual([1])

    set.add(2)
    expect(set.values()).toEqual([1, 2])

    set.remove(2)
    expect(set.values()).toEqual([1])

    set.add(3)
    expect(set.values()).toEqual([1, 3])
  })

  it('.size() should return (size: number) collection size', () => {
    const set = new MSet()

    set.add(1)
    expect(set.size()).toEqual(1)

    set.add(2)
    expect(set.size()).toEqual(2)

    set.remove(2)
    expect(set.size()).toEqual(1)
  })

  it('.union(Set<T>) should return (UnionSet<T>) union of two Sets', () => {
    const set = new MSet()
    const otherSet = new MSet()

    set.add(1)
    otherSet.add(1)
    const unionSet = set.union(otherSet)
    expect(unionSet.values()).toEqual([1])

    set.add(2)
    otherSet.add(3)
    expect(set.union(otherSet).union(unionSet).values()).toEqual([1, 2, 3])
  })

  it('.intersection(Set<T>) should return (IntersectionSet<T>) intersection of two Sets', () => {
    const set = new MSet()
    const otherSet = new MSet()

    set.add(1)
    set.add(2)
    otherSet.add(1)

    const intersectionSet = set.intersection(otherSet)
    expect(intersectionSet.values()).toEqual([1])

    otherSet.add(2)
    otherSet.add(3)
    expect(set.intersection(otherSet).values()).toEqual([1, 2])
  })

  it('.difference(Set<T>) should return (DifferenceSet<T>) difference of two Sets', () => {
    const set = new MSet()
    const otherSet = new MSet()

    set.add(1)
    set.add(2)
    otherSet.add(1)

    const differenceSet = set.difference(otherSet)
    expect(differenceSet.values()).toEqual([2])

    otherSet.add(2)
    // important note: we check only which elements are in set, not in otherSet
    otherSet.add(3)
    expect(set.difference(otherSet).values()).toEqual([])
  })

  it('.subset(Set<T>) should return (isSubset: boolean), true if set is subset of otherSet', () => {
    const set = new MSet()
    const otherSet = new MSet()

    set.add(1)
    set.add(2)
    otherSet.add(1)

    expect(set.subset(otherSet)).toBeFalsy()

    otherSet.add(2)
    expect(set.subset(otherSet)).toBeTruthy()

    otherSet.add(3)
    expect(set.subset(otherSet)).toBeTruthy()
  })
})
