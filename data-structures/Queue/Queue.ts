interface IQueue<T> {
  print: () => void
  enqueue: (el: T) => void
  dequeue: () => T | void
  front: () => T | void
  size: () => number
  isEmpty: () => boolean
}

export class Queue<T> implements IQueue<T> {
  private collection: T[] = []

  public print(): void {
    console.log(this.collection[0])
  }

  public enqueue(el: T): void {
    this.collection.push(el)
  }

  public dequeue(): T | void {
    return this.collection.shift()
  }

  public front(): T {
    return this.collection[0]
  }

  public size(): number {
    return this.collection.length
  }

  public isEmpty(): boolean {
    return this.collection.length === 0
  }
}
