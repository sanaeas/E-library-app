import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { books } from './data';
import './index.css';
import BookInfo from './pages/BookInfo';
import Books from './pages/Books';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1,}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id
      ? {
        ...item,
        quantity: +quantity,
      }
      : item
    ))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id ))
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books books={books} />} />
          <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path='/cart' element={<Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
