# mocking-with-node-test-runner-template

Initial template for my youtube video on [unit testing services (databases, files, web APIs, etc) - pt-br](https://bit.ly/testes-em-servicos-video).

First of all, leave a star in this repo ⭐️

# Overview

This project presents a comprehensive template for unit testing services such as databases, files, and web APIs, demonstrated through a YouTube video. This project is designed to help you understand the intricacies of unit testing in a practical, hands-on manner. The codebase includes a simple todo list application that uses a LokiJS database to store todo items. The application is built using Node.js and provides a clear example of how to structure your code for unit testing.

# Technologies and Frameworks

- **Node.js**: The project is built using Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is used to run the main "index.js" file.
- **LokiJS**: LokiJS is a fast, in-memory document-oriented datastore for Node.js, browser and Cordova. It is used as the database for storing todo items in this project.
- **recorded**: This is the main package of the project. It is a module type package that requires Node.js version 20.5.0.
- **crypto**: This is a built-in module of Node.js used for generating cryptographically strong random values. In this project, it is used to generate unique IDs for todo items.
- 
# Installation

Follow these steps to install and run the project:

## Prerequisites

Ensure that you have Node.js version 20.5.0 or higher installed on your machine. You can check your Node.js version by running the following command in your terminal:

```bash
node --version
```

## Clone the Repository

First, clone the repository to your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/ErickWendel/mocking-with-node-test-runner-template.git
```

## Install Dependencies

Navigate into the cloned repository's directory:

```bash
cd your-repo-name
```

Then, install the project's dependencies. This includes the "lokijs" package version 1.5.12 or higher. Run the following command in your terminal:

```bash
npm ci --silent
```

## Run the Project

Now that all the prerequisites and dependencies are installed, you can start the project. Run the following command in your terminal:

```bash
npm start
```

# Usage

This section provides examples of how to use the code assets in this project. 

## Using the TodoRepository Class

The `TodoRepository` class is used to interact with the database. Here's an example of how you can use it:

```javascript
import TodoRepository from './TodoRepository'

const db = /* provide your database instance here */

const todoRepo = new TodoRepository({ db })

// Create a new todo
const todoData = { name: 'XuxaDaSilva', age: 90 }
todoRepo.create(todoData)

// List all todos
const todos = await todoRepo.list()
console.log('list', todos)
```

In the above code snippet, replace `/* provide your database instance here */` with the actual database instance you are using. 

The `create` method is used to add a new todo to the database. The `list` method is used to retrieve all todos from the database.

## Thanks!

Consider mentioning me on [Twitter](https://twitter.com/erickwendel_/), [linkedin](https://linkedin.com/in/erickwendel/), or [instagram](https://www.instagram.com/erickwendel_/) about the experiments and ideas this repo may have brought to you.

Enjoy!
