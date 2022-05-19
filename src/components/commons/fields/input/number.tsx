import {CSSProperties} from "react";

import Input from "./input";

interface Props {
    value: number
    onChange: (value: number) => void
    placeholder?: string
    disabled?: boolean
    className?: string
    style?: CSSProperties
    step?: number
    min?: number
    max?: number
}

const InputNumber = (props: Props) => {
    return <Input
        type={'number'}
        value={props.value}
        onChange={e => props.onChange(parseFloat(e.currentTarget.value))}
        placeholder={props.placeholder}
        disabled={props.disabled}
        className={props.className}
        style={props.style}
        step={props.step}
        max={props.max}
        min={props.min}
    />
}

export default InputNumber;