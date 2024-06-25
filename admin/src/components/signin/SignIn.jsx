import React, { useEffect, useState } from 'react'
import './SignIn.css'
import { assets } from '../../assets/assets';
import axios from 'axios';

const SignIn = ({setSignin}) => {

   const [data, setData] = useState(
    {
      password:"",
      name:"",
      email:""
    }
   )

   const [signUp, setSignUp] = useState(false);
 
    const onHandleClick = (event)=>
    {
        const {name,value} = event.target;

       setData((prev)=>(
        {
          ...prev, [name]:value
        }
       ))
    }
  
    const toggleSignUP = ()=>
    {

      setSignUp(!signUp);
    }

    const onSubmit = async(event)=>
    {
        event.preventDefault();

        if(signUp)
        {
          const response = await axios.post("http://localhost:4000/api/admin/register",data);
          if(response.data.success)
          {
            setSignin(true);
          }
          else
          {
            alert(response.data.message);
          }
        }
      
        else
        {
        const response = await axios.post("http://localhost:4000/api/admin/login",data);
        if(response.data.success)
        {
          setSignUp(false);
          setSignin(true);
          sessionStorage.setItem('isLoggedIn', 'true');
          
        setData(
          {
            name:"",
            password:"",
            email:""
          }
        )
        }
        else
        {
          alert(response.data.message);
        }
        
        }

       
      
    }
   

  return (
    <div>
        <div className="signin-container">
        <img src={assets.logo} alt="" />
            <form onSubmit={onSubmit} className='form-container'>
                <div className='form-container-flex'>
                    
                <h2>Admin</h2>
                {signUp && <div className='signup'> 
                  <input type="text" onChange={onHandleClick} value={data.name} name='name' placeholder='name' /> 
                  <input type="email" onChange={onHandleClick} value={data.email} name='email' placeholder='email' />
                  </div>
                  }
                <input type="password" onChange={onHandleClick} value={data.password} name='password' placeholder='password' />
                <button type='submit'>Submit</button>
                {signUp?<p className='no-account'>Already have  an account? <span className='no-account-span' onClick={toggleSignUP}>click here</span></p>:
                <p className='no-account'>don't have an account? <span className='no-account-span' onClick={toggleSignUP}>click here</span></p>}
                
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn
