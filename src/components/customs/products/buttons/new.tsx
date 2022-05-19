import {useContext} from "react";

import ProductsService from "../../../../services/products";

import {PrimaryButton} from "../../../commons/buttons/main";
import WindowContext from "../../../../contexts/window";

import ProductEditor from "../editor";

interface Props {
    className?: string
}

const NewProductButton = (props: Props) => {
    const { setWindow } = useContext(WindowContext);

    const handlerNewProduct = () => {
        setWindow({
            title: 'Crear Producto',
            children: <ProductEditor
                onCancel={() => setWindow(undefined)}
                onSave={async (data) => {
                    await ProductsService.Create(data);
                    setWindow(undefined);
                }}
            />,
            onClose: () => setWindow()
        })
    }

    return <PrimaryButton onClick={handlerNewProduct} className={props.className}>
        Nuevo Producto
    </PrimaryButton>
}

export default NewProductButton;