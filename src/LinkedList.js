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

  getSize() {
    // returns the total number of nodes in the list
    if (this.head === null) return 0
    else {
      let count = 1
      let currentNode = this.head
      while (currentNode.nextNode) {
        count++
        currentNode = currentNode.nextNode
      }
      return count
    }
  }

  getHead() {
    // returns the first node in the list
    return this.head
  }

  getTail() {
    // returns the last node in the list
    if (this.head === null) return null
    else {
      let currentNode = this.head
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      return currentNode
    }
  }
}
