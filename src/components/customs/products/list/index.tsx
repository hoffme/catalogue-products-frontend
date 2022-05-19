import {Product} from "../../../../services/products";

import useJoinClassNames from "../../../../hooks/className";

import ProductRow from "../row";

import style from './style.module.scss';

interface Props {
    className?: string
    products: Product[]
}

const ProductsList = (props: Props) => {
    const containerClassName = useJoinClassNames(style.container, props.className);

    return <div className={containerClassName}>
        {
            props.products.map((product, key) => (
                <ProductRow
                    className={style.row}
                    product={product}
                    key={key}
                />
            ))
        }
    </div>
}

export default ProductsList;