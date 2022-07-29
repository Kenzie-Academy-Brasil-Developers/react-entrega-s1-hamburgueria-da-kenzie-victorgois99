import "./cart.css"

function Cart(){
    return(
        <div className="carrinho">
            <div className="divHeader">
                <p>Carrinho de compras</p>
            </div>
            <div className="divInfo">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
            </div>
        </div>
    );
}

export default Cart