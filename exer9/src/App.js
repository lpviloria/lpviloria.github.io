import NavBar from './components/NavBar';
import Appliances from './pages/apps';
import Gadgets from './pages/gadgets';
import Accessories from './pages/accs';
import {CartAdder} from './components/cart';
import {useState} from 'react';
import './styles.css';

function App() {
  let Component
  const [cart, setCart] = useState({});
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
