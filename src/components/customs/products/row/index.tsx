import {useContext, useState} from "react";

import ProductsService, {Product} from "../../../../services/products";
import Request from '../../../../services/request';

import useJoinClassNames from "../../../../hooks/className";

import Surface from "../../../commons/surface";
import {PrimaryButton, SecondaryButton} from "../../../commons/buttons/main";
import Loading from "../../../commons/loading";
import WindowContext from "../../../../contexts/window";

import ProductEditor from "../editor";

import style from './style.module.scss';

interface Props {
    className?: string
    product: Product
}

const ProductRow = (props: Props) => {
    const { setWindow } = useContext(WindowContext);

    const [deleting, setDeleting] = useState(false);

    const handleDelete = () => {
        setDeleting(true);

        ProductsService.Delete(props.product.id)
            .catch(console.error)
            .finally(() => setDeleting(false))
    }

    const handlerEditProduct = () => {
        setWindow({
            title: 'Modificar Producto',
            children: <ProductEditor
                product={props.product}
                onCancel={() => setWindow(undefined)}
                onSave={async (data) => {
                    await ProductsService.Update(props.product.id, data);
                    setWindow(undefined);
                }}
            />,
            onClose: () => setWindow()
        })
    }

    const containerClassName = useJoinClassNames(style.container, props.className);

    return <Surface className={containerClassName}>
        <img src={Request.host + props.product.image} alt={''} />
        <div className={style.meta}>
            <label className={style.title}>
                {props.product.name} <label className={style.stock}>({props.product.stock} en stock)</label>
            </label>
            <label className={style.price}>$ {props.product.price}</label>
            <label className={style.description}>{props.product.description}</label>
        </div>
        <div className={style.actions}>
            <PrimaryButton onClick={handlerEditProduct}>
                Modificar
            </PrimaryButton>
            <SecondaryButton onClick={handleDelete}>
                { deleting ? <Loading /> : 'Borrar' }
            </SecondaryButton>
        </div>
    </Surface>
}

export default ProductRow;