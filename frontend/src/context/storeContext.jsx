
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>
{
     const Url = "http://localhost:4000"; 
    const [cartItem, setCartItem] = useState({});
    const [tocken, setTocken] = useState("");
    const [food_list, setFoodList] = useState([]);
   
    const fetchFoodData = async ()=>
    {
        const response = await axios.get(`${Url}/api/food/list`);
        setFoodList(response.data.data);
    }

    
    

    const addToCart = async (itemId)=>
    {
        console.log(cartItem[itemId]);
       if(!cartItem[itemId])
       {
         setCartItem((prev)=>({...prev,[itemId]:1}))
       }
       else
       {
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        
       }
       
       if(tocken)
       {
        await axios.post(`${Url}/api/cart/add`,{itemId},{headers:{tocken}})
         
       }
       
    }
    const removeCartItem = async (itemId)=>
    {
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]-1}))
        if(tocken)
       {
        await axios.post(`${Url}/api/cart/remove`,{itemId},{headers:{tocken}})
         
       }
    }

    const loadCartData = async (tocken)=>
    {
        if(tocken)
        {
            const response = await axios.post(`${Url}/api/cart/get`,{},{headers:{tocken}});
            console.log(response.data.cartData);
             setCartItem(response.data.cartData);

        }

    }

    const getTotalCartAmount = ()=>
    {
        let toatalAmount = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo = food_list.find((product)=>product._id===item)

                toatalAmount += itemInfo.price*cartItem[item];
    
            }
           
        }
        return toatalAmount;
    }

    

    useEffect(()=>
    {
        
        
        const loadFoodData = async ()=>
        {
           await fetchFoodData();
           if(localStorage.getItem("tocken"))
        {
            setTocken(localStorage.getItem("tocken"));
           await loadCartData(localStorage.getItem("tocken"));

          
        }
        }

        loadFoodData();

         
    },[])
       
    const contextValue = 
    {
       food_list,
       cartItem,
       setCartItem,
       addToCart,
       removeCartItem,
       getTotalCartAmount,
       tocken,
       setTocken,
       Url

    }

    useEffect(()=>{
   console.log(cartItem);
    },[cartItem]
    )
  
   

    return (
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider