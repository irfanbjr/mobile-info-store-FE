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
    const [error,setError]= React.useState('');

    useEffect(()=>
    {
        setError('')
       // console.log(param);
       //this fanction have API for update from field with concern 
        getProductDetails();
    }, []);

    const getProductDetails= async()=>
    {
        let result = await fetch(`http://localhost:5000/product/${param.id}`,{
            headers:
            {
            // this bearer is extra for more secure on BE side I removed this
            // so if any body genreate token and pass only token not with any other word with space
            // then will not work only token
            Authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            } 
        });
        result = await result.json();
        if(result)
        {
            setName(result.name);
            setPrice(result.price);
            setCategory(result.category);
            setCompany(result.company);
        }
        console.log(result);

        //console.log(result);
    }
    const handleUpdate= async()=>
    {
        if(!name|| !price|| !category|| !company)
        {
            setError(true);
            return false;

        }
        let result = await fetch(`http://localhost:5000/product/${param.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json",
                 // for token vrification
                 Authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
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
            {error && !name && <span className="invalid-input">Enter valid name </span>}

            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Price"/>
           
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Category"/>
           
          
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Company"/>
            
            <button onClick={handleUpdate} className="btnLogup" type="button">Update Product</button>
        </div>
       
    )
}

export default UpdateProduct;