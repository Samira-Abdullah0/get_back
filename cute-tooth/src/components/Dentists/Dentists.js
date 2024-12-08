import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import DentistDetails from "./DentistDetails";


function Dentists(){

    let [dentists,setdentists]=useState([]);

   async function getAllDentists(){
        let allDentists= await axios.get('http://localhost:4000/dentists');
        setdentists(allDentists.data);
    }
    useEffect(() => {getAllDentists()},[]);
   let[searchText, setSearchText]=useState('');
   function handelSearchTextChange(event){
    setSearchText(event.target.value);
   }
      async function Search(){
      let searchResult= await axios.get(`http://localhost:4000/dentists?q=${searchText}`)
      setdentists(searchResult.data);
      }

    function showDentists(){
        if(dentists.length>0){
          return( <div>

            <div className="home-dentist-cards">
            {dentists.map((dent) => (
            <div  className="cards-dentist" key={dent.id}>
            <div className="cards-dentist-images">
            <img src={dent.imageUrl}  />
            </div>
    
            <div>
            <p className="cards-title" style={{fontSize:"1.7em"}}>{dent.name} </p>
            <p className="description" style={{fontSize:"1.7em"}}><h5 style={{display :"inline-flex",fontSize:"1em"}}>
            specialty :</h5> {dent.specialty} </p>
            </div>

            <div class="d-flex justify-content-between align-items-center "style={{marginLeft:55,marginBottom:20}} >
            <div class="btn-group">
            <Link to={`/dentists/details/${dent.id}`} title="Details"> <button type="button" class="btn btn-sm btn-outline-secondary border border-5" style={{fontSize:"1.7em"}}>View</button></Link> 
                   
            <Link to={`/dentists/edit/${dent.id}`} title="Edit">
              <button type="button" class="btn btn-sm btn-outline-secondary border border-5" style={{fontSize:"1.7em"}}>Edit</button></Link>
              <Link to={`/dentists/delete/${dent.id}`} title="delete">
              <button type="button" class="btn btn-sm btn-outline-secondary border border-5" style={{fontSize:"1.7em"}}>remove</button></Link>
            </div></div>
            </div>
             ))}
           </div>  </div>);
        }else{
            return(<h1 className="alert alert-danger text-center m-3">
                <i className="bi bi-exclamation-triangle"></i>There Are No Customers to display </h1>)
        }
    }

    return(<div>
      <div >
      <h1 className="alert alert-secondary text-center m-3" > Our Dentists 
      <div className="input-group mb-3" style={{width:"25%",marginLeft:900 }}>
        <input type="text" className="form-control rounded" onChange={handelSearchTextChange}/>
        <button className="btn btn-outline-secondary mx-1 rounded" onClick={Search} > <i class="bi bi-search" style={{fontSize:"1.7em"}}> Search</i></button></div>
        <Link to={"/dentists/add"} className="btn btn-outline-secondary mb-4 " style={{width:"30%",marginLeft:700 ,fontSize:"1em" }}><i className="bi bi-person-plus-fill"> join to our Dentists</i></Link>
        </h1>
      </div>

      
      
      
     


     {showDentists()}

     <Footer/>
    </div>);
}
export default Dentists;


/**
 * <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={handelSearchTextChange}/>
        <button class="btn btn-outline-success" type="submit" onClick={Search}><i className="bi bi-search d-inline-flex"> Search</i></button>
      </form>
 * 
 * 
 */