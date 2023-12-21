import { ReactNode, createContext, useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';

interface productsInput {
    id: number,
    productName: string,
    amount: number,
    quantitie: number
}

interface productToRemove{
  id: number,
  quantitie: number
}

interface ProductsProviderProps{
    children: ReactNode;
}

interface ProductsContextData {
    products: productsInput[];
    createProduct: (productInput: productsInput) => Promise<void>;
    removeProduct: (productInput: productToRemove) => Promise<void>;
}

export const ProductsContext = createContext<ProductsContextData>(
    {} as ProductsContextData
)

export function ProductsProvider({children}: ProductsProviderProps){
    const [products, setProducts] = useState<productsInput[]>([])
    const [showWelcomeAlert, setShowWelcomeAlert] = useState(true);

    useEffect(()=> {
        const existingProductsString = localStorage.getItem('products')

        const existingProducts = existingProductsString? JSON.parse(existingProductsString): [];

        setProducts(existingProducts)

        setTimeout(()=>{
          setShowWelcomeAlert(false);
        }, 3000);
        
      }, [])

    
      async function createProduct(productInput: productsInput) {
        const existingProductIndex = products.findIndex((product) => product.productName === productInput.productName);
    
        if (existingProductIndex !== -1) {
          const existingProduct = products[existingProductIndex];

          const updatedProduct = {
            ...existingProduct,
            quantitie: productInput.quantitie,
            amount: productInput.amount,
          };
    
          const updatedProducts = [...products];
          updatedProducts[existingProductIndex] = updatedProduct;
    
          setProducts(updatedProducts);
          localStorage.setItem('products', JSON.stringify(updatedProducts))
        }else{
          
          const newProduct = {
            id: Date.now(), 
            productName: productInput.productName,
            quantitie: productInput.quantitie,
            amount: productInput.amount,
          };
      
          const updatedProducts = [...products, newProduct];
      
          setProducts(updatedProducts);
          localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
      }

      async function removeProduct(productInput: productToRemove) {
        const productIndex = products.findIndex((product) => product.id === productInput.id);
      
        if (productIndex !== -1) {
          const product = products[productIndex];
      
          if (productInput.quantitie >= product.quantitie) {
            // Remove o produto do estado local
            const updatedProducts = [...products];
            updatedProducts.splice(productIndex, 1);
            setProducts(updatedProducts);

            localStorage.setItem('products', JSON.stringify(updatedProducts))
          } else {
            // Atualiza a quantidade do produto
            const updatedProduct = {
              ...product,
              quantitie: product.quantitie - productInput.quantitie,
            };
      
            // Cria uma cópia atualizada dos produtos
            const updatedProducts = [...products];
            updatedProducts[productIndex] = updatedProduct;
      
            // Atualiza o estado local
            setProducts(updatedProducts);

            localStorage.setItem('products', JSON.stringify(updatedProducts))
          }
        } else {
          // Produto não encontrado
          alert('Produto não encontrado');
        }
      }

    return (
        <ProductsContext.Provider value={{products, createProduct, removeProduct}}>
            {showWelcomeAlert && (
              <Alert className="alerts" variant="warning">
                Bem-vindo à OpenHouse! plataforma de cadastro de produtos.
              </Alert>
            )}
            {children}
        </ProductsContext.Provider>
    )
}