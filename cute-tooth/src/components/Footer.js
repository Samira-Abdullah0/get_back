function Footer(){
    return(
        <div className="card text-white rounded-0" style={{height:450,backgroundColor:"darkslategray"}}>
        <div className="row col-12">

<div className="col-4">
<img src="https://www.logolynx.com/images/logolynx/4d/4d7ac641fa1a1187bdc52679c39187c1.png" style={{width:149,marginRight:100}}/>
<h5 style={{color:"darkgrey",fontFamily:"serif",fontStyle:"italic", marginBottom:1 ,fontWeight:"bold" ,fontSize:"3em"}} >Cute Tooth </h5>
<h5 style={{color:"darkcyan",fontFamily:"serif",fontStyle:"italic",fontSize:23 ,marginLeft:70}} >dental store</h5>

</div>
<div className="col-3 mt-5">
<h5 style={{color:"darkgrey",fontFamily:"cursive",fontStyle:"-moz-initial", marginBottom:1 ,fontWeight:"bold",fontSize:"2.5em"}}  >Address:</h5>
<p style={{color:"lightgrey" ,fontFamily:"cursive",fontSize:"2em"}} >1061 South Roselle Road
Schaumburg, IL 60193.</p>
</div>
<div className="col-5 mt-5">
<h5 style={{color:"darkgrey",fontFamily:"cursive",fontStyle:"-moz-initial", marginBottom:1 ,fontWeight:"bold",fontSize:"2.5em"}} >contact us:</h5>
<ul style={{listStyleType:"none", color:"lightgrey" ,fontFamily:"cursive" ,fontSize:"2em"}}>       
        <li><a href="#" style={{color:"lightgrey",textDecoration:"none"}}><i className="bi bi-envelope"></i> info@cute-tooth-software.com</a></li>
         <li ><i className="bi bi-phone"></i> 0099887766</li>
        <li><i className="bi bi-telephone" > 005544332211</i></li>  
        </ul>
        <div>
        <a className="text-white m-2" href="https://www.facebook.com"><i className="bi bi-facebook " style={{color:"lightgrey",fontSize:"3em"}}></i></a>
    <a className="text-white m-2" href="https://www.google.com"><i className="bi bi-google" style={{color:"lightgrey",fontSize:"3em"}}></i></a>
     <a className="text-white m-2" href="https://www.linkedin.com"><i className="bi bi-linkedin" style={{color:"lightgrey",fontSize:"3em"}}></i></a>
     <a className="text-white m-2" href="https://www.linkedin.com"><i className="bi bi-youtube" style={{color:"lightgrey",fontSize:"3em"}}></i></a>
        </div>
</div>
</div>
<div style={{marginTop: 42,color:"darkgray",fontFamily:"cursive",fontSize:"1.7em"}}>
&copy; Copyright 2023: <a className="text-black m-2" href="https://www.moon-light-software.com">Cute-Tooth-Dental Store-software.com</a>
</div>
</div> 
      )
}
export default Footer;
