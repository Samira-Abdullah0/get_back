import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddDentist(){
    let[dentist,setDentist]=useState({name:'',specialty:'',email:'',phone:'',imageUrl:'',address:''});
    let navigate=useNavigate();

    function handleChange(event)
    {
        
        dentist[event.target.name]=event.target.value;
    
    }
    function handleSubmit(){
        axios.post(' http://localhost:4000/dentists',dentist);
        navigate("/dentist");
    }
    

return(<div>
  <h1 className="alert alert-secondary text-center m-3"> join  Dentists </h1>  
  <div className="shadow p-3 m-3 bg-body rounded col-6">
  <form className="col-4 m-2 rounded  "  onSubmit={handleSubmit} >
        <div>
      <label className="form-label" style={{float:"left"}}>Name</label>
      <input type="text" name="name" className="form-control" onChange={handleChange} placeholder="type your name here" required></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Email</label>
      <input type="email" name="email" className="form-control" onChange={handleChange}></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Address</label>
      <input type="text" name="address" className="form-control" onChange={handleChange} required></input>
      </div>
      <div>
      <label className="form-label" style={{float:"left"}}>Specialty</label>
      <input type="text" name="specialty" className="form-control" onChange={handleChange} required ></input>
      </div>
      <div>
      <label className="form-label" style={{float:"left"}}>Phone</label>
      <input type="text" name="phone" className="form-control" onChange={handleChange} required></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Image Url</label>
      <input type="text" name="imageUrl" className="form-control" onChange={handleChange} required ></input>
      </div>
      <button type="submit" className="btn btn-success w-50 m-5" style={{float:"left"}} ><i className="bi bi-plus-square"></i> Add </button>
    
    </form></div>
    
</div>)
}
export default AddDentist;
