import { RouterProvider } from "react-router-dom"
import { ProductsProvider } from "./contexts/useProducts"
import { router } from "./router"


function App() {

  return (
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
      
  )
}

export default App
