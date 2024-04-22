import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateFood = () => {

    let navigate=useNavigate();

    const CreateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        let foodName=formData.get("foodName");
        let foodCode=formData.get("foodCode");
        let foodImage=formData.get("foodImage");
        let foodCategory=formData.get("foodCategory");
        let quantity=formData.get("quantity");
        let price=formData.get("price");

        await axios.post("/api/create",{
            foodName:foodName,
            foodCode:foodCode,
            foodImage:foodImage,
            foodCategory:foodCategory,
            quantity:parseFloat(quantity),
            price:parseFloat(price)
        })
        navigate("/")
    }
    return (
        <div className="container mt-5" style={{height:"40vh", display:"flex", alignItems:"center"}}>
            <form onSubmit={CreateData}>
                <div className="row">
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Name</label>
                        <input className="form-control form-control-sm form_input" name="foodName" type="text"
                               placeholder="Food Name"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Image</label>
                        <input className="form-control form-control-sm form_input" name="foodImage" type="text"
                               placeholder="Food Image"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Code</label>
                        <input className="form-control form-control-sm form_input" name="foodCode" type="text"
                               placeholder="Food Code"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Category</label>
                        <input className="form-control form-control-sm form_input" name="foodCategory" type="text"
                               placeholder="Food Category"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Quantity</label>
                        <input className="form-control form-control-sm form_input" name="quantity" type="text"
                               placeholder="Food Quantity"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Price</label>
                        <input className="form-control form-control-sm form_input" name="price" type="text"
                               placeholder="Food Price"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-sm mt-3 btn-success" style={{backgroundColor:"#5A67BA", padding:"10px 40px",color:"white"}}>Submit</button>
            </form>
        </div>
    )
};

export default CreateFood;