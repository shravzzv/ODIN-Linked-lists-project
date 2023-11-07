import { Node } from '../src/Node'

describe('Node class tests', () => {
  it('should create a node with the given value', () => {
    const value = 42
    const node = new Node(value)
    expect(node.value).toBe(value)
  })

  it('should set nextNode property correctly', () => {
    const node1 = new Node(1)
    const node2 = new Node(2, node1)
    expect(node2.nextNode).toBe(node1)
  })

  it('should create a node with null value if no value is provided', () => {
    const node = new Node()
    expect(node.value).toBeNull()
  })

  it('should create a node with null nextNode if no nextNode is provided', () => {
    const node = new Node(1)
    expect(node.nextNode).toBeNull()
  })
})
