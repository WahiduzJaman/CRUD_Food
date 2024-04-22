import React, {useEffect, useState} from 'react';
import axios from "axios";
import loader from "../loader/loader.jsx";
import {Link} from "react-router-dom"
import "../assets/css/style.css"


const ReadFood = () => {

    const [Data,SetData]=useState([])
    const [refresh,setRefresh]= useState(true)

    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, [refresh]);

    const ReadData=async ()=>{
        let res=await axios.get(`/api/read`)
        let AllProduct=res.data['row']
        SetData(AllProduct)
    }

    const DeleteData=async (id)=>{
        await axios.get(`/api/delete/${id}`)
            .then((res)=>{
            setRefresh(false)
        }).catch((err)=>{
            console.log(err)
            })
    }


    return (
        <div>
            {Data.length===0?(<loader/>):(
                <div className="container" style={{marginTop:"110px"}}>
                    <div className="row">
                        <h3 className='text-xl font-semibold capitalize '>All Foods</h3>
                        {
                            Data.map((item) => {
                                return (
                                    <div key={item['_id']} className="col-md-3 p-1">
                                        <div className="card p-3 food_card">
                                            <img className="img-fluid" style={{height: "200px",marginBottom: "15px", borderRadius:"10px"}} alt="" src={item['foodImage']}/>
                                            <h3 style={{marginBottom:"20px"}}>{item['foodName']}</h3>
                                            <h6 className="food_price"> TK:-
                                                <span>{item['price']}</span>
                                            </h6>
                                            <div className="d-flex">
                                                <div>
                                                    <Link className="btn btn-sm" style={{
                                                        backgroundColor: "#F5F7FA",
                                                        padding: "7px 25px",
                                                        color: "info",
                                                        marginRight:"10px"
                                                    }} to={`/update/${item['_id']}`}>Edit</Link>
                                                </div>
                                                <div>
                                                    <button style={{
                                                        backgroundColor: "#FEE2E2",
                                                        padding: "7px 25px",
                                                        color: "red"
                                                    }} onClick={() => DeleteData(item['_id'])}
                                                            className="btn btn-sm">Delete
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReadFood;