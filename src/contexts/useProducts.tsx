import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../components/services/api";
interface products {
    id: number,
    productName: string,
    amount: number,
}

interface ProductsProviderProps{
    children: ReactNode;
}

interface ProductsContextData {
    products: products[];
    createProduct: (product: products) => void;
}

export const ProductsContext = createContext<ProductsContextData>([])


export function ProductsProvider({children}: ProductsProviderProps){
    const [products, setProducts] = useState<products[]>([])

    useEffect(()=> {
        api.get('products')
        .then((response) => setProducts(response.data))
      }, [])

    
    function createProduct(product : products){
          api.post('products', product)
          
    }

    return (
        <ProductsContext.Provider value={{products, createProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}