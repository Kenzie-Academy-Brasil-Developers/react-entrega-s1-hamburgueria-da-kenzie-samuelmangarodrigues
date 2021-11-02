import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import ShowSale from "./components/ShowSale";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
      qtn: 1,
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
      qtn: 1,
    },
    {
      id: 3,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
      qtn: 1,
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
      qtn: 1,
    },
    {
      id: 5,
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
      qtn: 1,
    },
    {
      id: 6,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
      qtn: 1,
    },
    {
      id: 7,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
      qtn: 1,
    },
  ]);
  console.log(products);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurentSale] = useState([]);

  const ShowProducts = (productName) => {
    const filterProd = products.filter(
      (prod) => prod.name.toUpperCase() === productName.toUpperCase()
    );
    setFilteredProducts(filterProd);
  };
  const HandleClick = (productId) => {
    const findProd = products.find((prod) => {
      return prod.id === productId;
    });
    findProd.qtn += 1;
    const seting =
      findProd.qtn <= 2 ? setCurentSale([...currentSale, findProd]) : false;
    return seting;
  };
  const handleDelete = (item) => {
    const trash = currentSale.filter((itemc) => itemc !== item);
    currentSale.map((curren) => (curren.qtn = 1));
    setCurentSale(trash);
  };
  return (
    <div className="App">
      <div className="title">
        <h1 className="burguer">
          Burguer <p className="kenzie">Kenzie</p>
        </h1>

        <div className="inptBtns">
          <input
            className="Inpts"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pesquisar"
          />{" "}
          <button className="btns" onClick={() => ShowProducts(input)}>
            Pesquisar
          </button>
        </div>
      </div>
      <header className="App-header">
        <MenuContainer
          products={products}
          input={input}
          setInput={setInput}
          ShowProducts={ShowProducts}
          filteredProducts={filteredProducts}
          HandleClick={HandleClick}
          currentSale={currentSale}
        />
        <ShowSale currentSale={currentSale} handleDelete={handleDelete} />
      </header>
    </div>
  );
}

export default App;
