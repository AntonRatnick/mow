import { Node } from './node'
import { BST } from './BST'

describe('BST', () => {
  describe('.add<T>', () => {
    it('Should add new root if tree has no root and return it', () => {
      const bst = new BST()
      expect(bst.root).toBeNull()
      const newNode = bst.add(5)

      expect(newNode.data).toBe(5)
      expect(newNode.left).toBeNull()
      expect(newNode.right).toBeNull()

      expect(bst.root).toEqual(new Node(5))
    })

    it('Should add new node to the left if node is less then root', () => {
      const bst = new BST()
      expect(bst.root).toBeNull()
      const newNode = bst.add(5)
      bst.add(3)

      expect(newNode.data).toBe(5)
      expect(newNode.left).toEqual(new Node(3))
      expect(newNode.right).toBeNull()
    })

    it('Should add new node to the right if node is more then root', () => {
      const bst = new BST()
      expect(bst.root).toBeNull()
      const newNode = bst.add(5)
      bst.add(100)

      expect(newNode.data).toBe(5)
      expect(newNode.left).toBeNull()
      expect(newNode.right).toEqual(new Node(100))
    })

    it('Should add new node for several nested levels', () => {
      const bst = new BST()
      expect(bst.root).toBeNull()
      const newNode = bst.add(5)
      bst.add(3)
      bst.add(1)
      bst.add(100)
      bst.add(80)
      bst.add(180)

      expect(newNode.data).toBe(5)
      expect(newNode.left).toEqual(new Node(3, new Node(1)))
      expect(newNode.right).toEqual(new Node(100, new Node(80), new Node(180)))
    })
  })

  describe('findMin', () => {
    it('Should find min node in the tree', () => {
      const bst = new BST()
      bst.add(3)
      bst.add(1)
      bst.add(180)
      bst.add(-1)
      bst.add(100)
      bst.add(80)
      bst.add(180)
      expect(bst.findMin()).toEqual(new Node(-1))
    })

    it('Should return null for empty tree', () => {
      const bst = new BST()
      expect(bst.findMin()).toBeNull()
    })
  })

  describe('findMax', () => {
    it('Should find max node in the tree', () => {
      const bst = new BST()
      bst.add(3)
      bst.add(1)
      bst.add(180)
      bst.add(-1)
      bst.add(100)
      bst.add(80)
      bst.add(180)
      expect(bst.findMax()).toEqual(new Node(180, new Node(100, new Node(80))))
    })

    it('Should return null for empty tree', () => {
      const bst = new BST()
      expect(bst.findMax()).toBeNull()
    })
  })

  describe('find', () => {
    it('Should find node in the tree', () => {
      const bst = new BST()
      bst.add(3)
      bst.add(1)
      bst.add(180)
      bst.add(-1)
      bst.add(100)
      bst.add(80)
      bst.add(180)
      expect(bst.find(180)).toEqual(new Node(180, new Node(100, new Node(80))))
    })

    it('Should return null for empty tree', () => {
      const bst = new BST()
      expect(bst.find(100)).toBeNull()
    })
  })
})
