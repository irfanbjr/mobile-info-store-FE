import React from "react";


const Addproduct=()=>
{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');

    const [error,setError]= React.useState('')
    const handleAdd= async()=>
    {
        //Note:if one of the is empty will return true
        if(!name|| !price|| !category|| !company)
        {
            setError(true);
            return false;

        }
        //console.log(name,price,category,company)
        let result=await fetch('http://localhost:5000/add-product',{
                method:'post',
                //but we cannot send like this api not accept this
                //body:name,price,category,company

                //because API accept JSON format this will work
                body:JSON.stringify({name,price,category,company}),
                headers:{
                    "Content-Type":"application/json"
                },
            });
        result= await result.json();
        console.log(result);
    }
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Name"/>
            {/* //for error  & error, field name for when try to submit without text */}
            {error && !name && <span className="invalid-input">Enter valid name </span>}

            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Price"/>

            {error && !price &&<span className="invalid-input">Enter valid price </span>}
            
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Category"/>
           
            {error && !category &&<span className="invalid-input">Enter valid categori </span>}
            
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className="inputBox" type="text" placeholder="Enter Product Company"/>
            
            {error && !company && <span className="invalid-input">Enter valid company </span>}
            
            <button onClick={handleAdd} className="btnLogup" type="button">Add Product</button>
        </div>
       
    )
}

export default Addproduct;