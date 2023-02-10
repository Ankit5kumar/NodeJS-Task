const categoryModel = require('../model/category.model')
  

// function for creating categories
exports.createCategory = async (req, res) => {
    const category = {
        categoryId:req.body.categoryId,
        categoryName:req.body.categoryName
    }
    try {
        if(!req.body.categoryId){
            res.status(404).send({msg:"Failed categoryId  is not porvided"})
        }
        if(!req.body.categoryName){
            res.status(404).send({msg:"Failed catergoryName is not porvided"})
        }
        const result = await categoryModel.create(category)
        res.status(200).send({msg:"categoryCreated",result})
    } catch (error) {
        res.status(404).send({msg:"internal server", error})
    }
}

// function for getAllCategory

exports.getAllCategory = async (req, res) => {
    // const query = {};
    // if(req.query.name!=undefined){
    //     query.name=req.query.name
    // }
    const Categories = await categoryModel.find();
    res.status(200).send(Categories);
}

// function for getByIdCategory

exports.getByIdCategory = async (req, res) => {
   try {
    const Category = await categoryModel.findOne({
        _id: req.params.id
    })
    res.status(200).send(Category);
   } catch (error) {
        res.status(404).send({msg:"internal server error"},error)    
   }
}

// function for getByIdCategory

exports.updateCategory = async (req,res)=>{
    try {
        const id = req.params.id;
    const savedCategory = await categoryModel.findOne({_id:id});
    if(!savedCategory){
        return res.status(404).send({msg:'savedCategory does not exist'})
    }

    savedCategory.categoryId = req.body.categoryId ? req.body.categoryId : savedCategory.categoryId;
    savedCategory.categoryName = req.body.categoryName ? req.body.categoryName : savedCategory.categoryName;

    
    const updatedCategory = await savedCategory.save();

    res.status(200).send(updatedCategory);
    } catch (error) {
        res.status(404).send({msg:"internal server error",error})
    }
}

// function for deleteCategory to delete all categories in the DB

exports.deleteCategory = async (req, res) => {
    try {
        const result  = await categoryModel.findByIdAndDelete({_id: req.params.id});
    res.status(200).send({msg:`sucessfull deleted Category with givenId`})
    } catch (error) {
        res.status(404).send({msg:"internal server error",error})
    }
}