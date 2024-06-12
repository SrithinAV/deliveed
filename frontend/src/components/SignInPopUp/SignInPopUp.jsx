import React, { useState } from 'react'
import './SignInPopUp.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';


const SignInPopUp = ({setSignIn}) => {
  const [isSignIN, setIsSignIN] = useState(false)
  
  const {setTocken, Url} = useContext(StoreContext);
  
   const [data, setData] = useState({
    name:"",
    email:"",
    password:""
   })

 const onHandleClick = (event)=>
 {
    const {name, value} = event.target;
    

    setData((prev)=>
    ({
      ...prev,[name]:value
    }));
  }
    const onSubmitHandler = async(event)=>
    {
       event.preventDefault();
       let newurl = Url;
    //   console.log(data);
    //   const formData = new FormData();
    //   formData.append("name", data.name);
    //   formData.append("email", data.email);
    //   formData.append("password", data.password);
      
    //   formData.forEach(function(value, key){
    //     console.log(key, value);
    // });
      
    if(isSignIN)
    {
     
      newurl += '/api/user/login';

    }
    else
    {
      newurl +='/api/user/register';
    }
      const response = await axios.post(newurl,data);

      if(response.data.success)
      {
        setTocken(response.data.tocken);
        localStorage.setItem("tocken",response.data.tocken)
        setSignIn(false);
        setData(
          {
            name:"",
            email:"",
            password:""
          }
        )
        
      }
      else
      {
        alert(response.data.message);
      }
    }
      
    
  
 


  return (
    <div className='signin'>
     
      <form onSubmit={onSubmitHandler} className='login-container'>
      <div className="signin-heading">

       <h2>{isSignIN? "Login": "Sign Up"}</h2>
       <img  onClick = {()=>setSignIn(false)}src={assets.cross_icon} alt="" />
        
      </div>
      <div className="signin-form-input">
        {!isSignIN? <input onChange={onHandleClick} value={data.name} name='name' type='text' placeholder='Your Name' required />: <></>}
      
      <input onChange={onHandleClick} value={data.email} name='email' type ='email' placeholder='Your email' required />
      <input onChange={onHandleClick} value={data.password} name='password' type='password' placeholder='Your Password' required/>

      </div>
      <button type='submit' >{isSignIN? "Sign In": "Create Account"}</button>

      <div className="signIn-condition">
        <input type="checkbox" required />
        <p>By continuing, i agree to the terms of use & privacy policy </p>
      </div>
      <div className="signIn-SignUp-ask">
        {isSignIN?<p>Create a new account? <span onClick={()=>setIsSignIN(false)}>Sign Up</span> </p>: <p>Already have an account? <span onClick={()=>setIsSignIN(true)}>Login</span></p>}

        
      </div>
      </form>
    </div>
  )
}

export default SignInPopUp
