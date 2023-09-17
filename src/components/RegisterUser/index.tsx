import { FormEvent, useEffect, useState } from "react";
import { Container } from "./styles";

interface user {
    name: string,
    document: string,
    tel: string
}

export function RegisterUser() {
    const [users, setUsers] = useState<user[]>([])
    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [tel, setTel] = useState('');

    useEffect(() => {
    console.log(users);
  }, [users]);
    
    function createUser(event : FormEvent){
        event.preventDefault()
        alert('foi!')

        const newUser ={
            name,
            document,
            tel
        }

        setUsers([...users,newUser])
        console.log(users)
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
                placeholder="xxx.xxx.xxx-xx"
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