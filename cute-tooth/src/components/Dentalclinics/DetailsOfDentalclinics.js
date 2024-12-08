import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";

function DetailsOfDentalclinics(){

    let[ProductClinic,setProductClinic]=useState({id:0,name:'', imageURL:'' ,p1:'',p2:'',p1Name:'',p2Name:'',PriceOfp1:0,PriceOfp2:0})

 let{id}=useParams();
 async function getProductClinic(){
    let dentClinic=await axios.get
    (` http://localhost:4000/dentalClinics/${id}`);
    setProductClinic(dentClinic.data);
 }
useEffect(() =>{getProductClinic()}, []);



    return(
        <div>
        <h1 className="alert alert-secondary text-center m-3">{ProductClinic.name} Products</h1>
        <div className="home-dentist-cards">
        <div  className="cards-dentist">

        <div className="cards-dentist-images">
        <img src={ProductClinic.p1}  />
        </div>

        <div style={{backgroundColor:"lightslategrey" ,marginTop:"60px"}}>
            <p className="cards-title" style={{fontSize:"2em"}}>Name: {ProductClinic.p1Name} </p>
            <p className="cards-title" style={{fontSize:"2em"}}>Price: $ {ProductClinic.PriceOfp1} </p>
              
        </div>
        </div>
        <div  className="cards-dentist">

        <div className="cards-dentist-images">
        <img src={ProductClinic.p2}  />
        </div>

        <div style={{backgroundColor:"lightslategrey",marginTop:"60px"}}>
            <p className="cards-title" style={{fontSize:"2em"}}>Name:  {ProductClinic.p2Name} </p>
            <p className="cards-title" style={{fontSize:"2em"}}>Price:  $ {ProductClinic.PriceOfp2} </p>
              
        </div>
        </div>

       </div>
       <Link to='/dentalClinics'><button className="btn btn-outline-secondary" style={{ marginBottom :100}}><i className="bi bi-arrow-left-square-fill"></i> Back to List</button> </Link>
       <Footer/>
       </div>
        )
}
export default DetailsOfDentalclinics;