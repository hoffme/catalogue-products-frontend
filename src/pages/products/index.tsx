import useProductSearch from "../../hooks/productsSearch";
import useProductWindows from "../../hooks/productWindows";

import NewProductButton from "../../components/customs/products/buttons/new";
import ProductsFilter from "../../components/customs/products/filter";
import Loading from "../../components/commons/loading";
import ProductsList from "../../components/customs/products/list";

import style from './style.module.scss';

const ProductsPage = () => {
    const [loading, results, filter, search] = useProductSearch();

    useProductWindows();

    return <div className={style.container}>
        <NewProductButton className={style.newProductButton} />
        <ProductsFilter filter={filter} onSearch={search} />
        {
            loading ?
                <Loading /> :
                <ProductsList products={results} />
        }
    </div>
}

export default ProductsPage;