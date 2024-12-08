import Footer from "./Footer";

function AboutUs(){
    return(<div>
        <div>
            <img src="https://www.dentaltix.com/en/sites/default/files/lo-que-hacemos-en.png" style={{width:"100%"}} />
        </div>


        <div>
        <div class="card w-75" style={{marginTop:70,marginLeft:150,height:670,marginBottom:70,background:"lightgray"}}>
   
        <div class="row g-0"> 
        <div class="col-md-6">
        <div className="shadow  m-4 bg-body rounded " >
         <img src="https://github.com/codewithsadee/dentelo/blob/master/assets/images/service-banner.png?raw=true" style={{height:500 ,marginTop:30}}/>
        </div>
        </div>

    <div class="col-md-6">
    <div className="mt-5">
    <h5 style={{color:"darkslategrey",fontFamily:"fantasy",fontStyle:"-moz-initial", marginBottom:20 ,fontWeight:"bold" ,fontSize: 60}} >About Us:</h5>
    <div style={{fontSize: 30}}>
        <p style={{fontFamily:"cursive"}}>Cute Tooth Dental Store specialises in selling quality brands at low prices to Dental Clinics, Dental Laboratories and other dental professionals.</p>
    </div>
    <div style={{fontSize: 30 ,marginTop: 30}}>
        <p style={{fontFamily:"cursive"}} >Our objective is to offer you an exceptionally easy and efficient level of service, save you time and money and provide you with a wide choice of proven quality dental equipment and supplies.</p>
    </div>
    <div style={{fontSize: 30 ,marginTop: 30}} >
        <p style={{fontFamily:"cursive"}}>We partner with worldwide leading brands to offer you top quality products at everyday low prices and provide you with huge savings online.</p>
    </div>
    
</div>
    </div>
  </div>
</div>
     
     </div>
     <Footer/>
       
    </div>);
}
export default AboutUs;
