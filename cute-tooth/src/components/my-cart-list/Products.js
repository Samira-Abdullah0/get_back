import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";
function Products(){
    let [dentalProduct,setdentalProduct]=useState([]);
   async function getAllProducts(){
        let allDentists= await axios.get(' http://localhost:4000/products');
        setdentalProduct(allDentists.data);
    }
    useEffect(() => {getAllProducts()},[]);

    let[searchText, setSearchText]=useState('');
   function handelSearchTextChange(event){
    setSearchText(event.target.value);
   }
      async function Search(){
      let searchResult= await axios.get(`http://localhost:4000/products?name_like=${searchText}`)
      setdentalProduct(searchResult.data);
      }
  function showProducts(){ 
    let Quantity=1;

    let addProduct=async(a,b)=>{
        let isExisting=false;
        let result= await axios.get("http://localhost:4000/myCart");

        if(result.data.length===0){
            let order={name:a, price:b, Quantity:Quantity}
            axios.post("http://localhost:4000/myCart",order);
            
        }else{result.data.map((orderprod)=>{
            if(a=== orderprod.name){
               orderprod.Quantity+=1;
                let order={
                    name:a,
                    price:b,
                    Quantity:orderprod.Quantity,
                };
                axios.put(`http://localhost:4000/myCart/${orderprod.id}`,order);
                isExisting=true;
            }
        });
           
        if(isExisting==false){
           let order={
            name:a,
            price:b,
            Quantity:Quantity,
           };

           axios.post(" http://localhost:4000/myCart",order);
        }
        }
    };
    
    
    return(
        <div className="home-cards">
        {dentalProduct.map((prodc) => (
        <div  className="cards" key={prodc.id}>
        
        <div className="cards-images">
        <img src={prodc.imageURL}  />
        </div>

        <div>
            <p className="cards-title" style={{fontSize:"1.5em"}}>{prodc.name} </p>
            <p className="description"style={{fontSize:"1.5em"}}>${prodc.price} </p>
           
        </div>
        <button className="btn btn-outline-secondary w-100 border border-1 rounded-0" style={{fontSize:"1.5em" , marginTop:"20px"}} onClick={() => addProduct(prodc.name,prodc.price)}><i className="bi bi-cart-plus" style={{fontSize:"1.5em"}} ></i> add to cart</button>
        </div>

         ))}
       </div>);
        }
        
        return(<div>
        <h1 className="text-center mt-1 p-3 shadow-sm" style={{marginBottom :65,fontFamily:"cursive"}}> Products
        <div className="input-group mb-2" style={{width:"25%",marginLeft:950 }}>
        <input type="text" className="form-control rounded"  onChange={handelSearchTextChange}/>
        <button className="btn btn-outline-secondary mx-1 rounded" onClick={Search} style={{fontSize:"0.7em"}} > <i class="bi bi-search"> Search</i></button></div>
        
        
        </h1>
        
        {showProducts()}
        
        <Footer/>
        
        </div>);
        

}
export default Products;
