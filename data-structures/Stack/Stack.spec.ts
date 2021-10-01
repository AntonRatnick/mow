import { Stack } from './Stack'

describe('Stack', () => {
  it('should add element on top of the stack with push method', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
  })

  it('should remove element from top of the stack and return it with pop method', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
  })

  it('should return element from top of the stack with peek method', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.peek()).toBe(2)
    stack.pop()
    expect(stack.peek()).toBe(1)
  })

  it('should return size of the stack with size method', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.pop()
    expect(stack.size()).toBe(1)
  })

  it('should return size of the stack with size method', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBeTruthy()
    stack.push(1)
    expect(stack.isEmpty()).toBeFalsy()
    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()
  })
})
