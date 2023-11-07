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

  at(index) {
    // returns the node at the give index
    if (index < 0 || index >= this.getSize()) return -1

    let currentNode = this.head
    let count = 0
    while (count < index) {
      currentNode = currentNode.nextNode
      count++
    }
    return currentNode
  }

  pop() {
    // removes the last element from the list
    if (this.head === null) return

    if (this.head.nextNode === null) {
      this.head = null
    } else {
      let currentNode = this.head
      let prevNode
      while (currentNode.nextNode) {
        prevNode = currentNode
        currentNode = currentNode.nextNode
      }
      prevNode.nextNode = null
    }
  }

  contains(value) {
    // returns true if value is in list or returns false
    let isPresent = false
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) isPresent = true
      currentNode = currentNode.nextNode
    }
    return isPresent
  }

  findIndexOf(value) {
    // returns index of the node containing value, or null if not found
    if (this.head === null) return null

    let index = 0
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value !== value) {
        index++
        currentNode = currentNode.nextNode
      } else if (currentNode.value === value) return index
    }
    return null
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let string = ''
    let currentNode = this.head
    while (currentNode) {
      string += `( ${currentNode.value} ) -> `
      currentNode = currentNode.nextNode
    }
    string += 'null'
    return string
  }

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index
    if (index < 0 || index >= this.getSize()) return

    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let currentNode = this.at(index)
      let prevNode = this.at(index - 1)
      prevNode.nextNode = node
      node.nextNode = currentNode
    }
  }
}
