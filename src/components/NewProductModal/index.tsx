import { FormEvent, useEffect, useState } from "react";
import { Content } from "./styles";
import { GrClose } from "react-icons/gr";
import ReactModal from "react-modal"
import { api } from "../services/api";


ReactModal.setAppElement('#root')


interface NewProductModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductModal({isOpen, onRequestClose}: NewProductModalProps){
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [amount, setAmount] = useState<number | undefined>(undefined)

  useEffect(()=> {
    api.get('products')
    .then(response => console.log(response.data))
  }, [])

  function getRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  function createProduct(event: FormEvent){
    event.preventDefault()

    const data ={
      id: getRandomId(),
      productName,
      amount
    }

    api.post('products', data)
    
  

    setProductName("")
    setAmount(0)
    onRequestClose
  }
    return(
      <ReactModal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <GrClose  />

        </button>
        <Content onSubmit={createProduct}>
          <h2>Cadastrar produto</h2>
          <label htmlFor="nameProduct">Nome do produto:</label>
          <input 
            type="text" 
            id="nameProduct" 
            required
            value={productName}
            onChange={(e)=> setProductName(e.target.value)}
          />

          <label htmlFor="amountProduct">Valor: </label>
          <input 
            type="number" 
            id="amountProduct" 
            required
            value={amount}
            onChange={(e)=> setAmount(Number(e.target.value))}
          />
                
          
          <button onClick={createProduct} type="submit">CADASTRAR</button>
        </Content>
    </ReactModal>
    )
}