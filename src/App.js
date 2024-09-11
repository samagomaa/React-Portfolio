import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Notfound from './Components/Notfound/Notfound'



let routers = createHashRouter([
  {path:"/" , element:<Layout/> , children:[
    {path:"/" , element:<Home/>},
    {path:"About" , element:<About/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"*" , element:<Notfound/>}
  ]}
])
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
