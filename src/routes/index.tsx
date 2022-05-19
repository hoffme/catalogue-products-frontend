import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "../components/layout";

import NotFoundPage from "../pages/notFound";
import ProductsPage from "../pages/products";

const AppRoutes = () => {
    return <BrowserRouter>
        <Layout>
            <Routes>
                <Route path={'/'}>
                    <Route index element={<ProductsPage />} />
                </Route>
                <Route path={'*'} element={<NotFoundPage />} />
            </Routes>
        </Layout>
    </BrowserRouter>
}

export default AppRoutes;