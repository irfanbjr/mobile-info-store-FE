import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
const Productlist = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>
    {
        
        getProducts();
        
    },[]);// this [] to call once
    //getProducts();

    const getProducts=async ()=>
    {
        let result= await fetch('http://localhost:5000/products');
       // rsult have in readstream form data so we need to convert into json
        result= await result.json();
        setProducts(result);
    }
    console.log("Products", products) 
    const Delete= async(id)=>   
    {
    
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete",

        });
        result= await result.json();
        if(result)
        {
           getProducts();
            //alert('Record is deleted')
        }

    }
    const handleDelete=(id)=>
    {
        console.log('delete event called')
        Delete(id);
    }
  return (
    <div className='product-list'>
      <h1>Product list</h1>

      {/* to show data we make static list */}
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li >Operation</li>
      </ul>
      {
        // this loog will one by one item
        products.map((item,index)=>
        <ul  key={item._id}>
        <li>{index+1 }</li>
        <li>{item.name}</li>
        <li>${item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
        {/* This click must be by refrenc other wise not working will
         delete all record it once i.e if call "onClick=handleDelete(item._id)} will not work fine 
         the below Arrow calling must" */}
        <li><button onClick={() => handleDelete(item._id)} >Delete</button>
        <Link to={"/update/"+item._id}>Update</Link>
        </li>
      </ul>
        )
      }
    </div>
  )
}

export default Productlist;
