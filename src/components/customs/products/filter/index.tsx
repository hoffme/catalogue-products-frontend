import {useState} from "react";

import {ProductFilter} from "../../../../services/products";

import useJoinClassNames from "../../../../hooks/className";
import useProductFilter from "../../../../hooks/productsFilter";

import Surface from "../../../commons/surface";
import {SecondaryButton} from "../../../commons/buttons/main";
import {InputNumber, InputText} from "../../../commons/fields/input";
import FieldHeader from "../../../commons/fields/header";
import Select from "../../../commons/fields/select";

import style from './style.module.scss';

interface Props {
    className?: string
    filter: ProductFilter
    onSearch: (filter: ProductFilter) => void
}

const ProductsFilter = (props: Props) => {
    const [extended, setExtended] = useState(false);
    const {
        data,
        setQuery,
        setOrderAsc,
        setOrderBy,
        setStockMax,
        setStockMin,
        setPriceMax,
        setPriceMin,
    } = useProductFilter();

    const containerClassName = useJoinClassNames(style.container, props.className);

    const submit = () => props.onSearch(data);

    return <Surface className={containerClassName}>
        <div className={style.header}>
            <div className={style.query}>
                <FieldHeader title={'Busqueda por texto'} />
                <InputText
                    placeholder={'Buscar'}
                    value={data.query || ''}
                    onChange={setQuery}
                />
            </div>
            <SecondaryButton onClick={() => setExtended(!extended)}>
                { extended ? 'Reducir' : 'Extender' }
            </SecondaryButton>
        </div>
        {
            extended && <div className={style.filters}>
                <div className={style.field}>
                    <FieldHeader title={'Stock'} />
                    <InputNumber
                        value={data.stockMin !== undefined ? data.stockMin : NaN}
                        onChange={setStockMin}
                        placeholder={'Min'}
                    />
                    <InputNumber
                        value={data.stockMax !== undefined ? data.stockMax : NaN}
                        onChange={setStockMax}
                        placeholder={'Max'}
                    />
                </div>
                <div className={style.field}>
                    <FieldHeader title={'Precio'} />
                    <InputNumber
                        value={data.priceMin !== undefined ? data.priceMin : NaN}
                        onChange={setPriceMin}
                        placeholder={'Min'}
                    />
                    <InputNumber
                        value={data.priceMax !== undefined ? data.priceMax : NaN}
                        onChange={setPriceMax}
                        placeholder={'Max'}
                    />
                </div>
                <div className={style.field}>
                    <FieldHeader title={'Orden'} />
                    <Select
                        value={data.orderBy}
                        onChange={e => setOrderBy(e.currentTarget.value as any)}
                    >
                        <option value={'name'}>Nombre</option>
                        <option value={'price'}>Precio</option>
                        <option value={'stock'}>Stock</option>
                        <option value={'createdAt'}>Fecha de Creacion</option>
                        <option value={'updatedAt'}>Fecha de Actualizacion</option>
                    </Select>
                    <Select
                        value={data.orderAsc ? '1' : '2'}
                        onChange={e => setOrderAsc(e.currentTarget.value === '1' )}
                    >
                        <option value={'1'}>Ascendente</option>
                        <option value={'2'}>Descendente</option>
                    </Select>
                </div>
            </div>
        }
        <SecondaryButton className={style.button} onClick={submit}>
            Buscar
        </SecondaryButton>
    </Surface>
}

export default ProductsFilter;