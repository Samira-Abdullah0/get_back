import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditDentist(){
  
    let[dentist,setDentist]=useState({name:'',specialty:'',email:'',phone:'',imageUrl:'',address:''});
    let{id}=useParams();
    
    async function getDentist(){
       let dent =await axios.get(` http://localhost:4000/dentists/${id}`);
      setDentist(dent.data);
   }
   useEffect(()=>{getDentist()},[]);
    
   let navigate=useNavigate();

    function handleChange(event)
    {
        
       // dentist[event.target.name]=event.target.value;
       setDentist({ ...dentist, [event.target.name]: event.target.value });
    
    }
    function handleSubmit(){
        axios.put(`http://localhost:4000/dentists/${id}`,dentist);
        navigate("/dentist");
    }
 

    return(<div>
        <h1 className="alert alert-success text-center m-3 ">Edit Dentist's Data</h1>
        <div className="shadow p-3 m-3 bg-body rounded col-6">
  <form className="col-4 m-2 rounded  "  onSubmit={handleSubmit} >
        <div>
      <label className="form-label" style={{float:"left"}}>Name</label>
      <input type="text" name="name" value={dentist.name} className="form-control" onChange={handleChange} placeholder="type your name here" ></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Email</label>
      <input type="email" name="email" value={dentist.email} className="form-control" onChange={handleChange}></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Address</label>
      <input type="text" name="address" value={dentist.address} className="form-control" onChange={handleChange} ></input>
      </div>
      <div>
      <label className="form-label" style={{float:"left"}}>Specialty</label>
      <input type="text" name="specialty" value={dentist.specialty} className="form-control" onChange={handleChange} ></input>
      </div>
      <div>
      <label className="form-label" style={{float:"left"}}>Phone</label>
      <input type="text" name="phone" value={dentist.phone} className="form-control" onChange={handleChange} ></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Image Url</label>
      <input type="text" name="imageUrl" className="form-control" onChange={handleChange} value={dentist.imageUrl}  ></input>
      </div>
      <button type="submit" className="btn btn-success w-50 m-5" style={{float:"left"}} ><i className="bi bi-pencil-square"></i> Edit </button>
    
    </form></div>
         </div>)

}
export default EditDentist;