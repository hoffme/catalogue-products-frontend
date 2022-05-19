import {useNavigate} from "react-router-dom";

import {Product} from "../../../../services/products";

import {PrimaryButton} from "../../../commons/buttons/main";

interface Props {
    product: Product
    className?: string
}

const ModifyProductButton = (props: Props) => {
    const navigate = useNavigate();

    const handler = () => navigate(`/editar/${props.product.id}`);

    return <PrimaryButton onClick={handler} className={props.className}>
        Modificar
    </PrimaryButton>
}

export default ModifyProductButton;