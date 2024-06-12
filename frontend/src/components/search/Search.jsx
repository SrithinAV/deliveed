import React, { useState, useEffect, useContext } from 'react'
import './Search.css'
import { assets } from '../../assets/assets'
import SearchItem from '../searchItem/SearchItem'
import { StoreContext } from '../../context/storeContext'

const Search = ({ setSearch }) => {
   
  const [searchValue, setSearchValue] = useState();
  const [searchBackground, setsearchBackground] = useState(false);
  const {food_list, Url} = useContext(StoreContext); 
  const url = `${Url}/images/`;


  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  function handleChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  const filteredFoodList = food_list.filter(item =>
    item.name.toLowerCase().includes(searchValue && searchValue.toLowerCase())
  );

return (
  <div className="search">
    <div className='search-container'>
      <input onChange={handleChange} type="text" placeholder='search' value={searchValue} />
      <img onClick={()=>setSearch(false)} src={assets.cross_icon} alt='' />
    </div>
    
    <div className={searchBackground?"search-content": ""}>
      
      <div className="search-item-list"> {/* Modified: removed container div */}
        {filteredFoodList.map((item, index) => (
          <SearchItem setSearchBackground={setsearchBackground} key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={url+item.image}/>
        ))}
      </div>
    </div>
  </div>
);
}

export default Search
