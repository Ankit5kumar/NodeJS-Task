const ProductModel  = require('../model/Product.model')

//function for creating Products in the DB

exports.createProduct = async (req,res)=>{
      try {
        const product = await ProductModel.create(req.body)
        res.status(200).send({msg:"Product created successfully",product})
      } catch (error) {
        res.status(500).send({msg:"internal server error",error})
      }
}

//function for gettingbyId Products From the  DB

exports.getProductById = async (req, res) => {
    try {
        const bookings = await ProductModel.findOne({_id:req.params.id});
        res.status(200).send(bookings);
    } catch (error) {
        res.status.send({msg:"internal server error"})
    }
}

//function for getting all Products From the  DB

exports.getallProduct = async (req,res)=>{
    try {
        const Products = await ProductModel.find({});
    res.status(200).send({msg:"here's the Products",Products})
    } catch (error) {
        res.status(404).send({msg:"internal server error",error})
    }
   }
//function for updating  Products by Id From the  DB

exports.updateProduct = async (req, res) => {
    const savedProduct = await ProductModel.findById({_id:req.params.id})
    if(!savedProduct){
        res.status(400).send({msg:"Invalid Id"})
    }

    savedProduct.productId = req.body.productId ? req.body.productId : savedProduct.productId;
    savedProduct.productName = req.body.productName ? req.body.productName : savedProduct.productName;
    savedProduct.qtyPerUnit = req.body.qtyPerUnit ? req.body.qtyPerUnit : savedProduct.qtyPerUnit;
    savedProduct.unitPrice = req.body.unitPrice ? req.body.unitPrice : savedProduct.unitPrice;
    savedProduct.unitInStock = req.body.unitInStock ? req.body.unitInStock : savedProduct.unitInStock;
    savedProduct.discontinued = req.body.discontinued ? req.body.discontinued : savedProduct.discontinued;
    savedProduct.categoryId = req.body.categoryId ? req.body.categoryId : savedProduct.categoryId;
    try {
        const updatedProduct = await savedProduct.save();
        res.status(201).send({msg:"product update successfully",updatedProduct})
    } catch (err) {
        res.status(500).send({msg:"internal error",err});
    }
}

//function for Deleting Products by Id From the  DB

exports.deleteProduct = async (req, res) => {
    try {
        const result  = await ProductModel.findByIdAndDelete({_id: req.params.id});
    res.status(200).send({msg:`sucessfull deleted movie with given Id ${req.params.id}`,result})
    } catch (error) {
        res.status(404).send({msg:"internal server error",error})
    }
}
   