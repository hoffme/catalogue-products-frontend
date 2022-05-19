import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import ProductsService, {Product} from "../services/products";

import WindowContext from "../contexts/window";

import ProductInfo from "../components/customs/products/info";

const useProductView = () => {
    const navigate = useNavigate();

    const { setWindow } = useContext(WindowContext);

    const showWindow = (product: Product) => {
        const closeWindow = () => {
            navigate('/');
            setWindow();
        }

        setWindow({
            title: 'Info Producto',
            children: <ProductInfo product={product} />,
            onClose: closeWindow
        })
    }

    return (id: string) => { ProductsService.Find(id).then(showWindow) };
}

export default useProductView;