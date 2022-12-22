const mongoose=require("mongoose");

const queSchema=new mongoose.Schema({
    category:{type:String},
    difficulty:{type:String},
    question:{type:String},
    correct_answer:{type:String},
    options:{type:Array}
});

const questions=mongoose.model("question",queSchema);

module.exports=questions;