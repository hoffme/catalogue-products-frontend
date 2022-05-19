import {DetailedHTMLProps, InputHTMLAttributes} from "react";

import useJoinClassNames from "../../../../hooks/className";

import style from './style.module.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input = (props: Props) => {
    const containerClassName = useJoinClassNames(style.container, props.className);
    return <input {...props} className={containerClassName} />
}

export default Input;