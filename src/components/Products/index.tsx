import Container from "./styles";


export function Products(){
    return(
        <Container className="container">
            <div className="card">
                <h3>Product Name</h3>
                <p>Quantidade: </p>
                <p>Valor: </p>
                <small>ID: </small>
            </div>
        </Container>
    )
}