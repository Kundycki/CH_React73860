import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcont';
import NotFound from './pages/notfound'
import Cart from './components/cart/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartcontext/cartcontext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Reddingtong!" />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> {}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;