import React,{Fragment, useState} from 'react';
import { ChatEngine } from "react-chat-engine";
import SearchBar from './searchBar';
import MediaCard from './news';
import products from './items';
import {MyContext} from './global';

function Home(){

  const [Categorize,setCategorize] = useState('All');
  const [SearchItem,setSearchItem] = useState('');

  var fruits = products.filter((product)=>{
    return product.type === 'Fruit';
  })

  var vegetables = products.filter((product)=>{
    return product.type === 'Vegetable';
  })

  var searches = products.filter((product)=>{
     if(product.name.toLowerCase().includes(SearchItem.toLowerCase())){
       return product;
     }
  })

  console.log(searches);

  switch(Categorize){
    case 'All':
      if(SearchItem===''){
        return(
          <Fragment>
          <MyContext.Provider value={{Categorize,setCategorize,SearchItem,setSearchItem}}>
          <SearchBar/>
          
          <div className='card'>
          {products.map((product)=>{
            return <MediaCard product={product}/>
          })}
          </div>
      
          </MyContext.Provider>
          </Fragment>
        )
        
      }
      else{
        
          return(
            <Fragment>
            <MyContext.Provider value={{Categorize,setCategorize,SearchItem,setSearchItem}}>
            <SearchBar/>
            
            <div className='card'>
            {searches.map((search)=>{
              return <MediaCard product={search}/>
            })}
            </div>
        
            </MyContext.Provider>
            </Fragment>
          )
        
      }
      
    case 'Fruits':
      if(SearchItem === ''){
        return(
          <Fragment>
          <MyContext.Provider value={{Categorize,setCategorize,SearchItem,setSearchItem}}>
          <SearchBar/>
          
          <div className='card'>
          {fruits.map((fruit)=>{
            return <MediaCard product={fruit}/>
          })}
          </div>
      
          </MyContext.Provider>
          </Fragment>
        )
      }
      

      case 'Vegetables':
        if(SearchItem === ''){
          return(
            <Fragment>
            <MyContext.Provider value={{Categorize,setCategorize,SearchItem,setSearchItem}}>
            <SearchBar/>
            
            <div className='card'>
            {vegetables.map((vegetable)=>{
              return <MediaCard product={vegetable}/>
            })}
            </div>
        
            </MyContext.Provider>
            </Fragment>
          )
        }
        
  }
}

export default Home;