import { useState } from "react";
import { Container } from "./styles";



export function RegisterUser() {

    const [name, setName] = useState('')
    const [document, setDocument] = useState('')
    const [tel, setTel] = useState('')
    
    function createUser(ev){
        ev.preventDefault()
        alert('foi!')

        setName('')
        setDocument('')
        setTel('')
    }


    return(
        <Container>
            <h2>CADASTRO</h2>
            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                required 
                name="name" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <label htmlFor="document">Documento: </label>
            <input 
                type="text" 
                required 
                name="document" 
                id="document" 
                value={document}
                onChange={(e)=> setDocument(e.target.value)}
            />

            <label htmlFor="phone">Telefone: </label>
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="(xx) xxxxx-xxxx" 
                required
                value={tel}
                onChange={(e)=> setTel(e.target.value)} 
            />          
            
            <button onClick={createUser} type="submit">CADASTRAR</button>
        </Container>
    )
}