import NavBar from './components/NavBar';
import Appliances from './pages/apps';
import Gadgets from './pages/gadgets';
import Accessories from './pages/accs';
import cartAdder from './components/cartAdder';
import './styles.css';

function App() {
  let Component
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
      <Component />
      <cartAdder />
    </div>
  );
}

export default App;
