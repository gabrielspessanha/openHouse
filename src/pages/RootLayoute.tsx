import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { NewProductModal } from "../components/NewProductModal";
import { GlobalStyle, MainContent } from "../styles/global";
import { RemoveProductModal } from "../components/RemoveProductModal";
import { useState } from "react";




export function RootLayoute(){
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
    return(
        <MainContent>
            <Header 
            onOpenNewProductModal={handleOpenNewRegisterModal}
            onOpenRemoveProductModal={handleOpenRemoveProductModal}
            />
            <Outlet />

            <NewProductModal 
                isOpen={isNewProductModalOpen}
                onRequestClose={handleCloseNewRegisterModal}
            />
            <RemoveProductModal 
                isOpen={isRemoveModalOpen}
                onRequestClose={handleCloseRemoveProductModal}
            />
            <GlobalStyle />
         </MainContent>
    )
    
}