import Home from '../components/Home'
import Product from '../pdp/Product'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Login from '../components/Login'
import Register from '../components/Register'
import Layout from './Layout'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/products/:id',
                element: <Product/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
])

export default router;