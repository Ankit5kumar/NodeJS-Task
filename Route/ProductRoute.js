const express = require('express');
const Route = express.Router();
const ProductController = require('../controller/product')
Route.post('/Product/api/v1/CreateProduct',ProductController.createProduct);
Route.get('/Product/api/v1/getallProduct',ProductController.getallProduct);
Route.get('/Product/api/v1/getByIdProduct/:id',ProductController.getProductById);
Route.put('/Product/api/v1/updateProductById/:id',ProductController.updateProduct);
Route.delete('/Product/api/v1/DeleteProductById/:id',ProductController.deleteProduct);
module.exports = Route