import { LinkedList } from './LinkedList'

const myList = new LinkedList()
myList.append('sai shravan 1')
myList.append('sai shravan 2')
myList.append('sai shravan 3')

myList.insertAt('sai shravan 4', 1)

console.log(myList.getHead())
console.log(myList.toString())
