

# NodeJS-Task

Overview
This project is a Node.js application that provides a REST API to interact with a database. It includes features for creating, reading, updating, and deleting records from the database

## Prerequisites
Before you begin, make sure that you have the following software installed on your system:

Node.js

NPM

MongoDB
## Getting started

### Clone the repository

Use Git to clone the repository to your local machine.

$ git clone https://github.com/Ankit5kumar/NodeJS-Task.git

## Install dependencies

### $ npm install

## Set up the environment

Create a .env file in the project root directory with the following contents:

DB_URL=mongodb://localhost/<database-name>
PORT=4000

Replace <database-name> with the name of your MongoDB database.


## Start the server

$ npm start


The server should now be running on http://localhost:4000.

## API Reference

#### Geting Products

```http
  The following is a list of the available API endpoints for the /ProductRoutes
```

| Method | Endpoint   | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | ` /Product/api/v1/CreateProduct /` | a new product in the database. |
| `GET` | `/Product/api/v1/getallProduct` | Reads all products from the database. |
| `GET` | ` /Product/api/v1/getByIdProduct/:id` |Reads a product from the database by its id.|
| `PUT` | `/Product/api/v1/updateProductById/:id	 ` |  Updates a product in the database by its id |
| `DELETE` | `/Product/api/v1/DeleteProductById/:id` |  Deletes a product from the database by its id. |

#### Geting Category

```http
  The following is a list of the available API endpoints for the CategoryRoutes
```
| Method | Endpoint   | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/Category/api/v1/CreateCategory/` | a new Category in the database. |
| `GET` | `/Category/api/v1/GetallCategory/` | Reads all Category from the database. |
| `GET` | ` /Category/api/v1/getByIdCategory/:id	` | Reads a Category from the database by its id.|
| `PUT` | `/Category/api/v1/updateByIdCategory/:id	 ` |  Updates a Category in the database by its id.|
| `DELETE` | `/Category/api/v1/deleteByIdCategory/:id` |  Deletes a Category/from the database by its id.|




