import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlist';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Reddingtong!" />
    </>
  );
}

export default App;
