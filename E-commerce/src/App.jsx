
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import ProductDetails from './components/ProductDetails'
import Admindashbord from './components/Admindashbord'
import LogIn from './components/LogIn'
import Register from './components/Register'
import Wishlist from './components/Wishlist'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path='products/:id' element={<Wishlist/>}/>
      <Route path='/login' element={<LogIn/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/admindashboard' element={<Admindashbord/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
