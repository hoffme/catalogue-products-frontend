import {useNavigate} from "react-router-dom";
import {useCallback, useContext} from "react";

import ProductsService from "../services/products";

import WindowContext from "../contexts/window";

import ProductEditor from "../components/customs/products/editor";

const useProductEdit = () => {
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
                    title: 'Modificar Producto',
                    children: <ProductEditor
                        product={product}
                        onCancel={closeWindow}
                        onSave={async (data) => {
                            await ProductsService.Update(product.id, data);
                            closeWindow();
                        }}
                    />,
                    onClose: closeWindow
                })
            })
            .catch(console.error)
    }, [navigate, setWindow])
}

export default useProductEdit;