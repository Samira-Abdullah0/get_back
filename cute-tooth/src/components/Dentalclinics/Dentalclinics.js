
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
function DentalClinics(){
    let [dentalClinics,setDentalClinics]=useState([]);
   async function getAllDentalClinics(){
        let allDentists= await axios.get('http://localhost:4000/dentalClinics');
        setDentalClinics(allDentists.data);
    }
    useEffect(() => {getAllDentalClinics()},[]);

  function showDentists(){
    if(dentalClinics.length>0){
        return(
            <div className="home-dental-cards">
            {dentalClinics.map((dent) => (
            <div  className="cards-dental" key={dent.id}>
            
            <div className="cards-dental-images">
            <img src={dent.imageURL} />
            </div>
    
            <div>
                <p className="cards-title" style={{fontSize:"2em"}}>{dent.name} </p>
               
               
            </div>
            <div class="d-flex align-items-center"style={{marginLeft:120,marginBottom:20}} >
            
              <Link to={`/dentalClinics/details/${dent.id}`}>
              <button type="button" class="btn btn-outline-secondary  border border-5" style={{fontSize:"1.7em"}}><i class="bi bi-eye-fill" style={{fontSize:"1.5em"}}></i> View Products </button>
              </Link>
            </div>
            </div>
    
             ))}
           </div>);
    }else{
        return(<h1 className="alert alert-danger text-center m-3">
            <i className="bi bi-exclamation-triangle"></i>There Are No Customers to display </h1>)
    }
}

    
    return(<div>
                      <div class="card bg-dark text-white mb-5 rounded-0">
  <img src="https://www.generationsdentalhartland.com/wp-content/uploads/2014/09/slider-equipment.jpg" style={{height: 340}} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <h1 className="text-center " style={{height:150 ,width: "100%",color:"darkslategray",fontFamily:"serif" ,fontSize:"3em"}}> Welcome to Dental Clinics Products</h1>
  </div>
</div>
      
     {showDentists()}

     <Footer/>

    </div>);
}
export default DentalClinics;
