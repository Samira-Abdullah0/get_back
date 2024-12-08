import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";
function DentistDetails(){
   let[dentist,setDentist]=useState({id:0,name:'',specialty:'',email:'',phone:'',imageUrl:'',address:''});
   let{id}=useParams();


   async function getDentist(){
      let dent =await axios.get(` http://localhost:4000/dentists/${id}`);
     setDentist(dent.data);
  }
  useEffect(()=>{getDentist()},[]);

    return(<div>
        <h1 className="alert alert-success text-center m-3">{dentist.name} </h1> 
        <div class="card mb-3 " style={{minWidth:100}}>
  <div class="row g-0 ">
    <div class="col-md-4 cards-dentist-images ">
      <img src={dentist.imageUrl} class="img-fluid rounded-0 " alt="..."/>
    </div>
    <div class="col-md-8 justify-content-center">
      <div class="card-body">
      <h5 class="card-title"><p style={{display : "inline",marginTop:1,color: "darkcyan",fontSize : 20}}>ID:</p> {dentist.id}</h5>
        <h5 class="card-title"><p style={{display : "inline", color: "darkcyan",fontSize : 20}}>Name:</p>{dentist.name}</h5>
        <h5 class="card-title"><p style={{display : "inline", color: "darkcyan",fontSize : 20}}>Specialty:</p> {dentist.specialty}</h5>
       
       
        <h5 class="card-title"><p style={{display : "inline", color: "darkcyan",fontSize : 20}}>Email:</p> {dentist.email}</h5>
        <h5 class="card-title"><p style={{display : "inline",color: "darkcyan",fontSize : 20}}>Phone:</p>  {dentist.phone}</h5>
        <h5 class="card-title"><p style={{display : "inline",color: "darkcyan",fontSize : 20}}>Address:</p> {dentist.address}</h5>
      
       
      </div>
    </div>
  </div>
</div>
      
     <Link to='/dentist'><button className="btn btn-outline-secondary" style={{marginBottom: 130}}><i className="bi bi-arrow-left-square-fill"></i> Back to List</button> </Link>
         
     <Footer/>
    </div>)
}
export default DentistDetails;
