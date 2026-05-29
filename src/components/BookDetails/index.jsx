import Header from "../Header";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShuffle } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router"; 
import CartContext from "../../Context/CartContext";

const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState(null);
    const { title, price, imageUrl, description } = bookDetails || {};

    const { id } = useParams();
    const { addCartItem } = useContext(CartContext);

    useEffect(() => {
        const getBookDetails = async () => {
            const url = "https://www.jsonkeeper.com/b/O5GQY";
            const response = await fetch(url);
            const formattedData = await response.json();
            console.log(formattedData);
            const actualBook = formattedData.find((eachObj) => eachObj.uniqueId === Number(id));
            console.log(actualBook);
            setBookDetails(actualBook);
        };

        getBookDetails();
    }, [id]);
    
 const onClickAddToCart = () => {
    addCartItem(bookDetails);
 };

            return (
    <>
        <Header />
        <main className="main-container">
      <section className="bd-img-container">
     <img src={imageUrl} alt={title} />
      </section >

      <section className="bd-text-container">
        <h1> {title}   </h1>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
  
       <p> {description} </p>
       <h2> ${price}</h2>
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
            
          </span>
      </section>
      </main>
    </>
    );
};


export default BookDetails;