import {CSSProperties} from "react";

import Input from "./input";

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

const InputPassword = (props: Props) => {
    return <Input
        type={'password'}
        value={props.value}
        onChange={e => props.onChange(e.currentTarget.value)}
        placeholder={props.placeholder}
        disabled={props.disabled}
        minLength={props.minLength}
        maxLength={props.maxLength}
        className={props.className}
        style={props.style}
    />
}

export default InputPassword;