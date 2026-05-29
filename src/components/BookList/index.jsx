import Header from "../Header";
import BookItem from "../BookItem"
import "./index.css"
import {useState, useEffect} from "react";
import { Oval } from "react-loader-spinner";
import { IoSearchOutline } from "react-icons/io5";

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userInput, setUserInput] = useState("");
    

    useEffect(() =>{
        const getBookList = async () => {
          const apiUrl = "https://www.jsonkeeper.com/b/O5GQY";
          const response = await fetch(apiUrl);
          const fetchedData = await response.json()
          console.log(fetchedData);
          setBookList(fetchedData);
          setIsLoading(false);
        };
        getBookList();
    } , [])

    const onChangeSearchInput = (event) => {
        setUserInput(event.target.value);
    } 
    const renderLoadingView = () => {
        return <div style={ {display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}} >
             <Oval color="#1d3557" secondaryColor="#457b9d" />
             </div>
    }   

    const renderBooksView = () => {
    return (
        
        <div>
            
            <ul> 
                {searchBooks.map((eachObj) => (
                    <BookItem key={eachObj.uniqueId} bookObj={eachObj} />
                ))} 
            </ul>
        </div>
    )
};

const searchBooks = bookList.filter((eachObj) => { 
    return eachObj.title.toLowerCase().includes(userInput.toLocaleLowerCase());}
);
return(
    <div>
        <Header />
        <div className="search-input-cont"> 
            <button className="search-btn"> 
        <IoSearchOutline className="search-icon"/>
        </button>
        <input type="search" placeholder="Search Books" className="search-input" id="searchInput" onChange={onChangeSearchInput}/>
        </div>
        {isLoading ? renderLoadingView() : renderBooksView()}
        </div>
);
};
export default BookList

