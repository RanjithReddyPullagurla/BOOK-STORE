import "./index.css" ;
import { Link } from "react-router";
import {IoBookSharp} from "react-icons/io5"
import {MdShoppingCart} from "react-icons/md"
import { MdOutlineFavorite } from "react-icons/md";
const Header = () => {

    return (
       <header>
        <nav> 
        <div className="logo-container">
           
            <img src = "https://static.vecteezy.com/system/resources/thumbnails/049/571/607/small_2x/illustration-of-an-open-book-on-the-middle-page-png.png" />
            <p className="logo-text"> Bookle </p>
        </div>
        <ul className="nav-links"> 
           
            <li>
                <Link to="/" className="nav-link">  Home </Link>
            </li>
            <li>
                <Link to="/books" className="nav-link"> Shop </Link> 
            </li>
            <li>
                 <Link to="/cart" className="nav-link"> Cart </Link>
            </li>
            
        </ul>

         <div className="icons-container">
         <div className="icon-bg">
            <MdShoppingCart />


             </div>
             <div className="icon-bg">
          <MdOutlineFavorite />
             </div>


            </div>
        </nav>
       </header>   
    );
};

export default Header 