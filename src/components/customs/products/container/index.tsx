import {useCallback, useEffect, useState} from "react";

import ProductsService, {Product, ProductFilter} from "../../../../services/products";

import useJoinClassNames from "../../../../hooks/className";

import ProductsFilter from "../filter";
import ProductsList from "../list";
import NewProductButton from "../buttons/new";
import Loading from "../../../commons/loading";

import style from './style.module.scss';

interface Props {
    className?: string
}

const ProductsContainer = (props: Props) => {
    const [filter, setFilter] = useState<ProductFilter>({});
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Product[]>([]);

    const search = useCallback(() => {
        setLoading(true);

        ProductsService.Search(filter)
            .then(setResults)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [filter])

    useEffect(() => { search() }, [filter])

    useEffect(() => {
        const cb = () => { search() }

        const createSub = ProductsService.events.create.subscribe(cb);
        const updateSub = ProductsService.events.update.subscribe(cb);
        const removeSub = ProductsService.events.remove.subscribe(cb);

        return () => {
            createSub.unsubscribe();
            updateSub.unsubscribe();
            removeSub.unsubscribe();
        }
    }, [search])

    const containerClassName = useJoinClassNames(style.container, props.className);

    return <div className={containerClassName}>
        <NewProductButton className={style.newProductButton} />
        <ProductsFilter filter={filter} onSearch={setFilter} />
        {
            loading ? <Loading /> : <ProductsList products={results} />
        }
    </div>
}

export default ProductsContainer;