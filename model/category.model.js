const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating the Schema
const categorySchema = new Schema({
    categoryId: 
    { 
      type: String, 
      required: true, 
      unique: true 
    },

    categoryName: 
    { 
      type: String, 
      required: true 
    },
    
    createdAt:{
      type:Date,
      immutable:true,
      default: ()=>{
          return Date.now();
      }
  },
  updatedAt:{
      type:Date,
      default:()=>{
          return Date.now();
      }
  }
  });

 module.exports = mongoose.model("Category", categorySchema);

 