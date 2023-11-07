import { Node } from './Node'

export class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    // adds a new node to the end of the list
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = node
    }
  }

  prepend(value) {
    // adds a new node to the start of the list
    const node = new Node(value)
    node.nextNode = this.head
    this.head = node
  }
}
