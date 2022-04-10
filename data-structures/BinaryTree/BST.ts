import { Node } from './node'

export class BST<T> {
  public root: Nullable<Node<T>> = null

  public add(data: T): Node<T> {
    const node = this.root
    if (node === null) {
      return (this.root = new Node(data))
    } else {
      const searchTree = (node: Node<T>): Node<T> => {
        if (data < node.data) {
          if (node.left === null) {
            return (node.left = new Node(data))
          } else if (node.left) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return (node.right = new Node(data))
          } else if (node.right) {
            return searchTree(node.right)
          }
        }
        return node
      }

      return searchTree(node)
    }
  }

  public findMin(): Nullable<Node<T>> {
    let node: Nullable<Node<T>> = this.root
    do {
      node = node?.left ?? null
    } while (node?.left)
    return node
  }

  public findMax(): Nullable<Node<T>> {
    let node: Nullable<Node<T>> = this.root
    do {
      node = node?.right ?? null
    } while (node?.right)
    return node
  }
}
