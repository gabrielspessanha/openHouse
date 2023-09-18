import { useContext, useState } from "react";
import { Content } from "./styles";
import { ProductsContext } from "../../contexts/useProducts";

export function Products() {
  const { products } = useContext(ProductsContext);
  const [productNameFilter, setProductNameFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(productNameFilter.toLowerCase())
  );

  return (
    <Content className="container">
    <div className="search">  
        <label htmlFor="productNameFilter">Filtrar: </label>
        <input
            type="text"
            id="productNameFilter"
            placeholder="Filtrar produtos"
            value={productNameFilter}
            onChange={(e) => setProductNameFilter(e.target.value)}
        />
    </div>
      

      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>ID</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.quantitie}</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.amount)}
              </td>
              <td>
                <strong>{product.id}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
}
