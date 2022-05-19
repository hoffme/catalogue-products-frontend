import {useState} from "react";

import {ProductFilter} from "../services/products";

const useProductFilter = () => {
    const [data, setData] = useState<ProductFilter>({});

    const setQuery = (query?: string) => setData({ ...data, query });
    const setOrderAsc = (orderAsc?: boolean) => setData({ ...data, orderAsc });
    const setOrderBy = (orderBy?: "name" | "price" | "stock" | "createdAt" | "updatedAt") => setData({ ...data, orderBy });
    const setId = (id: string[]) => setData({ ...data, id });
    const setStockMax = (stockMax: number) => setData({ ...data, stockMax });
    const setStockMin = (stockMin: number) => setData({ ...data, stockMin });
    const setPriceMax = (priceMax: number) => setData({ ...data, priceMax });
    const setPriceMin = (priceMin: number) => setData({ ...data, priceMin });
    const setOffset = (offset: number) => setData({ ...data, offset });
    const setLimit = (limit: number) => setData({ ...data, limit });

    return {
        data,
        setQuery,
        setOrderAsc,
        setOrderBy,
        setId,
        setStockMax,
        setStockMin,
        setPriceMax,
        setPriceMin,
        setOffset,
        setLimit
    };
}

export default useProductFilter;