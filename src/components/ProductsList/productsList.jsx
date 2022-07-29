import { toast } from "react-toastify";
import "./productsList.css";


function ProductsList({ products, currentSale, setCurrentSale }) {
  
  function adicionar(item){

  currentSale.some((elemento) => elemento.id === item.id)

  ? toast.error("Produto já adicionado no carrinho")
  : setCurrentSale([...currentSale, item])

  !currentSale.some((elemento) => elemento.id === item.id)  && toast.success("Produto adicionado ao carrinho!")}
  return (
    <div className="cardsGeral">
      {products.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.category}</p>
            <h6>{item.price.toLocaleString('pt-BR',{style:'currency', currency:'BRL'} )}</h6>
            <button onClick={() => adicionar(item)}>Adicionar</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
