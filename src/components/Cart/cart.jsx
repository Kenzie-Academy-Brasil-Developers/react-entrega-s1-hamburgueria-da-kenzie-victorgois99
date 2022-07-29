import "./cart.css";
import Product from "../Product/product";

function Cart({ currentSale, setCurrentSale }) {

    const soma = currentSale.reduce((acc, cv) =>  acc + cv.price,0)

  return (
    <div className="carrinho">
      <div className="divHeader">
        <p>Carrinho de compras</p>
      </div>
      <div className="divInfo">
        {currentSale.length === 0 ? (
          <>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </>
        ) : (
          currentSale.map((item, index) => {
            return (
              <Product key={index} index={index}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                item={item}
              />
            );
          })
        )}

        {currentSale.length >
          0 ? (
            <div className="footerCarrinho">
              <div className="valores">
                <p>Total</p>
                <p>{soma.toLocaleString('pt-BR',{style:'currency', currency:'BRL'} )}</p>
                <div className="divButton">
                  <button onClick={() => setCurrentSale([])}>Remover todos</button>
                </div>
              </div>
            </div>
          ):
          (<></>)}
      </div>
    </div>
  );
}

export default Cart;
