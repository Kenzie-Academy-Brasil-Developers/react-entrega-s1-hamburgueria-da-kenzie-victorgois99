import "./product.css"

function Product({item, currentSale, setCurrentSale, setFilter, index}){

    function handleDelete(produto) {
        const newList = currentSale.filter(
          (lanche) => { return lanche !== produto});
        setCurrentSale(newList);
        setFilter(newList)
    }
    return(
        <div key={index} className="carrinho">
            <img src={item.img} alt="" />
            <h1>{item.name}</h1>
            <p>{item.category}</p>
            <button onClick={() => handleDelete(item)}>Remover</button>
        </div>
    );
}

export default Product