export interface IStack<T> {
  push: (value: T) => void
  pop: () => T | void
  size: () => number
  peek: () => T
}

export class Stack<T> implements IStack<T> {
  private count = 0
  private storage: Record<number, T> = {}

  public push(value: T): void {
    this.storage[(this.count += 1)] = value
  }

  public pop(): T | void {
    if (!this.count) return undefined
    this.count -= 1
    const res = this.storage[this.count]
    delete this.storage[this.count]
    return res
  }

  public size(): number {
    return this.count
  }

  public peek(): T {
    return this.storage[this.count - 1]
  }
}
