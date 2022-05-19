import {useNavigate} from "react-router-dom";
import {useCallback, useContext} from "react";

import ProductsService from "../services/products";

import WindowContext from "../contexts/window";

import ProductEditor from "../components/customs/products/editor";

const useProductCreate = () => {
    const navigate = useNavigate();

    const { setWindow } = useContext(WindowContext);

    return useCallback(() => {
        const closeWindow = () => {
            navigate('/');
            setWindow();
        }

        setWindow({
            title: 'Nuevo Producto',
            children: <ProductEditor
                onCancel={closeWindow}
                onSave={async (data) => {
                    await ProductsService.Create(data);
                    closeWindow();
                }}
            />,
            onClose: closeWindow
        })
    }, [navigate, setWindow]);
}

export default useProductCreate;