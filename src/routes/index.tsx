import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "../components/layout";

import ProductsPage from "../pages/products";

const AppRoutes = () => {
    return <BrowserRouter>
        <Layout>
            <Routes>
                <Route path={'/nuevo'} element={<ProductsPage />} />
                <Route path={'/editar/:productId'} element={<ProductsPage />} />
                <Route path={'/info/:productId'} element={<ProductsPage />} />
                <Route path={'/'} element={<ProductsPage />} />
            </Routes>
        </Layout>
    </BrowserRouter>
}

export default AppRoutes;