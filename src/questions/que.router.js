const {Router}=require("express");
const questions=require("./que.module");

const quesRoute=Router();

quesRoute.get("/",async(req,res)=>{
    try{
        const ques=await questions.find();
        const filters=req.query;
        const filteredData=ques.filter(data=>{
            let isValid=true;
            for(let key in filters){
                isValid=isValid && data[key]==filters[key];
            }
            return isValid;
        });
        // console.log(ques);
        // console.log(filteredData);
        res.send(filteredData);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports=quesRoute;