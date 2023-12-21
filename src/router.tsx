import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { RootLayoute } from "./pages/RootLayoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayoute/>,
        children: [{
            index: true,
            element: <HomePage />
        },{
            path: '/products',
            element: <ProductsPage/>
        }]
    }
])

