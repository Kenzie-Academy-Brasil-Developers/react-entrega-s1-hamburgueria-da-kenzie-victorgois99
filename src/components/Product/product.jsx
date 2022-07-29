import "./product.css"

function Product(){
    return(
        <div className="card">
            <figure>
                <img src="" alt="" />
            </figure>
            <h1>Nome</h1>
            <p>Categoria</p>
            <p>R$ 10.00</p>
            <button>Adicionar</button>

        </div>
    );
}

export default Product