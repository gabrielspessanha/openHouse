import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
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
            path: '/register',
            element: <RegisterPage/>
        },{
            path: '/products',
            element: <ProductsPage/>
        }]
    }
])

