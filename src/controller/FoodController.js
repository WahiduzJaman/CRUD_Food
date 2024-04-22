const FoodModel=require("../model/FoodModel");

exports.Create=async (req,res)=>{
    try {
        let reqBody=req.body;
        await FoodModel.create(reqBody);
        return res.status(200).json({status:"Successfully Data Created", message:"Create Request Complete"})
    }catch (e){
        return res.status(200).json({err:e.toString()})
    }
}


exports.Read=async(req,res)=>{
    try{
        let rows=await FoodModel.find();
        return res.status(200).json({status:"Successfully Read",message:"Read Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.ReadByID=async(req,res)=>{
    try{
        let {id}=req.params
        let rows=await FoodModel.find({_id:id});
        return res.status(200).json({status:"Successfully Read By Id",message:"Read Id Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.Update=async(req,res)=>{
    try{

        let {id}=req.params
        let reqBody=req.body;
        await FoodModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"Successfully Updated",message:"Update Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.Delete=async(req,res)=>{
    try{
        let {id}=req.params
        await FoodModel.deleteOne({_id:id});
        return res.status(200).json({status:"Successfully Deleted",message:"Delete Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}