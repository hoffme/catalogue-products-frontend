import {useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";

import ProductsService from "../services/products";

import WindowContext from "../contexts/window";

import ProductInfo from "../components/customs/products/info";

const useProductView = () => {
    const navigate = useNavigate();

    const { setWindow } = useContext(WindowContext);

    return useCallback((id: string) => {
        const closeWindow = () => {
            navigate('/');
            setWindow();
        }

        ProductsService.Find(id)
            .then(product => {
                setWindow({
                    title: 'Info Producto',
                    children: <ProductInfo product={product} />,
                    onClose: closeWindow
                })
            })
            .catch(console.error)
    }, [navigate, setWindow]);
}

export default useProductView;