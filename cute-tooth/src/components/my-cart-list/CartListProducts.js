import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Footer";

function CartListProducts(){

   
    let[product,setProduct]=useState([]);
    let[total,setTotal]=useState();
    useEffect(()=>{
        loadProduct();});

    let totalPrice=0;

    let loadProduct = async () => {
        let result= await axios.get("http://localhost:4000/myCart");
        setProduct(result.data);
        result.data.map((prices)=>{
            totalPrice += prices.Quantity * Number(prices.price);
        })
        setTotal(totalPrice.toFixed(2));
    }
    function hadleQuantityChange(event){
        product.Quantity=event.target.value;
    }
    function hadlePricesChange(event){
        product.price=event.target.value;
    }


    let deleteOrder=async(id)=>{
       let isDeleted=window.confirm ("Are you sure? this product will be removed from your cart!")
       if(isDeleted){
        await axios.delete(`http://localhost:4000/myCart/${id}`);
        loadProduct();
       }
    }
    
 let incDec=async(a,b,c,d,e)=>{
    if(c==="dec"){
        if(a===1){
            a=1;
        }else{
            a-=1;
        }
    }else{
        if(a===20){
            a=20;
            alert("Quantity cannot Exceed 20!")
            return;
        }else{
            a+=1;
        }
    }
    let order={name:d ,price:e,Quantity:a};
    await axios.put(`http://localhost:4000/myCart/${b}`,order)
    loadProduct();
 }

    if(product.length>0){
    return(<div>
       
                <div>
                <div class="card bg-dark text-white">
  <img src="https://t3.ftcdn.net/jpg/01/70/68/30/360_F_170683014_wBHdGaXKIGqIE0Dlklxd9IUzaz7hbVQN.jpg" style={{height: 300}} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <h1 className="text-center " style={{height:150 ,width: "100%",color:"darkslategray"}}><i className="bi bi-bag-heart-fill"></i> Welcome to my Cart List Products</h1>
  </div>
</div>
                </div>

        <div className="order-area">
       <div className="order-total">Your Order </div> 
       <div className="order-names">Order Name 
        <div className="order-Quantities">Order Quantity</div>
        <div className="order-prices">Order Price</div>
       </div> 
      </div>
  {product.map((prod, id)=>(
<div className="order-card" key={id}>
<div className="order-item">{prod.name}</div> 
     <div className="order-qty">
        <button className="qty-btn" onClick={()=>incDec(prod.Quantity,prod.id,"dec",prod.name,prod.price)}>-</button>
         <input type="text" className="qty-input" onChange={hadleQuantityChange} value={prod.Quantity}/>
         <button className="qty-btn" onClick={()=>incDec(prod.Quantity,prod.id,"inc",prod.name,prod.price)} >+</button>
         </div>
         <div className="order-price" onChange={hadlePricesChange}>${((prod.Quantity * Number(prod.price))).toFixed(2)}</div>
         <button className="delete-btn" onClick={()=>deleteOrder(prod.id)} >Remove</button>
        </div> 
))}
       <div className="order-total mb-5">
        <div className="total">Total</div>
        <div className="total-price">${total}</div>
        <button className="place-order-btn">Place Order</button>

       </div>
       <Footer/>
    </div>);
    }else{
        return(
            <div>
                    <div>
                <div class="card bg-dark text-white">
  <img src="https://t3.ftcdn.net/jpg/01/70/68/30/360_F_170683014_wBHdGaXKIGqIE0Dlklxd9IUzaz7hbVQN.jpg" style={{height: 300}} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <h1 className="text-center " style={{height:150 ,width: "100%",color:"darkslategray"}}><i className="bi bi-bag-heart-fill"></i> Welcome to my Cart List Products</h1>
  </div>
</div>
                </div>
                  <div className="order-area">
                 <div className="order-total">Your Order </div> 
        <h1 className="text-center  m-3">
            Your cart is Empty!!</h1></div> 
            <div>
                <p style={{height:200}}>                   </p>
            </div>
            <Footer/>
            </div>)
    }
    
}
export default CartListProducts;