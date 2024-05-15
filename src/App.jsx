import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

//pages
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages';

// components
import {ErrorElement} from './components';

//loader 
import { loader as productsLoader } from './pages/Landing';

 function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout/>,
      errorElement: <Error/>
      ,
      children: [
        {
          index: true,
          element: <Landing/>,
          errorElement: <ErrorElement/>,
          loader: productsLoader
        },
        
        {
          path : '/products',
          element: <Products/>,
        },
        {
          path : '/about',
          element: <About/>,
        },
        {
          path : '/products/:id',
          element: <SingleProduct/>,
        },
        {
          path : '/cart',
          element: <Cart/>,
        },
        {
          path : '/checkout',
          element: <Checkout/>,
        },
        {
          path : '/orders',
          element: <Orders/>,
        },
      ],
    },
    {
      path: '/login',
      element: <Login/>,
      errorElement: <Error/>
    },
    {
      path: '/register',
      element: <Register/>,
      errorElement: <Error/>
    }
  ]);
  

  return  <RouterProvider router={routes}/>
}

export default App;  
