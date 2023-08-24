import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
const Productlist = () => {
    const [products,setProducts]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>
    {
        
        getProducts();
        
    },[]);// this [] to call once
    //getProducts();

    const getProducts=async ()=>
    {
        let result= await fetch('http://localhost:5000/products',
        {
          headers:
          {
            // this bearer is extra for more secure on BE side I removed this
            // so if any body genreate token and pass only token not with any other word with space
            // then will not work only token
            Authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
       // rsult have in readstream form data so we need to convert into json
        result= await result.json();
        setProducts(result);
    }
    console.log("Products", products) 
    const Delete= async(id)=>   
    {
    
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete",
            headers:
            {
              // this bearer is extra for more secure on BE side I removed this
              // so if any body genreate token and pass only token not with any other word with space
              // then will not work only token
              Authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        if(result)
        {
           getProducts();
           console.log('Record Deleted');
            //alert('Record is deleted')
        }

    }
    const handleLink = (id) => {
      navigate(`/update/${id}`);
     // return <Link className='btnList-link' to={`/update/${id}`}>Update</Link>;
    };
    const handleDelete=(id)=>
    {
      Delete(id);
    }
    const handelSearch= async(event)=>
    {
        let key =event.target.value;
        if(key)
        {
            let result= await fetch(`http://localhost:5000/search/${key}`,{
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
                setProducts(result);
            }
            console.log(result)
        }
        else{
            getProducts();
        }
    }

  return (
    <div className='product-list'>
      <h1 className='listHeader'>Product list</h1>
      <input onChange={handelSearch} className='search-product' type='text' placeholder='Search Product'/>

      {/* to show data we make static list */}
      <ul>
        <li className='listHeader'>S. No</li>
        <li className='listHeader'>Name</li>
        <li className='listHeader'>Price</li>
        <li className='listHeader'>Category</li>
        <li className='listHeader'>Company</li>
        <li className='listHeader'>Operation</li>
      </ul>
      {
        // this loog will one by one item
       //the below is if else condition also
        products.length>0?
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
        <li><button className='btnList' onClick={() => handleDelete(item._id)} >Delete</button>
        <button className='btnList' onClick={() => handleLink(item._id)} >Update</button>
        </li>
      </ul>
        )
       // the below is else condition when have no search item
        :<h1>
            No Result Found
        </h1>
      }
    </div>
  )
}

export default Productlist;
