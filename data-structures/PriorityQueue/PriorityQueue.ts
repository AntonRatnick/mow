export type PriorityQueueItem<T> = [value: T, priority: number]

interface IPriorityQueue<T> {
  printCollection: () => void
  enqueue: (item: PriorityQueueItem<T>) => void
  dequeue: () => PriorityQueueItem<T> | void
  front: () => PriorityQueueItem<T> | void
  size: () => number
  isEmpty: () => boolean
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  collection: PriorityQueueItem<T>[] = []

  dequeue(): void | PriorityQueueItem<T> {
    return this.collection.shift()
  }

  enqueue(item: PriorityQueueItem<T>): void {
    const priority = item[1]
    if (this.isEmpty()) {
      this.collection.push(item)
    } else {
      let ind = 0
      for (let i = this.size() - 1; i > 0; i--) {
        const pri = this.collection[i][1]
        if (pri <= priority) {
          ind = i + 1
          break
        }
        ind = i
      }

      this.collection.splice(ind, 0, item)
    }
  }

  front(): PriorityQueueItem<T> | void {
    return this.collection[0]
  }

  isEmpty(): boolean {
    return this.collection.length === 0
  }

  printCollection(): void {
    console.log(this.collection)
  }

  size(): number {
    return this.collection.length
  }
}
