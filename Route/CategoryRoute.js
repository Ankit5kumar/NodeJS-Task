const express = require('express');
const Route = express.Router();
const CategoryController = require('../controller/Category')

Route.post('/Category/api/v1/CreateCategory/',CategoryController.createCategory);
Route.get('/Category/api/v1/GetallCategory/',CategoryController.getAllCategory);
Route.get('/Category/api/v1/getByIdCategory/:id',CategoryController.getByIdCategory);
Route.put('/Category/api/v1/updateByIdCategory/:id',CategoryController.updateCategory);
Route.delete('/Category/api/v1/deleteByIdCategory/:id',CategoryController.deleteCategory);


module.exports = Route