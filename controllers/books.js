const Book = require('../models/book')


const getAllBooks = async(req,res) =>{
    try{
        const books = await Book.find({})
        res.status(200).json({books})
    }catch(error){
     res.status(500).json({msg : error})
    }
} 

const createBook = async (req, res) =>{
    try{
        const book = await Book.create(req.body);
        res.status(201).json({book})
    }catch(error){
        res.status(400).json(error.errors.name.message)
    }
}


const updateBook = async (req, res) =>{
    
    try{
        const {id:bookID} = req.params;
        const updatedBook = await Book.findOneAndUpdate({_id:bookID}, req.body,{
            new:true, runValidators: true
        })
        if(!updatedBook){
            return res.status(404).json({msg: `No Blog with id: ${bookID}`})
        }
        res.status(200).json({updatedBook});
    }catch(error){
       res.status(404).json({msg:error})
    }
}

const getBook = async (req, res) =>{
    const {id:bookID} = req.params;
    try{
        const singleBook = await Book.findOne({_id:bookID});
        if(!singleBook){
            return res.status(404).json({msg: `No blog with id: ${bookID}`})
        }
        console.log(singleBook);
        res.status(200).json({singleBook})
        
    }catch(error){
        res.status(500).json({msg:error})
    }
}


const deleteBook = async(req, res) =>{
    const {id:bookID} = req.params;
    try{
        const singleBook = await Book.findOneAndDelete({_id:bookID});
        if(!singleBook){
              return res.status(404).json({msg: `No blog with id: ${bookID}`})
        }
        res.status(200).json({singleBook})
        
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {getAllBooks, getBook, createBook, deleteBook, updateBook, updateBook}