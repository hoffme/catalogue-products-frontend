import {useNavigate} from "react-router-dom";

import {PrimaryButton} from "../../../commons/buttons/main";

interface Props {
    className?: string
}

const NewProductButton = (props: Props) => {
    const navigate = useNavigate();

    const handler = () => navigate('/nuevo');

    return <PrimaryButton onClick={handler} className={props.className}>
        Nuevo Producto
    </PrimaryButton>
}

export default NewProductButton;