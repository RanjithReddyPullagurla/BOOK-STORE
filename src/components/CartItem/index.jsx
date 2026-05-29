 import "./index.css";  
 import CartContext from "../../Context/CartContext.jsx";
 import { useContext } from "react";
 
 const CartItem = ({details}) => {
    const { title, price, imageUrl, uniqueId } = details;
    const { deleteCartItem } = useContext(CartContext);
 
    const onClickDelete = () => {
        // Checkout button - no action needed yet
    };
 
    const onClickMove = () => {
        deleteCartItem(uniqueId);
    };
 
    return (
        <li className="cart-item">
            <img src={imageUrl}/>
          <h3> {title} </h3>
          <h3> ${price} </h3>
          <h3> $120.00 </h3>    

          <button className="remove-btn" onClick={onClickDelete}> CHECK OUT</button>
          <button className="move-btn" onClick={onClickMove}> X </button> 
        </li>
    )
}        
export default CartItem