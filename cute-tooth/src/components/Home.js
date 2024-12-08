import { Carousel } from "bootstrap";
import Footer from "./Footer";
import Brands from "./Brands";

function Home(){
    return(<div>

        {/* //         slider           */}
<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
         {/* //         slider  Welcome            */}
      <div className="carousel-item">
        <img src="https://i.pinimg.com/564x/73/39/8a/73398ae4f02e3bc3821a247be512475b.jpg"  
          width="100%" height="600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>

        <div className="container">
          <div className="carousel-caption text-center">
            <p><h1 style={{color:"darkslategrey",fontFamily:"cursive",fontStyle:"-moz-initial", marginBottom:2 ,fontWeight:"bold",fontSize:"3em"}} >Welcome to Cute tooth Dental Store</h1></p>
          </div>
        </div>
      </div>

              {/* //         slider  Dental lab            */}
      <div className="carousel-item">
      <img src="https://static.wixstatic.com/media/b29f55_504525b6566c4b0eaf1211be626d306c~mv2.jpg/v1/fill/w_896,h_681,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b29f55_504525b6566c4b0eaf1211be626d306c~mv2.jpg

"  
          width="100%" height="600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1 style={{fontStyle: "italic",fontFamily:"serif",color:"darkcyan", fontWeight:"bold",fontSize:"4em",marginBottom:2}}>Dental Laboratories </h1>
            <p style={{color:"darkslategrey",fontSize:40}}>we provide some dental Laboratory products with high quality</p>
            <p><a className="btn btn-secondary" href="http://localhost:3000/dentalLab" style={{fontSize:"2em"}}>view more</a></p>
          </div>
        </div>
      </div>
                                     {/* //         slider  Dental clinics           */}
                               
      <div className="carousel-item active"><img src="https://www.generationsdentalhartland.com/wp-content/uploads/2014/09/slider-equipment.jpg"  
          width="100%" height="600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1 style={{fontStyle: "italic",fontFamily:"serif",color:"darkcyan", fontWeight:"bold",fontSize:"4em",marginBottom:1,marginLeft: 30}}> Dental clinics.</h1>
            <p style={{color:"darkslategrey",fontSize:40}}>we provide some dental Clinics products with high quality</p>
            <p><a className="btn btn-secondary" href="http://localhost:3000/dentalClinics" style={{fontSize:"2em"}}>view more</a></p>
          </div>
        </div>
      </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
                 {/* //        Dental Clinical && Dental Laboratory          */}







              {/* //         Best Selling       */}
        <div>
       <h1 className="text-center m-4 md-7" style={{fontFamily:"serif" ,color:"darkslategray",fontSize:"3em"}}> Best Selling </h1>
       <div className="row m-5 text-center ">

       <div className="card col-3 m-5">
    <img src="https://images.dentalkart.com/media/catalog/product/s/d/sdeew.jpg" className="card-img-top " alt="..." />
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray " ,fontSize:"2em"}} >Dentsply Core & Post System Kit</h5>
      <div style={{display:"inline-flex"}}>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod" ,fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $50</small></h5></h5>
      </div>
    </div>
  </div>


  <div className="card col-3 m-5">
    <img src="https://th.bing.com/th/id/OIP.p9Mb71F8YhmJocujRs2aGQHaIi?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray" ,fontSize:"2em"}} >Fiber Post With 4 Drills</h5>
      <div style={{marginTop: 26}}>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod" ,fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $20</small></h5></h5></div>
    </div>
  </div>

  <div className="card col-3 m-5">
    <img src="https://m.media-amazon.com/images/I/61a58-FGTbL._SL1200_.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray" ,fontSize:"2em"}} > Carpo RVG V-Sensor</h5>
         <div style={{marginTop: 26}}>
         <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}}  ><small className="text-muted"> $100</small></h5></h5></div>
    </div>
  </div>

  <div className="card col-3 m-5">
    <img src="https://images.dentalkart.com/media/catalog/product/a/s/asdfqdsf.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} >Fgm Whitepost Refill</h5>
      <div style={{marginTop: 26}}>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $500</small></h5></h5></div>
    </div>
  </div>
  <div className="card col-3 m-5">
    <img src="https://images.dentalkart.com/media/catalog/product/e/n/endopro-cordless-6.jpg" className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} > EndoPro Cordless Endomotor</h5>
      <div>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $500</small></h5></h5>
      </div>
    </div>
  </div>
  <div className="card col-3 m-5">
    <img src="https://amplemeds.com/wp-content/uploads/2019/08/GC-Pattern-Resin-Acrylic-Die-Material.jpg" className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray" ,fontSize:"2em"}} >  Acrylic Die Material</h5>
      <div>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod" ,fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $200</small></h5></h5>
      </div>
    </div>
  </div>
       </div>

       
       <hr className="featurette-divider"/>
       </div>
                  
                   {/* //         Offers          */}
          
                   <div>
       
       <div><img src="https://images.dentalstores.in/banners/supersale.jpg" style={{width:"87%",alignContent:"center",marginRight: 57}}/></div>
       <div className="row m-5 text-center">
       <div className="card col-3 m-5">
    <img src="https://images.dentalkart.com/media/catalog/product/f/o/foster_plus7.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} > Fomos Autoclave Foster Plus </h5>
      <div>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}}  ><small className="text-muted"> $500</small></h5></h5>
      
      <h5 className="card-text" style={{textDecoration:"line-through" ,background:"pink" ,fontSize:"1.7em"}} ><small className="text-muted"> $700</small></h5>
      </div>
    </div>
  </div>


  <div className="card col-3 m-5">
    <img src="https://cdn.shopify.com/s/files/1/0279/6591/5229/products/touch-screen-endomotor_2nd_image_800x.jpg?v=1643610712" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} > EndoPro Smart Touch </h5>
      <div className="mt-4">
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $1200</small></h5></h5>
      
      <h5 className="card-text" style={{textDecoration:"line-through" ,background:"pink",fontSize:"1.7em"}} ><small className="text-muted"> $1500</small></h5>
      </div>
    </div>
  </div>


  <div className="card col-3 m-5">
    <img src="https://img.medicalexpo.com/images_me/photo-g/71976-17727312.jpg
" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} > Ruthinium Acryrock Teeth Sets
 </h5>
 <div>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}}><small className="text-muted"> $190</small></h5></h5>
      
      <h5 className="card-text" style={{textDecoration:"line-through" ,background:"pink",fontSize:"1.7em"}} ><small className="text-muted"> $250</small></h5>
      </div>
    </div>
  </div>


  <div className="card col-3 m-5">
    <img src="https://amplemeds.com/wp-content/uploads/2021/12/JENIN-PMT-Set-Diagnostic-Kit-Containing-Mouth-Mirror-with-Handle-Tweezer-Probe-Double-Ended-and-Single-Ended-1.jpg
" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} > PMT Set Instrument Kit</h5>
      <div style={{marginTop: 22}}>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}}><small className="text-muted"> $37</small></h5></h5>
      
      <h5 className="card-text" style={{textDecoration:"line-through" ,background:"pink",fontSize:"1.7em"}} ><small className="text-muted"> $50</small></h5>
      </div>
    </div>
  </div>


  <div className="card col-3 m-5">
    <img src="https://images.dentalkart.com/media/catalog/product/p/l/plugger.jpg
" className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="description" style={{fontFamily:"cursive", color:"darkslategray",fontSize:"2em"}} > SuperEndo Dental Buchanan
</h5>
<div style={{marginTop: 10}}>
      <h5 className="card-text text-center"style={{fontFamily:"cursive",color:"darkgoldenrod",fontSize:"3em"}} >Price:  
      <h5 className="card-text d-inline " style={{fontSize:"1em"}} ><small className="text-muted"> $120</small></h5></h5>
      
      <h5 className="card-text" style={{textDecoration:"line-through" ,background:"pink",fontSize:"1.7em"}} ><small className="text-muted"> $150</small></h5>
      </div>
    </div>
  </div>

       </div>
       <hr className="featurette-divider"/>
       </div>
           
 
             <Brands/>               
    <Footer/>

    </div>);
}
export default Home;