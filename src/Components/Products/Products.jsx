 
import React, { useContext, useEffect, useState } from 'react';
 
 
import { Link } from 'react-router-dom';
 import { cartContext } from '../../Context/CartContext';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
 
export default function Products( ) {
    let[products,setProducts] = useState([])
    let[loading,setLoading] = useState(true)
     
   async function getProducts() {
   let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
   setProducts(data.data)
   setLoading(false)
   }
   useEffect(()=>{
    getProducts()
   },[])
   if(loading) return <Loading/>

   return<>
   
   <div className="container">
    <div className="row">
      {products.map((item)=>{
        return <Product item={item} key={item._id}/> 
      })}
    </div>
   </div>
   </>
  // return <>
  
    

  //   <div className="col-md-2">
  //       <div className="product cursor-pointer rounded-3 p-3">
       
  //         <Link to={'/ProductsDetails/' +item._id}>

  //         <img src={item.imageCover} className='w-100' alt="" />
  //         <span className='text-main'>{item.category.name}</span>
  //         <h6 className='fw-bold my-2'>{item.title.split(' ').slice(0,2).join(' ')}</h6>
  //         <div className='d-flex justify-content-between my-3'>
  //           <div>{item.price}EGP</div>
  //           <div>
  //             <i className="fa-solid fa-star rating-color"></i>
  //             {item.ratingsAverage}
  //           </div>
          
  //         </div>
  //         </Link>
  //         <button onClick={()=> (addProductToCart(item._id))} className='btn bg-main text-white w-100'>Add to cart </button>

          
  //       </div>
  //     </div>
  
     
  
    
  //   </>
}
