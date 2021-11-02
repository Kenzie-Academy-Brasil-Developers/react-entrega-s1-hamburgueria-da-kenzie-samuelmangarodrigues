import Product from "../Product";
import "./style.css";

const MenuContainer = ({ products, input, filteredProducts, HandleClick }) => {
  return (
    <>
      <ul className="containerProducts">
        {input === ""
          ? products.map((product, ind) => (
              <li key={ind}>
                <Product
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  HandleClick={HandleClick}
                  prodId={product.id}
                  img={product.img}
                />
              </li>
            ))
          : filteredProducts.map((item, ind) => (
              <ul key={ind}>
                <img src={item.img} alt={item.img} />
                <li>
                  <strong>{item.name}</strong>
                </li>
                <li>{item.category}</li>
                <li>R$ {item.price}</li>
                <button onClick={() => HandleClick(item.id)}>
                  Adicionar no carrinho
                </button>
              </ul>
            ))}
      </ul>
    </>
  );
};
export default MenuContainer;
