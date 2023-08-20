import React, { useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom"


const UpdateProduct=()=>
{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const param = useParams();
    const navigate = new useNavigate();

    useEffect(()=>
    {
       // console.log(param);
       //this fanction have API for update from field with concern 
        getProductDetails();
    }, []);

    const getProductDetails= async()=>
    {
        let result = await fetch(`http://localhost:5000/product/${param.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

        //console.log(result);
    }
    const handleUpdate= async()=>
    {
        let result = await fetch(`http://localhost:5000/product/${param.id}`,{
            method:"Put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result= await result.json();
        navigate('/')
        //if(!name|| !price|| !category|| !company)
        console.log(result )
    }

    return(
        <div className="product">
            <h1>Update Product</h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Name"/>

            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Price"/>
           
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Category"/>
           
          
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Company"/>
            
            <button onClick={handleUpdate} className="btnLogup" type="button">Update Product</button>
        </div>
       
    )
}

export default UpdateProduct;