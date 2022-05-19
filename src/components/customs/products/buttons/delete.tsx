import ProductsService, {Product} from "../../../../services/products";

import {SecondaryButton} from "../../../commons/buttons/main";

interface Props {
    product: Product
    className?: string
}

const DeleteProductButton = (props: Props) => {
    const handleDelete = async () => {
        await ProductsService.Delete(props.product.id);
    }

    return <SecondaryButton onClickAsync={handleDelete} className={props.className}>
        Borrar
    </SecondaryButton>
}

export default DeleteProductButton;