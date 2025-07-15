import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcont';
import NotFound from './pages/notfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Reddingtong!" />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} /> {}
      </Routes>
    </BrowserRouter>
  );
}
export default App;