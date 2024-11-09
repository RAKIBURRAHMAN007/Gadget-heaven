import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader : () => fetch('/gadgetsData.json')
        
      },
     
      {
        path: '/products_details/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgetsData.json')

      },
      {
        path: 'aboutUs',
        element: <AboutUs></AboutUs>

      },
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path:'/',
            element: <Main></Main>,
            loader: () => fetch('/category.json'),

            
          }
        ]
        

      },


    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
