import { Stack } from './Stack'

describe('Stack<T>', () => {
  it('.push(el) should add (element: T) on top of the stack', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
  })

  it('.pop() should remove (element: T) from top of the stack and return it', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
  })

  it('.peek() should return (element: T) from top of the stack', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.peek()).toBe(2)
    stack.pop()
    expect(stack.peek()).toBe(1)
  })

  it('.size() should return (size: number) of the stack', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.pop()
    expect(stack.size()).toBe(1)
  })

  it('.isEmpty() should return (isEmpty: boolean), true if empty collection', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBeTruthy()
    stack.push(1)
    expect(stack.isEmpty()).toBeFalsy()
    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()
  })
})
