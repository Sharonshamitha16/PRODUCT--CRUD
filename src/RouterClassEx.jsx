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
        <ContextComp>
          <Routes>

            <Route path='/' element={<IndexComponent />} />
            <Route path='/listandkeys' element={<ListAndKeys />} />
            <Route path="/UseEffectSample" element={<UseEffectSample />} />
              <Route path='/contextcomp' element={<ContextComp><App/></ContextComp> }/>
              <Route path ="/controlledcomp" element={<ControlledComponent/>}/>
              <Route path ="/uncontrolledcomp" element={<UncontrolledComponent/>}/>
              
              <Route path ="/" element={<Create/>}/>
              <Route path ="/read" element={<Read/>}/>
              <Route path ="/update/:id" element={<Update/>}/>
             <Route path="/CounterApp" element={<CounterApp />} />
            <Route path='/nav' element={<Home />}>
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />

          </Routes>
          <ToastContainer/>
        </ContextComp>
      </div>
    </div>
  )
}
export default RouterClassEx