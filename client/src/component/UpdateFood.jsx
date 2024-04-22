import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";




const UpdateFood=()=>{
    let navigate=useNavigate();
    let{id}=useParams()

    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.get(`/api/readbyid/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(()=>{
    (async ()=>{
        await ExistingInfo(id)
    })()
    }, [])

    const UpdateData=async (event)=>{
        event.preventDefault();
        let formData=new FormData(event.target);
        let foodName=formData.get("foodName");
        let foodCode=formData.get("foodCode");
        let foodImage=formData.get("foodImage");
        let foodCategory=formData.get("foodCategory");
        let quantity=formData.get("quantity");
        let price=formData.get("price");

        await axios.post(`/api/update/${id}`,{
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
            <form onSubmit={UpdateData}>
                <div className="row">
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Name</label>
                        <input defaultValue={Existing !== null ? (Existing['foodName']) : ("")}
                               className="form-control form-control-sm form_input" name="foodName" type="text"
                               placeholder="Food Name"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Image</label>
                        <input defaultValue={Existing !== null ? (Existing['foodImage']) : ("")}
                               className="form-control form-control-sm form_input" name="foodImage" type="text"
                               placeholder="Food Image"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Code</label>
                        <input defaultValue={Existing !== null ? (Existing['foodCode']) : ("")}
                               className="form-control form-control-sm form_input" name="foodCode" type="text"
                               placeholder="Food Code"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Category</label>
                        <input defaultValue={Existing !== null ? (Existing['foodCategory']) : ("")}
                               className="form-control form-control-sm form_input" name="foodCategory" type="text"
                               placeholder="Food Category"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Quantity</label>
                        <input defaultValue={Existing !== null ? (Existing['quantity']) : ("")}
                               className="form-control form-control-sm form_input" name="quantity" type="text"
                               placeholder="Food Quantity"/>
                    </div>
                    <div className="col-md-4">
                        <label style={{fontWeight:"500", marginBottom:"10px"}}>Food Price</label>
                        <input defaultValue={Existing !== null ? (Existing['price']) : ("")}
                               className="form-control form-control-sm form_input" name="price" type="text"
                               placeholder="Food Price"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-sm mt-3 btn-success" style={{backgroundColor:"#5A67BA", padding:"10px 40px",color:"white"}}>Update</button>
            </form>
        </div>
    )
};

export default UpdateFood;