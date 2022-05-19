import {useNavigate} from "react-router-dom";
import {useContext} from "react";

import ProductsService, {Product} from "../services/products";

import WindowContext from "../contexts/window";

import ProductEditor from "../components/customs/products/editor";

const useProductEdit = () => {
    const navigate = useNavigate();

    const { setWindow } = useContext(WindowContext);

    const showWindow = (product: Product) => {
        const closeWindow = () => {
            navigate('/');
            setWindow();
        }

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
    }

    return (id: string) => {
        ProductsService.Find(id)
            .then(showWindow)
            .catch(console.error)
    };
}

export default useProductEdit;