import {useCallback, useEffect, useState} from "react";

import ProductsService, {Product, ProductFilter} from "../services/products";

const useProductSearch = (): [boolean, Product[], ProductFilter, (filter: ProductFilter) => void] => {
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

    useEffect(() => { search() }, [search, filter])

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

    return [loading, results, filter, setFilter];
}

export default useProductSearch;