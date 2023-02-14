import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import ProductInfo from './pages/ProductInfo';

const App = () => {
  const [shopProducts, setShopProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();

        setShopProducts(data);
    }
    fetchData()

  }, [])

  return (
    <BrowserRouter>

      <nav>
        <Link to="/" > Home </Link>
      </nav>

      <Routes>

        <Route path="/" element={ <Home allProducts={shopProducts} /> } ></Route>

        <Route path="/product/:productId" element={ <ProductInfo /> } ></Route>

      </Routes>

      <footer>
        <p>This is my footer</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;
