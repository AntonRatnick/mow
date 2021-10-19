import { PriorityQueue, PriorityQueueItem } from './PriorityQueue'

describe('PriorityQueue<T>', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('.isEmpty() should return true, if the collection is empty', () => {
    const queue = new PriorityQueue()
    expect(queue.isEmpty()).toBeTruthy()
    queue.enqueue(['first', 1])
    expect(queue.isEmpty()).toBeFalsy()
  })

  it('.size() should return (size: number), count of elements in the collection', () => {
    const queue = new PriorityQueue()
    expect(queue.size()).toBe(0)
    queue.enqueue(['first', 1])
    expect(queue.size()).toBe(1)
  })

  it('.front() should return first (item: PriorityCollectionItem<T>) from the collection', () => {
    const queue = new PriorityQueue()
    queue.enqueue(['first', 1])
    expect(queue.front()).toEqual(['first', 1])
  })

  it('.printCollection() should log the collection', () => {
    const spy = jest.spyOn(global.console, 'log')
    const queue = new PriorityQueue<string>()
    const item: PriorityQueueItem<string> = ['first', 1]
    queue.enqueue(item)
    queue.printCollection()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenLastCalledWith([item])
  })

  it(`.deque() should return first (item: PriorityCollectionItem<T>) 
        from the collection and remove it from the collection`, () => {
    const queue = new PriorityQueue<string>()
    const item: PriorityQueueItem<string> = ['first', 1]
    queue.enqueue(item)
    expect(queue.size()).toBe(1)
    expect(queue.dequeue()).toEqual(item)
    expect(queue.size()).toBe(0)
  })

  it(`.enqueue(item) should add (item: PriorityCollectionItem<T>) to the collection,
       respecting the priority of item`, () => {
    const queue = new PriorityQueue<string>()
    const firstLowPriorityItem: PriorityQueueItem<string> = ['1', 2]
    const secondHighPriorityItem: PriorityQueueItem<string> = ['2', 1]
    const item3: PriorityQueueItem<string> = ['3', 1]
    const item4: PriorityQueueItem<string> = ['4', 3]
    const item5: PriorityQueueItem<string> = ['5', 2]
    queue.enqueue(firstLowPriorityItem)
    queue.enqueue(secondHighPriorityItem)
    queue.enqueue(item3)
    queue.enqueue(item4)
    queue.enqueue(item5)
    expect(queue.size()).toBe(5)
    queue.printCollection()
    expect(queue.dequeue()).toEqual(secondHighPriorityItem)
    expect(queue.dequeue()).toEqual(item3)
    expect(queue.dequeue()).toEqual(firstLowPriorityItem)
    expect(queue.dequeue()).toEqual(item5)
    expect(queue.dequeue()).toEqual(item4)
    expect(queue.size()).toBe(0)
  })
})
