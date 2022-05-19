import {useState} from "react";

import {Product} from "../services/products";

interface ProductEditableData {
    name: string
    description: string
    image: string
    price: number
    stock: number
}

const useProductEditor = (product?: Product) => {
    const [data, setData] = useState<ProductEditableData>(product || {
        name: '',
        description: '',
        image: '',
        price: 0,
        stock: 0
    });

    const setName = (name: string) => setData({ ...data, name });
    const setDescription = (description: string) => setData({ ...data, description });
    const setImage = (image: string) => setData({ ...data, image });
    const setPrice = (price: number) => setData({ ...data, price });
    const setStock = (stock: number) => setData({ ...data, stock });

    return { data, setName, setDescription, setImage, setPrice, setStock };
}

export default useProductEditor;
export type {
    ProductEditableData
}