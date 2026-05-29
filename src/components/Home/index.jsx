
import Header from "../Header";
import "./index.css";
import { useNavigate } from "react-router";
import BookItem from "../BookItem";
import BookList from "../BookList";

const Home = () => {

     const navigate = useNavigate()

     const onClickNavigate = () => {

     
     navigate("/books")
     };

    return (
    <div className="home-bg">
    <Header /> 
    <div className="banner">
        <div className="banner-text">
            <h1>Expand <br/> Your Mind. Read a book  </h1>
            <p>  Welcome to the Book Store Application, a simple and user-friendly platform des.  can<br/>
             easily browse different books, search for their favorite titles, and view,<br/> detailed information about each book. This application makes it easy and convenient for use or purchase.
             </p>
            <button onClick={onClickNavigate}> Explore </button>
        </div>
        <div className="banner-img">
            <img src="https://plus.unsplash.com/premium_vector-1750802963361-346f552c27b8?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Book Banner" className="img1" />
        </div>
    </div>
    </div>

    )
};

export default Home ;