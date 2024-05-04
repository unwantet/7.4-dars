import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages';

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
          path : '/product/:id',
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
