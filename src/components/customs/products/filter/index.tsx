import {FormEvent, useState} from "react";

import {ProductFilter} from "../../../../services/products";

import useJoinClassNames from "../../../../hooks/className";

import Surface from "../../../commons/surface";
import {PrimaryButton, SecondaryButton} from "../../../commons/buttons/main";
import {InputNumber, InputText} from "../../../commons/fields/input";
import FieldHeader from "../../../commons/fields/header";

import style from './style.module.scss';
import Select from "../../../commons/fields/select";

interface Props {
    className?: string
    filter: ProductFilter
    onSearch: (filter: ProductFilter) => void
}

const ProductsFilter = (props: Props) => {
    const [extended, setExtended] = useState(false);
    const [filter, setFilter] = useState<ProductFilter>(props.filter);

    const containerClassName = useJoinClassNames(style.container, props.className);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.onSearch(filter);
    }

    return <Surface className={containerClassName}>
        <div className={style.header}>
            <div className={style.query}>
                <FieldHeader title={'Busqueda por texto'} />
                <InputText
                    placeholder={'Buscar'}
                    value={filter.query || ''}
                    onChange={query => setFilter({ ...filter, query })}
                />
            </div>
            <SecondaryButton onClick={e => {
                e.preventDefault();
                setExtended(!extended);
            }}>
                { extended ? 'Reducir' : 'Extender' }
            </SecondaryButton>
        </div>
        {
            extended && <div className={style.filters}>
                <div className={style.field}>
                    <FieldHeader title={'Stock'} />
                    <InputNumber
                        value={filter.stockMin || 0}
                        onChange={stockMin => setFilter({ ...filter, stockMin })}
                    />
                    <InputNumber
                        value={filter.stockMax || 0}
                        onChange={stockMax => setFilter({ ...filter, stockMax })}
                    />
                </div>
                <div className={style.field}>
                    <FieldHeader title={'Precio'} />
                    <InputNumber
                        value={filter.priceMin || 0}
                        onChange={priceMin => setFilter({ ...filter, priceMin })}
                    />
                    <InputNumber
                        value={filter.priceMax || 0}
                        onChange={priceMax => setFilter({ ...filter, priceMax })}
                    />
                </div>
                <div className={style.field}>
                    <FieldHeader title={'Orden'} />
                    <Select
                        value={filter.orderBy}
                        onChange={e => setFilter({ ...filter, orderBy: e.currentTarget.value as any })}
                    >
                        <option value={'name'}>Nombre</option>
                        <option value={'price'}>Precio</option>
                        <option value={'stock'}>Stock</option>
                        <option value={'createdAt'}>Fecha de Creacion</option>
                        <option value={'updatedAt'}>Fecha de Actualizacion</option>
                    </Select>
                    <Select
                        value={filter.orderAsc ? '1' : '2'}
                        onChange={e => setFilter({ ...filter, orderAsc: e.currentTarget.value === '1' })}
                    >
                        <option value={'1'}>Ascendente</option>
                        <option value={'2'}>Descendente</option>
                    </Select>
                </div>
            </div>
        }
        <SecondaryButton className={style.button}>
            Buscar
        </SecondaryButton>
    </Surface>
}

export default ProductsFilter;