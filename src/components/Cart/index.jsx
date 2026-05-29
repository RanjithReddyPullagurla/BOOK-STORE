import "./index.css";
import CartItem from "../CartItem/index.jsx";
import Header from "../Header"; 
import CartContext from "../../Context/CartContext.jsx";
import { useContext } from "react";
const Cart = () => {
    const { cartList } = useContext(CartContext);
   console.log(cartList);
    return (
   <div>
                <Header />
            <div className="cart-context"> 
            <h1> Cart </h1>
            <ul>
                {cartList.map((bookObj) => {
                    return <CartItem key={bookObj.uniqueId} details={bookObj} />;
                })}    
            </ul>
        </div>  
        </div>
                  )
                }



                export default Cart