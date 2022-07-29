import { useEffect, useState } from "react";
import "./App.css";
import logoHeader from "./assets/img/logo.svg";
import Cart from "./components/Cart/cart";
import ProductsList from "./components/ProductsList/productsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filterList, setFilter] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const base = "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";
  const axios = require("axios").default;

  useEffect(() => {
    axios
      .get(base)
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, [axios]);

  return (
    <div className="App">
      <header className="header">
        <div className="divPrincipal">
          <img src={logoHeader} alt="" className="logo" />
          <div className="divInput">
            <input type="text" name="" id="" placeholder="Digitar pesquisa" />
            <button className="button">Pesquisar</button>
          </div>
        </div>
      </header>
      <div className="container">
        <main>
          <ProductsList products={products} setProducts={setProducts} filterList={filterList} setFilter={setFilter} />
        </main>
        <aside>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} setCartTotal={setCartTotal} />
        </aside>
      </div>
    </div>
  );
}

export default App;
