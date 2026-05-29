import {BrowserRouter, Route ,  Routes } from "react-router"
import Home from "./components/Home" ;
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import { useState } from "react";
import CartContext from "./Context/CartContext";
const App = () => {

  const [cartList, setCartList] = useState([]);
 const addCartItem = (product) => {
    setCartList((prevCartList) => [...prevCartList, product]); 
 }
 const deleteCartItem = (uniqueId) => {
    setCartList((prevCartList) => prevCartList.filter(item => item.uniqueId !== uniqueId));
 }
  return (
    <BrowserRouter>
    <CartContext.Provider value={{ cartList, setCartList, addCartItem, deleteCartItem }}>
         <Routes>
          <Route path="/" element= {<Home/>} />
           <Route path = "/books"  element={<BookList/>} />
           
          <Route path = "/books/:id" element={<BookDetails/>} />
          
          <Route path = "/cart" element = {<Cart/>} />
          {  /*
          <Route path = "/checkout" element={<Checkout />} />
          <Route path = "*" element= {<NotFound />} /> */}
          
         </Routes>
    </CartContext.Provider>
    </BrowserRouter>
  )
}
  
export default App

