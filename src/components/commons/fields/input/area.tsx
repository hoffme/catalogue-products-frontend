import {CSSProperties} from "react";

import useJoinClassNames from "../../../../hooks/className";

import style from "./style.module.scss";

interface Props {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    disabled?: boolean
    minLength?: number
    maxLength?: number
    className?: string
    style?: CSSProperties
}

const InputTextArea = (props: Props) => {
    const containerClassName = useJoinClassNames(style.container, props.className);
    return <textarea
        value={props.value}
        onChange={e => props.onChange(e.currentTarget.value)}
        placeholder={props.placeholder}
        disabled={props.disabled}
        minLength={props.minLength}
        maxLength={props.maxLength}
        className={containerClassName}
        style={props.style}
    />
}

export default InputTextArea;
