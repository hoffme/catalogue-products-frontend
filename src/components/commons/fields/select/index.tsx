import {DetailedHTMLProps, SelectHTMLAttributes} from "react";

import useJoinClassNames from "../../../../hooks/className";

import style from './style.module.scss';

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

const Select = (props: Props) => {
    const containerClassName = useJoinClassNames(style.container, props.className);
    return <select {...props} className={containerClassName} />
}

export default Select;