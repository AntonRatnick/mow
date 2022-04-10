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
  })
})
