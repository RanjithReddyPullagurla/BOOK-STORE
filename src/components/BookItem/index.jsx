import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShuffle } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import "./index.css"


const BookItem = (props) => {
    const { bookObj } = props;
    const { title, price, imageUrl, description, uniqueId} = bookObj;
    const {addCartItem} = useContext(CartContext);

    const onClickAddToCart = () => {
        addCartItem(bookObj);
    };
    return (
  
    <li>
      <Link className="remove-underline" to={`/books/${uniqueId}`}> 
      
        <article className="card">
       <img src={imageUrl} alt={title} />
        <div className="card-text">
         <h1>{title}</h1>
         <h3>$ {price}</h3>
          <div className="stars-cont">
            <FaStar className="stars"/>
            <FaStar className="stars"/>
            <FaStar className="stars"/>
            <FaStar className="stars"/>
            <FaStarHalfAlt   className="stars"/>

          </div>
          <p> {description} </p>
          <button className="add-to-cart-btn" onClick={onClickAddToCart}>
            Add to Cart
          </button>
          <span className="icons-cont"> 
            <span className="icons-bg">
          <MdFavoriteBorder />
            </span>
            <span className="icons-bg ">
         <MdOutlineShuffle />
            </span>
            <span className="icons-bg">
            <MdOutlineRemoveRedEye />
            </span>
          </span>
        </div>
        </article>
        
  
          

      </Link>
      </li>


    );
 }

 export default BookItem