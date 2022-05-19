import { Link } from "react-router-dom";

import {Product} from "../../../../services/products";

import useJoinClassNames from "../../../../hooks/className";

import Surface from "../../../commons/surface";

import DeleteProductButton from "../buttons/delete";
import ModifyProductButton from "../buttons/modify";

import style from './style.module.scss';

interface Props {
    className?: string
    product: Product
}

const ProductRow = (props: Props) => {
    const containerClassName = useJoinClassNames(style.container, props.className);

    return <Surface className={containerClassName}>
        <Link to={`info/${props.product.id}`}>
            {
                props.product.image && props.product.image.length > 0 &&
                <img src={props.product.image} alt={''} />
            }
            <div className={style.meta}>
                <label className={style.title}>
                    {props.product.name} <label className={style.stock}>({props.product.stock} en stock)</label>
                </label>
                <label className={style.price}>$ {props.product.price}</label>
                <label className={style.description}>{props.product.description}</label>
            </div>
        </Link>
        <div className={style.actions}>
            <ModifyProductButton product={props.product} />
            <DeleteProductButton product={props.product} />
        </div>
    </Surface>
}

export default ProductRow;