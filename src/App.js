import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Portfolio from './Components/Portfolio/Portfolio'
import Notfound from './Components/Notfound/Notfound'



let routers = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {path:"home" , element:<Home/>},
    {path:"About" , element:<About/>},
    {path:"Contacts" , element:<Contacts/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"*" , element:<Notfound/>}
  ]}
])
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
