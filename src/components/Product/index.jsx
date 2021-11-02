const Product = ({ name, category, price, HandleClick, prodId, img }) => {
  return (
    <>
      <div className="products">
        <div className="ImgCont">
          <img className="Imgs" src={img} alt={img} />
        </div>
        <strong className="Name">{name}</strong>
        <div className="categ">{category}</div>
        <div className="price">R$ {price}</div>

        <button className="btns" onClick={() => HandleClick(prodId)}>
          Adicionar no carrinho
        </button>
      </div>
    </>
  );
};
export default Product;
