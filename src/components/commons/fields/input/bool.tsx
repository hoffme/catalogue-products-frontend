import {CSSProperties} from "react";

import Input from "./input";

interface Props {
    value: boolean
    onChange: (value: boolean) => void
    placeholder?: string
    disabled?: boolean
    className?: string
    style?: CSSProperties
}

const InputBool = (props: Props) => {
    return <Input
        type={'checkbox'}
        checked={props.value}
        onChange={e => props.onChange(e.currentTarget.checked)}
        placeholder={props.placeholder}
        disabled={props.disabled}
        className={props.className}
        style={props.style}
    />
}

export default InputBool;