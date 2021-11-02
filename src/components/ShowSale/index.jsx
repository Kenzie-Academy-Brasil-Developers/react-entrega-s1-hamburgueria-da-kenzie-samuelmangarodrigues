const ShowSale = ({ currentSale, handleDelete }) => {
  return (
    <div className="showSales">
      <h1 className="titleSale">Carrinho de compras</h1>

      {currentSale.map((current, ind) => (
        <ul className="sales" key={ind}>
          <img className="imgSales" src={current.img} alt={current.name} />
          <div className="nameCat">
            <li className="nameSale">{current.name}</li>
            <li className="categ">{current.category}</li>
          </div>
          <button className="btnsrm" onClick={() => handleDelete(current)}>
            Excluir produto
          </button>
        </ul>
      ))}
      <div className="totalCont">
        <div>Total: </div>
        <span>{currentSale.reduce((acc, val) => val.price + acc, 0)}</span>
      </div>
    </div>
  );
};
export default ShowSale;
