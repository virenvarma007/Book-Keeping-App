const express=require('express')
const expressAsyncHandler = require('express-async-handler');
const authMiddlware = require('../middleware/authMiddlware');
const Book=require('../models/Book')

const bookRouter=express.Router();

bookRouter.post('/',authMiddlware,expressAsyncHandler(async(req,res)=>{
    const userId=req.user._id
    const book=await Book.create({
        title:req.body.title,
        category:req.body.category,
        createdBy:userId,
        author:req.body.author,
    });
    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('Book Creating Failed!')
    }
}))

bookRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.find({});
    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('There are No Such Books')
    }
}))

bookRouter.put('/:id',expressAsyncHandler(async(req,res)=>{
    const book=await Book.findById(req.params.id);
    if(book){
        const updatedBook=await Book.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json(updatedBook)
    }
     
    else{
        res.status(500);
        throw new Error('Update Failed')
    }
}))



bookRouter.delete('/:id',expressAsyncHandler(async(req,res)=>{
    try{
    const book=await Book.findByIdAndDelete(req.params.id)
    res.status(200).send(book)
    }
    catch(e){
     res.json(e)
    }
}))

module.exports=bookRouter;