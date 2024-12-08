import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";



function DentalLaboratory(){
    let [dentalLab,setDentalLab]=useState([]);
   async function getAllDentalLab(){
        let allDentists= await axios.get('http://localhost:4000/dentalLab');
        setDentalLab(allDentists.data);
    }
    useEffect(() => {getAllDentalLab()},[]);


  function showDentalLab(){

    if(dentalLab.length>0){
        return(
            <div className="home-dental-cards">
            {dentalLab.map((prodLab) => (
            <div  className="cards-dental" key={prodLab.id}>
            
            <div className="cards-dental-images">
            <img src={prodLab.imageURL} />
            </div>
    
            <div>
                <p className="cards-title" style={{fontSize:"2em"}}>{prodLab.name} </p>
               
            </div >
            <div class="d-flex align-items-center "style={{marginLeft:130,marginBottom:20}} >
            <div class="btn-group">
              <Link to={`/dentalLaboratory/details/${prodLab.id}`}>
              <button type="button" class="btn btn-outline-secondary border border-5" style={{fontSize:"1.7em"}}><i class="bi bi-eye-fill"> View Products </i></button>
              </Link>
              
              
            </div>
            </div>
            </div>
    
             ))}
           </div>);
    }else{
        return(<h1 className="alert alert-danger text-center m-3">
            <i className="bi bi-exclamation-triangle"></i>There Are No Dentistal Clinics Products to display </h1>)
    }
}

//add
    
    return(<div>
                            <div class="card bg-dark text-white mb-5 rounded-0">
  <img src="https://static.wixstatic.com/media/b29f55_504525b6566c4b0eaf1211be626d306c~mv2.jpg/v1/fill/w_896,h_681,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b29f55_504525b6566c4b0eaf1211be626d306c~mv2.jpg" style={{height: 300}} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <h1 className="text-center " style={{height:150 ,width: "100%",color:"darkslategray",fontFamily:"serif"}}> Welcome to Dental Laboratories Products</h1>
  </div>
</div>
      
     {showDentalLab()}

     <Footer/>
    </div>);
}
export default DentalLaboratory;