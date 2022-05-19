import {Product} from "../../../../services/products";

import useProductEditor, { ProductEditableData } from "../../../../hooks/productEditor";

import FieldHeader from "../../../commons/fields/header";
import {InputNumber, InputText} from "../../../commons/fields/input";
import InputTextArea from "../../../commons/fields/input/area";
import {PrimaryButton, SecondaryButton} from "../../../commons/buttons/main";
import InputImage from "../../../commons/fields/image";

import style from './style.module.scss';

interface Props {
    onCancel: () => void
    onSave: (data: ProductEditableData) => Promise<void>
    product?: Product
    className?: string
}

const ProductEditor = (props: Props) => {
    const {
        data,
        setName,
        setImage,
        setDescription,
        setPrice,
        setStock
    } = useProductEditor(props.product);

    const handleSend = async () => await props.onSave(data);

    return <div className={style.container}>
        <div className={style.form}>
            <FieldHeader title={'Name'} />
            <InputText value={data.name} onChange={setName} />
            <FieldHeader title={'Image'} />
            <InputImage value={data.image} onChange={setImage} />
            <FieldHeader title={'Description'} />
            <InputTextArea value={data.description} onChange={setDescription} />
            <FieldHeader title={'Price'} />
            <InputNumber value={data.price} onChange={setPrice} />
            <FieldHeader title={'Stock'} />
            <InputNumber value={data.stock} onChange={setStock} />
        </div>
        <div className={style.controls}>
            <PrimaryButton onClickAsync={handleSend} children={'Guardar'} />
            <SecondaryButton onClick={props.onCancel} children={'Cancelar'} />
        </div>
    </div>
}

export default ProductEditor;