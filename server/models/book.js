import mongoose from "mongoose";
const bookSchema =new mongoose.Schema({
    name:String,
    genre:String,
    authorID:String
})

const Book=mongoose.model("Book",bookSchema);

export default Book;