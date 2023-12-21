import { FormEvent, useState, useContext } from "react";
import ReactModal from "react-modal";
import { ProductsContext } from "../../contexts/useProducts";

import { GrClose } from "react-icons/gr";

import { Content } from "./styles";
ReactModal.setAppElement('#root')


interface NewProductModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewProductModal({isOpen, onRequestClose}: NewProductModalProps){

  const { createProduct }= useContext(ProductsContext)
  
  const [productName, setProductName] = useState("")
  const [amount, setAmount] = useState<number>()
  const [quantitie, setQuantitie] = useState<number>()

  

  function getRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  async function createNewProduct(event: FormEvent){
    event.preventDefault()

    if(amount === undefined || quantitie === undefined){
      return alert('preencha todas as informações')
    }
    await createProduct({
      id: getRandomId(),
      productName,
      amount,
      quantitie
    })

    setProductName("")
    onRequestClose()
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
        <Content onSubmit={createNewProduct}>
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

          <label htmlFor="quantities">Quantidade: </label>
          <input 
            type="number" 
            id="quantities" 
            required
            value={quantitie}
            onChange={(e)=> setQuantitie(Number(e.target.value))}
          />  
                
          
          <button onClick={createNewProduct} type="submit">CADASTRAR</button>
        </Content>
    </ReactModal>
    )
}