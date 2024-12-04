import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom'
import Create from './crud/Create'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Read from './crud/Read'
import Update from './crud/Update'

 const RouterClassEx = () => {
  return (
    <div className='w-full h-screen flex flex-col   justify-center items-center'>
      <div className='flex flex-col gap-3'>
     
          <Routes>

           <Route>
              
              <Route path ="/" element={<Create/>}/>
              <Route path ="/read" element={<Read/>}/>
              <Route path ="/update/:id" element={<Update/>}/>
         
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />

          </Routes>
          <ToastContainer/>
      
      </div>
    </div>
  )
}
export default RouterClassEx