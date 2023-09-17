import { FormEvent, useState } from "react";
import { Content } from './styles';
import { GrClose } from "react-icons/gr";
import ReactModal from "react-modal"


ReactModal.setAppElement('#root')


interface NewProductModalProps{
  isOpen: boolean;
  onRequestClose: () => void;

}

export function RemoveProductModal({isOpen, onRequestClose}: NewProductModalProps){
    
    const [idProductToRemove, setIdProductToRemove] = useState<number | undefined>(undefined)
    const [quantitiesToRemove, setQuantitiesToRemove] = useState<number | undefined>(undefined)

    function removeProduct(event: FormEvent){
        event.preventDefault()
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

        <Content>
          <h2>Remover produto</h2>
          <label htmlFor="nameProduct">ID do produto:</label>
          <input 
            type="number" 
            id="removeProduct" 
            required
            value={idProductToRemove}
            onChange={(e)=> setIdProductToRemove(Number(e.target.value))}
          />

          <label htmlFor="amountProduct">Quantidade: </label>
          <input 
            type="number" 
            id="quantitiesToRemove" 
            required
            value={quantitiesToRemove}
            onChange={(e)=> setQuantitiesToRemove(Number(e.target.value))}
          />
                
          
          <button onClick={removeProduct} type="submit">Remover</button>
        </Content>
    </ReactModal>
    )
}