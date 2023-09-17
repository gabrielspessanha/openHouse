import { useContext } from "react";
import Container from "./styles";
import { ProductsContext } from "../../contexts/useProducts";


export function Products(){
    const {products} = useContext(ProductsContext)

    return(
        <Container className="container">
            {products.map((product)=>(
                <div key={product.id} className="card">
                    <h3>{product.productName}</h3>
                    <section>
                        <p><strong>Quantidade: </strong> {product.quantitie}</p>
                        <p><strong>Preço: </strong> 
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                        
                            }).format(product.amount)} </p>
                        <small><strong>ID: </strong>{product.id}</small>
                    </section>
                </div>
            ))}
             
        </Container>
    )
}