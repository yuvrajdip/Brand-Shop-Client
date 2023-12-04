import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayOut from './layout/MainLayOut'
import Home from './pages/Home'
import AddProducts from './pages/AddProducts'
import MyCart from './pages/MyCart'
import Products from './pages/Products'
import UpdatePage from './pages/UpdatePage'
import ProductDetails from './pages/ProductDetails'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AuthProvider from './AuthProvider/AuthProvider'
import ErrorPage from './pages/ErrorPage'
import PrivateRoute from './components/PrivateRoute'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProducts",
        element: <PrivateRoute>
          <AddProducts></AddProducts>
        </PrivateRoute>
      },
      {
        path: "/myCart/:email",
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/userCart/${params.email}`)
      },
      {
        path: "/products/:brandName",
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/products/${params.brandName}`)
      },
      {
        path: "/updateProduct/:id",
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/productsBy/${params.id}`),
        element: <PrivateRoute>
          <UpdatePage></UpdatePage>,
        </PrivateRoute>
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>,
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-yuvrajdip.vercel.app/productsBy/${params.id}`)
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
