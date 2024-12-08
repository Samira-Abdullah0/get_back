import Footer from "./Footer";

function ContactUs(){
    return(<div >
     
    <img src="https://www.dentaltix.com/en/sites/default/files/contacto-en.png" style={{width:"100%"}} />
     
     <div>
     <div class="card w-75" style={{marginTop:70,marginLeft:150,height:600,marginBottom:70,background:"lightgray"}}>
  <div class="row g-0">
    
    <div class="col-md-8">
    <div className="shadow p-3 m-3 bg-body rounded " >
  <form className="col-4 m-2 rounded w-75 " >
        
        <div>
      <label className="form-label" style={{float:"left"}}>Name*</label>
      <input type="text" className="form-control" required></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Email*</label>
      <input type="email" className="form-control" required></input>
      </div>

      <div>
      <label className="form-label" style={{float:"left"}}>Address</label>
      <input type="text" className="form-control" ></input>
      </div>
     
      <div>
      <label className="form-label" style={{float:"left"}}>Phone</label>
      <input type="text"  className="form-control"></input>
      </div>

      <div class="mb-3">
  <label for="exampleFormControlTextarea1" style={{float:"left"}}  class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="text" className="form-control mt-4 w-25 btn btn-outline-secondary" style={{marginRight:370}}> SEND</button>
</div>
      
    
    </form></div>
    </div>
    <div class="col-md-4">
    <div className="mt-5">
<h5 style={{color:"darkslategrey",fontFamily:"cursive",fontStyle:"-moz-initial", marginBottom:20 ,fontWeight:"bold"}} >contact us:</h5>
<div className="col-3 mt-5 d-inline">
<h5 style={{color:"darkgrey",fontFamily:"cursive",fontStyle:"-moz-initial", marginBottom:1 ,fontWeight:"bold"}}  >Address:</h5>
<p style={{color:"darkslategrey" ,fontFamily:"cursive"}} >1061 South Roselle Road
Schaumburg, IL 60193.</p>
</div>
<ul style={{listStyleType:"none", color:"darkslategrey" ,fontFamily:"cursive"}}>       
        <li><a href="#" style={{color:"darkslategrey",textDecoration:"none"}}><i className="bi bi-envelope"></i> info@cute-tooth-software.com</a></li>
         <li><i className="bi bi-phone"></i> 0099887766</li>
        <li><i className="bi bi-telephone"> 005544332211</i></li>  
        </ul>
        <div>
        <a className="text-white m-2" href="https://www.facebook.com"><i className="bi bi-facebook " style={{color:"darkslategrey",fontSize:26}}></i></a>
    <a className="text-white m-2" href="https://www.google.com"><i className="bi bi-google" style={{color:"darkslategrey",fontSize:23}}></i></a>
     <a className="text-white m-2" href="https://www.linkedin.com"><i className="bi bi-linkedin" style={{color:"darkslategrey",fontSize:23}}></i></a>
     <a className="text-white m-2" href="https://www.linkedin.com"><i className="bi bi-youtube" style={{color:"darkslategrey",fontSize:26}}></i></a>
        </div>
</div>
    </div>
  </div>
</div>
     
     </div>
     <Footer/>
      </div>);
}
export default ContactUs;