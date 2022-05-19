import {Product} from "../../../../services/products";

import FieldHeader from "../../../commons/fields/header";

import style from './style.module.scss';

interface Props {
    product: Product
    className?: string
}

const ProductInfo = (props: Props) => {
    return <div className={style.container}>
        {
            props.product.image.length > 0 &&
                <img className={style.img} src={props.product.image} alt={''} />
        }
        <div className={style.data}>
            <div className={style.field}>
                <FieldHeader className={style.header} title={'Name'} />
                <label className={style.value}>{props.product.name}</label>
            </div>
            <div className={style.row}>
                <div className={style.field}>
                    <FieldHeader className={style.header} title={'Stock'} />
                    <label className={style.value}>{props.product.stock}</label>
                </div>
                <div className={style.field}>
                    <FieldHeader className={style.header} title={'Precio'} />
                    <label className={style.value}>{props.product.price}</label>
                </div>
            </div>
            <div className={style.field}>
                <FieldHeader className={style.header} title={'Description'} />
                <label className={style.value}>{props.product.description}</label>
            </div>
        </div>
    </div>
}

export default ProductInfo;