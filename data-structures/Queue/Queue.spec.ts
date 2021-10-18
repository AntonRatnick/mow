import { Queue } from './Queue'

describe('Queue<T>', () => {
  it('.enqueue(el) should add (element: T) as last element in queue', () => {
    const queue = new Queue()
    queue.enqueue('first')
    expect(queue.size()).toEqual(1)
    expect(queue.isEmpty()).toBeFalsy()
  })
  it('.dequeue() should remove first (element: T) from queue and return it', () => {
    const queue = new Queue()
    queue.enqueue('first')
    expect(queue.size()).toEqual(1)
    expect(queue.dequeue()).toEqual('first')
    expect(queue.size()).toEqual(0)
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('.front() should return first (element: T) from queue', () => {
    const queue = new Queue()
    queue.enqueue('first')
    queue.enqueue('second')
    expect(queue.front()).toEqual('first')
  })

  it('.size() should return (size: number) elements count from queue', () => {
    const queue = new Queue()
    queue.enqueue('first')
    expect(queue.size()).toEqual(1)
    queue.enqueue('second')
    expect(queue.size()).toEqual(2)
  })

  it('.isEmpty() should return true, if queue is empty', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBeTruthy()
    queue.enqueue('first')
    expect(queue.isEmpty()).toBeFalsy()
  })

  it('.print() should log first (element: T) from queue', () => {
    const spy = jest.spyOn(global.console, 'log')
    const queue = new Queue()
    queue.enqueue('first')
    queue.print()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
