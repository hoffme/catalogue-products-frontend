import {CSSProperties} from "react";

import Input from "./input";

interface Props {
    value: Date
    onChange: (value: Date) => void
    disabled?: boolean
    className?: string
    style?: CSSProperties
    min?: Date
    max?: Date
}

const dateToString = (d: Date) => [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');

const stringToDate = (value: string, date: Date) => {
    const [hours, minutes, seconds] = value.split('-').map(n => parseFloat(n));
    date.setHours(hours, minutes, seconds);
    return date;
}

const InputDate = (props: Props) => {
    return <Input
        type={'date'}
        value={dateToString(props.value)}
        onChange={(e) => {
            props.onChange(stringToDate(e.currentTarget.value, new Date(props.value)))
        }}
        disabled={props.disabled}
        className={props.className}
        style={props.style}
        min={props.min ? dateToString(props.min) : undefined}
        max={props.max ? dateToString(props.max) : undefined}
    />
}

export default InputDate;