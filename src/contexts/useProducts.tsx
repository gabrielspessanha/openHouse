import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../components/services/api";
interface productsInput {
    id: number,
    productName: string,
    amount: number,
    quantitie: number
}

interface ProductsProviderProps{
    children: ReactNode;
}

interface ProductsContextData {
    products: productsInput[];
    createProduct: (productInput: productsInput) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextData>(
    {} as ProductsContextData
)


export function ProductsProvider({children}: ProductsProviderProps){
    const [products, setProducts] = useState<productsInput[]>([])

    useEffect(()=> {
        api.get('products')
        .then((response) => setProducts(response.data))

        setTimeout(()=>{
            alert("Bem vindo a OpenHouse")
        }, 5000)
      }, [])

    
    async function createProduct(productInput : productsInput){
       const response = await  api.post('/products', productInput)

       setProducts([...products, response.data])
    }

    return (
        <ProductsContext.Provider value={{products, createProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}