# NodeJS-Task


Overview
This project is a Node.js application that provides a REST API to interact with a database. It includes features for creating, reading, updating, and deleting records from the database.

Prerequisites
Before you begin, make sure that you have the following software installed on your system:

Node.js
NPM
MongoDB
Getting started
Clone the repository
Use Git to clone the repository to your local machine.

shell
Copy code
$ git clone https://github.com/<username>/<project-name>.git
Install dependencies
Change to the project directory and run the following command to install the dependencies:

ruby
Copy code
$ npm install
Set up the environment
Create a .env file in the project root directory with the following contents:

makefile
Copy code
DB_URL=mongodb://localhost/<database-name>
PORT=3000
Replace <database-name> with the name of your MongoDB database.

Start the server
To start the server, run the following command in the terminal:

ruby
Copy code
$ npm start
The server should now be running on http://localhost:3000.

API Reference
The following is a list of the available API endpoints:

Method	Endpoint	Description
POST	/create	Creates a new product in the database.
GET	/read/:id	Reads a product from the database by its id.
GET	/readAll	Reads all products from the database.
PUT	/update/:id	Updates a product in the database by its id.
DELETE	/delete/:id	Deletes a product from the database by its id.
