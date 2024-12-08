import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import OurServices from './components/Services';
import PageNotFound from './components/PageNotFound';
import AboutUs from './components/AboutUs';
import DentalClinics from './components/Dentalclinics/Dentalclinics';
import DentalLaboratory from './components/DentalLaboratory/DentalLaboratory';
import Dentists from './components/Dentists/Dentists';
import Products from './components/my-cart-list/Products';
import CartListProducts from './components/my-cart-list/CartListProducts';
import DentistDetails from './components/Dentists/DentistDetails';
import DetailsOfDentalLaboratory from './components/DentalLaboratory/DetailsOfDentalLaboratory';
import DetailsOfDentalclinics from './components/Dentalclinics/DetailsOfDentalclinics';
import AddDentist from './components/Dentists/AddDentist';
import EditDentist from './components/Dentists/Editdentists';
import DeleteDentist from './components/Dentists/deleteDentist';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contact' element={<ContactUs/ >}></Route>
    <Route path='/About' element={<AboutUs/>}></Route>
    <Route path='/dentalClinics' element={<DentalClinics/>}></Route>
    <Route path='/dentalLab' element={<DentalLaboratory/>}></Route>
    <Route path='/dentist' element={<Dentists/>}></Route>
    <Route path='/Products' element={<Products/>}></Route>
    <Route path='/cartList' element={<CartListProducts/>}></Route>
    <Route path='/dentists/details/:id' element={<DentistDetails/>}></Route>
    <Route path='/dentalLaboratory/details/:id' element={<DetailsOfDentalLaboratory/>}></Route>
    <Route path='/dentalClinics/details/:id' element={<DetailsOfDentalclinics/>}></Route>
       <Route path='/dentists/add' element={<AddDentist/>}></Route>
       <Route path='/dentists/edit/:id' element={<EditDentist/>}></Route>
    <Route path='/dentists/delete/:id' element={<DeleteDentist/>}></Route> 

    <Route path='*' element={<PageNotFound/>}></Route>
   
  
      </Routes>
      </BrowserRouter>
   </div>
   
  );
  
}

export default App;

// route بنعمل ال   div  جوه ال 