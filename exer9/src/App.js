import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Appliances from './pages/apps';
import Gadgets from './pages/gadgets';
import Accessories from './pages/accs';
import {CartAdder} from './components/cart';
import './styles.css';

function App() {
  let Component
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || {}); // Utilize local storage to store the current state of cart so that it is preserved whenever the page is changed

  useEffect(() => { // Update the local storage whenever the cart is updated
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  switch(window.location.pathname){
    case "/":
      Component = Appliances
      break
    case "/appliances":
      Component = Appliances
      break
    case "/gadgets":
      Component = Gadgets
      break
    case "/accessories":
      Component = Accessories
      break
    default:
      Component = Appliances
      break
  }

  return (
    <div className="App">
      <NavBar />
      <Component setCart={setCart} cart={cart}/>
      <CartAdder cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;