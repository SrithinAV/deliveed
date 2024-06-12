import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({Url}) => {

 

 const [image,setImage] = useState(false);
 const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"salad"});

    const onChangeHandler = (event)=>
    {
       const name = event.target.name;
       const value = event.target.value;
       setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async() =>
    {
       
       const formDate = new FormData();
       formDate.append("name",data.name); 
       formDate.append("description",data.description);
       formDate.append("price", Number(data.price));
       formDate.append("category",data.category);
       formDate.append("image",image);
       
       console.log(formDate);
       const response = await axios.post(`${Url}/api/food/add`,formDate);
       if(response.data.success)
       {
          setData(
            {
              name:"",
              description:"",
              price:"",
              category:"salad"
            }
          )
          setImage(false);
          toast.success(response.data.message);
       }
       else
       {
        
         toast.error(response.data.message)
       }

    }
    useEffect(()=>
    {
       console.log(data);
    },[data])
  return (
    <div className='add'>
      <div className="add-container">
        <form onSubmit={onSubmitHandler} className="flex-col">
          <div className="upload-image flex-col">
            <p>Upload Image</p>
            <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image) :assets.upload_area}alt=''/>
            
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            

          </div>

          <div className="product-name flex-col">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required/>

          </div>

          <div className="product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows={6} placeholder='description' required/>
          </div>


           <div className="add-category-price">
           <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name='category'>
              <option value="Salad">Salad</option>
              <option value="Role">Role</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>

            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price}  type="number" name='price' placeholder='₹10' />
          </div>
          </div>

        <button type='submit' className='add-btn'>ADD</button>
        </form>
      </div>
      
    </div>
  )
}

export default Add
