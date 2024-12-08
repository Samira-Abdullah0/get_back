import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";


function DetailsOfDentalLaboratory(){

    let[prodcutLab,setproductLab]=useState({id:0,name:'', imageURL:'' ,p1:'',p2:'',p3:'',p1Name:'',p2Name:'',p3Name:'',PriceOfp1:0,PriceOfp2:0,PriceOfp3:0})

    let{id}=useParams();
    async function getprodcutLab(){
       let dentiLab=await axios.get
       (`http://localhost:4000/dentalLab/${id}`);
       setproductLab(dentiLab.data);
    }
   useEffect(() =>{getprodcutLab()}, []);


    return(
        <div>
        <h1 className="alert alert-secondary text-center m-3">{prodcutLab.name} Products</h1>
        <div className="home-dentist-cards">
        <div  className="cards-dentist">

        <div className="cards-dentist-images">
        <img src={prodcutLab.p1}  />
        </div>

        <div style={{backgroundColor:"lightslategrey",marginTop:"60px"}}>
            <p className="cards-title" style={{fontSize:"2em"}}>Name: {prodcutLab.p1Name} </p>
            <p className="cards-title" style={{fontSize:"2em"}}>Price: $ {prodcutLab.PriceOfp1} </p>
              
        </div>
        </div>
        <div  className="cards-dentist">

        <div className="cards-dentist-images">
        <img src={prodcutLab.p2}  />
        </div>

        <div style={{backgroundColor:"lightslategrey",marginTop:"60px"}}>
            <p className="cards-title" style={{fontSize:"2em"}}>Name:  {prodcutLab.p2Name} </p>
            <p className="cards-title" style={{fontSize:"2em"}}>Price:  $ {prodcutLab.PriceOfp2} </p>
              
        </div>
        </div>
        <div  className="cards-dentist">

        <div className="cards-dentist-images">
        <img src={prodcutLab.p3}  />
        </div>

        <div style={{backgroundColor:"lightslategrey" ,marginTop:"60px"}}>
            <p className="cards-title" style={{fontSize:"2em"}}>Name:  {prodcutLab.p3Name} </p>
            <p className="cards-title" style={{fontSize:"2em"}}>Price:  $ {prodcutLab.PriceOfp3} </p>
              
        </div>
        </div>

       </div>
       <Footer/>
       </div>
    )
}
export default DetailsOfDentalLaboratory;