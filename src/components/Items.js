import React, { useContext } from "react";
import {CartContext} from "./Cart";


const  Items = (props)=>{
    const {removeItem, increment, decrement} = useContext(CartContext)
return(
    <>
    
    <div className="product-info">
    <div className="product-img">
        <img src={props.img} alt="product#1">

        </img>
    </div>
    <div className="title">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

    </div>
    <div className="add-minus-quantity">
        <i className="fa-solid fa-minus" onClick={()=>decrement(props.id)}></i>
        <input type="text" placeholder={props.quantity} />
        <i className="fa-solid fa-plus" onClick={()=>increment(props.id)}></i>
    </div>

    <div className="price">
        <h3>{props.price}</h3>
    </div>

    <div className="remove-item">
        <i className="fa-solid fa-ban" onClick={()=>removeItem(props.id)}></i>
    </div>
    

</div>
<hr /></>
)
}

export default Items