import { Container } from "./styles";



export function RegisterUser() {
    return(
        <Container>
            <h2>Cadastro</h2>
            <label htmlFor="name">Nome:</label>
            <input type="text" required name="name" id="name" />

            <label htmlFor="document">Documento: </label>
            <input type="text" required name="document" id="document" />

            <label htmlFor="phone">Telefone: </label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(xx) xxxxx-xxxx" required />          
            
            <button type="submit">CADASTRAR</button>
        </Container>
    )
}