type Nullable<T> = T | null

export class Node<T> {
  constructor(
    public data: T,
    public left: Nullable<Node<T>> = null,
    public right: Nullable<Node<T>> = null,
  ) {
    this.data = data
    this.left = left
    this.right = right
  }
}
