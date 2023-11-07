# Implementing a linked list in JS

## Description

This project implements a linked list in JavaScript. It provides various methods to manipulate the linked list, such as appending and prepending nodes, getting the size, retrieving the head and tail nodes, accessing nodes at specific indices, checking if a value exists, finding the index of a value, converting the linked list to a string, inserting nodes at specific indices, and removing nodes at specific indices.

This project was a part of The Odin Project. Check the [Project Source](https://www.theodinproject.com/lessons/javascript-linked-lists).

## Features

The [LinkedList](src/LinkedList.js) has the following methods:

- `append(value)`: Adds a new node to the end of the list.
- `prepend(value)`: Adds a new node to the start of the list.
- `getSize()`: Returns the total number of nodes in the list.
- `getHead()`: Returns the first node in the list.
- `getTail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns true if the value is in the list, otherwise returns false.
- `findIndexOf(value)`: Returns the index of the node containing the specific value, or null if not found.
- `toString()`: Represents the linked list as a string, displaying the nodes' values.
- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.

## Technologies Used

![JavaScript](https://skillicons.dev/icons?i=js)
![Git](https://skillicons.dev/icons?i=git)
![Webpack](https://skillicons.dev/icons?i=webpack)
![Jest](https://skillicons.dev/icons?i=jest)
![Babel](https://skillicons.dev/icons?i=babel)

## Installation

To install the project, follow these steps:

```bash
git clone https://github.com/shravzzv/ODIN-Linked-lists-project
cd ODIN-Linked-lists-project
npm install
```

## Usage

```bash
npm run watch
npm run dev
```

## How to Contribute

If you'd like to contribute, follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork locally.

   ```bash
   git clone https://github.com/shravzzv/ODIN-Linked-lists-project
   cd ODIN-Linked-lists-project
   ```

3. Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature-or-bug-fix-name
   ```

4. Make your changes, commit them, and push them to your fork.

   ```bash
   git add .
   git commit -m "Your commit message here"
   git push origin feature-or-bug-fix-name
   ```

5. Open a Pull Request on GitHub, comparing your branch to the original repository's `main` branch.

## Issue Tracker

Find a bug or want to request a new feature? Please let us know by submitting an issue.

- [Issue Tracker](https://github.com/shravzzv/ODIN-Linked-lists-project/issues)

## License

This project is licensed under the BSD License - see the [LICENSE.md](LICENSE.md) file for details.

---
