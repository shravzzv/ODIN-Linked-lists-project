import { LinkedList } from '../src/LinkedList'

describe('LinkedList class tests', () => {
  it('should create an empty linked list', () => {
    const list = new LinkedList()
    expect(list.head).toBeNull()
  })

  it('should append a node to an empty list', () => {
    const list = new LinkedList()
    list.append(42)
    expect(list.head).not.toBeNull()
    expect(list.head.value).toBe(42)
    expect(list.head.nextNode).toBeNull()
  })

  it('should append nodes to a non-empty list', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)

    let currentNode = list.head
    expect(currentNode.value).toBe(1)

    currentNode = currentNode.nextNode
    expect(currentNode.value).toBe(2)

    currentNode = currentNode.nextNode
    expect(currentNode.value).toBe(3)
    expect(currentNode.nextNode).toBeNull()
  })

  it('should prepend a node to an empty list', () => {
    const list = new LinkedList()
    list.prepend(42)
    expect(list.head).not.toBeNull()
    expect(list.head.value).toBe(42)
    expect(list.head.nextNode).toBeNull()
  })

  it('should prepend nodes to a non-empty list', () => {
    const list = new LinkedList()
    list.append(2)
    list.prepend(1)
    list.prepend(0)

    let currentNode = list.head
    expect(currentNode.value).toBe(0)

    currentNode = currentNode.nextNode
    expect(currentNode.value).toBe(1)

    currentNode = currentNode.nextNode
    expect(currentNode.value).toBe(2)
    expect(currentNode.nextNode).toBeNull()
  })

  it('should return zero as the size of an empty list', () => {
    const list = new LinkedList()
    expect(list.getSize()).toBe(0)
  })

  it('should return the correct size of an non empty list', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.getSize()).toBe(3)
  })

  it('should return null when getting head of an empty list', () => {
    const list = new LinkedList()
    expect(list.getHead()).toBeNull()
  })

  it('should return the head node when the list is not empty', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    expect(list.getHead().value).toBe(1)
  })

  it('should return null when getting tail of an empty list', () => {
    const list = new LinkedList()
    expect(list.getTail()).toBeNull()
  })

  it('should return the last node when the list is not empty', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.getTail().value).toBe(3)
  })

  it('should return -1 when accessing a node at a negative index', () => {
    const list = new LinkedList()
    expect(list.at(-1)).toBe(-1)
  })

  it('should return -1 when accessing a node at an index larger than the list size', () => {
    const list = new LinkedList()
    list.append(1)
    expect(list.at(1)).toBe(-1)
  })

  it('should return the correct node when accessing a valid index', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.at(1).value).toBe(2)
  })

  it('should do nothing when trying to remove an element from an empty list', () => {
    const list = new LinkedList()
    list.pop()
    expect(list.getHead()).toBeNull()
  })

  it('should remove the last element from a list with one element', () => {
    const list = new LinkedList()
    list.append(1)
    list.pop()
    expect(list.getHead()).toBeNull()
  })

  it('should remove the last element from a list with multiple elements', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    list.pop()
    expect(list.getTail().value).toBe(2)
  })

  it('should return false when checking for a value in an empty list', () => {
    const list = new LinkedList()
    expect(list.contains(42)).toBe(false)
  })

  it('should return true when checking for a value present in the list', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.contains(2)).toBe(true)
  })

  it('should return false when checking for a value not present in the list', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.contains(42)).toBe(false)
  })

  it('should return null when checking for the index of a value in an empty list', () => {
    const list = new LinkedList()
    expect(list.findIndexOf(42)).toBeNull()
  })

  it('should return the correct index when checking for the index of a value present in the list', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.findIndexOf(1)).toBe(0)
    expect(list.findIndexOf(2)).toBe(1)
    expect(list.findIndexOf(3)).toBe(2)
  })

  it('should return null when checking for the index of a value not present in the list', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    expect(list.findIndexOf(5)).toBeNull()
  })

  it('should return a string null when converting an empty list to string', () => {
    const list = new LinkedList()
    expect(list.toString()).toBe('null')
  })

  it('should return the correct string when converting a list to a string', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    expect(list.toString()).toBe('( 1 ) -> ( 2 ) -> null')
  })

  it('should not insert a node into an empty list', () => {
    const list = new LinkedList()
    list.insertAt(2, 0)
    expect(list.getSize()).toBe(0)

    list.insertAt(1, -1)
    expect(list.getSize()).toBe(0)

    list.insertAt(2, 2)
    expect(list.getSize()).toBe(0)
  })

  it('should insert a node to a list containing a single node at the correct index', () => {
    const list = new LinkedList()
    list.append(1)
    list.insertAt(2, 0)
    expect(list.at(0).value).toBe(2)
    expect(list.at(1).value).toBe(1)
  })

  it('should insert a node to a list containing multiple nodes at the correct index', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    list.append(5)
    list.insertAt(4, 3)
    expect(list.at(2).value).toBe(3)
    expect(list.at(3).value).toBe(4)
    expect(list.at(4).value).toBe(5)
  })

  it('should not remove at an index from an empty list', () => {
    const list = new LinkedList()
    list.removeAt(2)
    expect(list.getSize()).toBe(0)

    list.removeAt(-1)
    expect(list.getSize()).toBe(0)

    list.removeAt(1)
    expect(list.getSize()).toBe(0)
  })

  it('should replace the head when index is passed as zero to removeAt()', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.removeAt(0)
    expect(list.at(0).value).toBe(2)
  })

  it('should remove nodes from the correct indices', () => {
    const list = new LinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    list.append(4)

    list.removeAt(1)
    expect(list.at(1).value).toBe(3)

    list.removeAt(1)
    expect(list.at(1).value).toBe(4)
  })
})
