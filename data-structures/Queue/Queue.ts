interface IQueue<T> {
  print: () => void
  enqueue: (el: T) => void
  dequeue: () => T | void
  front: () => T
  size: () => number
  isEmpty: () => boolean
}

class Queue<T> implements IQueue<T> {
  private collection = []

  public print() {
    console.log(this.collection[0])
  }

  public enqueue(el: T) {
    this.collection.push(el)
  }

  public dequeue(): T | void {
    return this.collection.shift()
  }

  public front() {
    return this.collection[0]
  }

  public size() {
    return this.collection.length
  }

  public isEmpty() {
    return this.collection.length === 0
  }
}
