import React, { useContext } from "react";
import Items from "./Items";
import {products} from "./products";
import { CartContext } from "./Cart";
import TextField from  "@mui/material/TextField";
import SearchIcon from '@mui/icons-material';
const Context = () => {

   const {item, totalItem, totalAmount} = useContext(CartContext)
    return( <>
        <header>
    
            <div className="cart-icon">
                <img src="data:image/png;base64,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" alt="cart" />
                <p> {totalItem}</p>
            </div>
        </header>
        <section className="main-cart-section">

            <div className="cart-items">

                <div className="cart-items-container">
                    {
                        item.map((curItem) => {
                            return <Items key={curItem.id}{...curItem} />
                        })
                    }

                    <div className="card-total">
                        <h3>Cart Total : <span> ${totalAmount}</span></h3>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>


        </section>


    </>
    )
}
export default Context;