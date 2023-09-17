import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { NewProductModal } from "./components/NewProductModal"
import { RegisterUser } from "./components/RegisterUser"
import { GlobalStyle } from "./styles/global"
import { RemoveProductModal } from "./components/RemoveProductModal"
import { Products } from "./components/Products"
import { ProductsProvider } from "./contexts/useProducts"





function App() {

  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);


  function handleOpenNewRegisterModal(){
   setIsNewProductModalOpen(true)
  }

  function handleCloseNewRegisterModal(){
    setIsNewProductModalOpen(false)
  }

  function handleOpenRemoveProductModal(){
    setIsRemoveModalOpen(true)
  }

  function handleCloseRemoveProductModal(){
    setIsRemoveModalOpen(false)
  }

  
  return (
    <ProductsProvider>
      <div className="background-main">
        <Header
          onOpenNewProductModal={handleOpenNewRegisterModal}
          onOpenRemoveProductModal={handleOpenRemoveProductModal}
        />
        <Main />
        <Products />




        <NewProductModal 
          isOpen={isNewProductModalOpen}
          onRequestClose={handleCloseNewRegisterModal}
        />
        <RemoveProductModal 
          isOpen={isRemoveModalOpen}
          onRequestClose={handleCloseRemoveProductModal}
        />
        <GlobalStyle />
      </div>
    </ProductsProvider>
      
  )
}

export default App
