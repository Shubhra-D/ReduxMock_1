import { Route, Routes } from 'react-router-dom'
import {Navbar} from '../src/pages/Common/Navbar'
import './App.css'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CheckOut } from './pages/CheckOut'
import { OrderSucces } from './pages/OrderSucces'

function App() {
  
  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/order-success' element={<OrderSucces/>}/>
      </Routes>
    </>
  )
}

export default App
