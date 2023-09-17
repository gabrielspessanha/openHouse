import { FormEvent, useState } from "react";
import { Container } from "./styles";







export function Register(){
    const [productName, setProductName] = useState("")
    const [amount, setAmount] = useState(0)

    function getRandomId() {
      return Math.floor(Math.random() * 1000000);
    }

    function createProduct(event: FormEvent){
      event.preventDefault()

      const newProduct ={
        id: getRandomId(),
        productName,
        amount
      }

      console.log(newProduct)

      setProductName("")
      setAmount(0)
    }

    return(
        <>
          <Container className="container">
            <h2>Cadastrar produto</h2>
            <label htmlFor="nameProduct">Nome do produto:</label>
            <input 
              type="text" 
              id="nameProduct" 
              required
              value={productName}
              onChange={(e)=> setProductName(e.target.value)}
            />

            <label>Valor: </label>
            <input 
              type="number" 
              id="nameProduct" 
              required
              value={amount}
              onChange={(e)=> setAmount(+e.target.value)}
            />
                  
            
            <button onClick={createProduct} type="submit">CADASTRAR</button>
          </Container>
        </>
    )
}