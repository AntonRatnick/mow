export interface IMSet<T> {
  has: (el: T) => boolean
  values: () => T[]
  add: (el: T) => boolean
  remove: (el: T) => boolean
  size: () => number
  union: (otherSet: IMSet<T>) => IMSet<T>
  intersection: (otherSet: IMSet<T>) => IMSet<T>
  difference: (otherSet: IMSet<T>) => IMSet<T>
  subset: (otherSet: IMSet<T>) => boolean
}

export class MSet<T> implements IMSet<T> {
  private collection: T[] = []

  public has(el: T): boolean {
    return this.collection.indexOf(el) !== -1
  }

  public values(): T[] {
    return this.collection
  }

  public add(el: T): boolean {
    const alreadyThere = this.has(el)
    if (alreadyThere) {
      return false
    }
    this.collection.push(el)
    return true
  }

  public remove(el: T): boolean {
    if (this.has(el)) {
      const index = this.collection.indexOf(el)
      this.collection.splice(index, 1)
      return true
    }
    return false
  }

  public size(): number {
    return this.collection.length
  }

  public union(otherSet: IMSet<T>): IMSet<T> {
    const unionSet = new MSet<T>()
    this.values().forEach(el => {
      unionSet.add(el)
    })
    otherSet.values().forEach(el => {
      unionSet.add(el)
    })
    return unionSet
  }

  public intersection(otherSet: IMSet<T>): IMSet<T> {
    const intersectionSet = new MSet<T>()
    this.values().forEach(el => {
      if (otherSet.has(el)) intersectionSet.add(el)
    })
    return intersectionSet
  }

  public difference(otherSet: IMSet<T>): IMSet<T> {
    const differenceSet = new MSet<T>()
    this.values().forEach(el => {
      if (!otherSet.has(el)) differenceSet.add(el)
    })
    return differenceSet
  }

  public subset(otherSet: IMSet<T>): boolean {
    return this.values().every(el => otherSet.has(el))
  }
}
