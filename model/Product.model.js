const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  qtyPerUnit: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  unitInStock: { type: Number, required: true },
  discontinued: { type: Boolean, required: true },
  categoryId: {  type:mongoose.SchemaTypes.ObjectId, required: true,ref: "Category" }
});



module.exports = mongoose.model("Product", productSchema);



