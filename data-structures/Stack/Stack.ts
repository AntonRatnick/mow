export interface IStack<T> {
  push: (value: T) => void
  pop: () => T | void
  size: () => number
  peek: () => T
  isEmpty: () => boolean
}

export class Stack<T> implements IStack<T> {
  private storage: T[] = []

  public push(value: T): void {
    this.storage.push(value)
  }

  public pop(): T | void {
    return this.storage.pop()
  }

  public size(): number {
    return this.storage.length
  }

  public peek(): T {
    return this.storage[this.storage.length - 1]
  }

  public isEmpty(): boolean {
    return this.size() === 0
  }
}
