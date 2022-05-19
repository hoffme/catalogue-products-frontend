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

const pad = (number: number) => number < 10 ? `0${number}` : number;

const dateToString = (date: Date) => [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join('-');

const stringToDate = (value: string) => {
    const [year, month, day] = value.split('-').map(n => parseFloat(n))
    return new Date(year, month - 1, day);
}

const InputTime = (props: Props) => {
    return <Input
        type={'time'}
        value={dateToString(props.value)}
        onChange={(e) => {
            props.onChange(stringToDate(e.currentTarget.value))
        }}
        disabled={props.disabled}
        className={props.className}
        style={props.style}
        min={props.min ? dateToString(props.min) : undefined}
        max={props.max ? dateToString(props.max) : undefined}
    />
}

export default InputTime;