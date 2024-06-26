import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Cart from './pages/Cart'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux'

function App() {
  

  return (
    <div className="App">

      <Provider store={store}>
           
      <BrowserRouter> 
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
      </BrowserRouter>
      
      </Provider>

      
        
    </div>
     
  
  )
}

export default App
