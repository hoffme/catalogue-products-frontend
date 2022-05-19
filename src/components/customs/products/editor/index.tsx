import {useState} from "react";

import {Product} from "../../../../services/products";

import FieldHeader from "../../../commons/fields/header";
import {InputNumber, InputText} from "../../../commons/fields/input";
import InputTextArea from "../../../commons/fields/input/area";
import {PrimaryButton, SecondaryButton} from "../../../commons/buttons/main";
import Loading from "../../../commons/loading";
import InputImage from "../../../commons/fields/image";

import style from './style.module.scss';

interface ProductEditableData {
    name: string
    description: string
    image: string
    price: number
    stock: number
}

interface Props {
    className?: string
    product?: Product
    onCancel: () => void
    onSave: (data: ProductEditableData) => Promise<void>
}

const ProductEditor = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState<ProductEditableData>(props.product || {
        name: '',
        description: '',
        image: '',
        price: 0,
        stock: 0
    });

    const handleSend = () => {
        setLoading(true);

        props.onSave(update)
            .finally(() => setLoading(false));
    }

    return <div className={style.container}>
        <div className={style.form}>
            <FieldHeader title={'Name'} />
            <InputText value={update.name} onChange={name => setUpdate({ ...update, name })} />
            <FieldHeader title={'Image'} />
            <InputImage value={update.image} onChange={image => setUpdate({ ...update, image })} />
            <FieldHeader title={'Description'} />
            <InputTextArea value={update.description} onChange={description => setUpdate({ ...update, description })} />
            <FieldHeader title={'Price'} />
            <InputNumber value={update.price} onChange={price => setUpdate({ ...update, price })} />
            <FieldHeader title={'Stock'} />
            <InputNumber value={update.stock} onChange={stock => setUpdate({ ...update, stock })} />
        </div>
        <div className={style.controls}>
            <PrimaryButton onClick={handleSend}>
                { loading ? <Loading light /> : 'Guardar' }
            </PrimaryButton>
            <SecondaryButton onClick={props.onCancel}>
                Cancelar
            </SecondaryButton>
        </div>
    </div>
}

export default ProductEditor;