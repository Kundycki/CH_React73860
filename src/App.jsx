import './App.css';
import navbar from './components/navbar';
import items from './components/itemlist';
import cart from './components/cart';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Reddingtong!" />
    </>
  );
}

export default App;
