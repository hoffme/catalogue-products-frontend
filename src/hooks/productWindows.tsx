import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import useProductCreate from "./productCreate";
import useProductEdit from "./productEdit";
import useProductView from "./productView";

const useProductWindows = () => {
    const location = useLocation();

    const showProductCreateWindow = useProductCreate();
    const showProductEditWindow = useProductEdit();
    const showProductInfoWindow = useProductView();

    useEffect(() => {
        const route = location.pathname.split('/');
        if (route.length <= 1) return;

        if (route.length === 2 && route[1] === 'nuevo') showProductCreateWindow();
        if (route.length === 3 && route[1] === 'editar') showProductEditWindow(route[2]);
        if (route.length === 3 && route[1] === 'info') showProductInfoWindow(route[2]);

        return () => {}
    }, [
        location,
        showProductCreateWindow,
        showProductEditWindow,
        showProductInfoWindow
    ])
}

export default useProductWindows;