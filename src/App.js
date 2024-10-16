import React from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import WishList from './Components/WishList/WishList'
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import AuthLayout from './Layouts/AuthLayout'
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';
import Address from './Components/Address/Address';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import CartContextProvider from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import FullCat from './Components/FullCat/FullCat';

let routes =createBrowserRouter([

  {path:'/', element:<AuthLayout/> , children:[
    {index:true , element: <Register/> },
    {path: 'Login' , element: <Login/> },
    {path:'Logout' , element:<Logout />},
    
    
    
     
  ]},
  {path:'/', element:<MainLayout/> , children:[
    {index: true , element: <ProtectedRoutes><Home/></ProtectedRoutes>},
    {path: 'Home' , element: <ProtectedRoutes><Home/></ProtectedRoutes>},
    {path:'Brands' , element:<ProtectedRoutes><Brands/></ProtectedRoutes>},
    {path:'Products' , element:<ProtectedRoutes><Products/></ProtectedRoutes>},
    {path:'Categories' , element:<ProtectedRoutes><Categories/></ProtectedRoutes>},
    {path:'FullCat' , element:<ProtectedRoutes><FullCat/></ProtectedRoutes>},
    {path:'Cart' , element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
    {path:'WishList' , element:<ProtectedRoutes><WishList/></ProtectedRoutes>},
    {path:'ProductsDetails/:id' , element:<ProtectedRoutes><ProductsDetails/></ProtectedRoutes>},
    {path:'Address/:id' , element:<ProtectedRoutes><Address/></ProtectedRoutes>},
    {path:'*' , element:<Notfound />},
    
     
  ]},
  
])

function App() {

  
  return<>

       <CartContextProvider>
        <RouterProvider router={routes}></RouterProvider>
       </CartContextProvider>
          
        <ToastContainer theme='colored' autoClose='900'/>
  
   

   
   </>
}

export default App;
