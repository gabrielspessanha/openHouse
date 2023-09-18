import { useContext } from "react";
import {Content} from "./styles";
import { ProductsContext } from "../../contexts/useProducts";


export function Products(){
    const {products} = useContext(ProductsContext)

    return(
        <Content className="container">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>valor</th>
                        <th>ID</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.productName}</td>
                            <td>{product.quantitie}</td>
                            <td>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'           
                                }).format(product.amount)}
                            </td>
                            <td><strong>{product.id}</strong></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Content>
    )
}