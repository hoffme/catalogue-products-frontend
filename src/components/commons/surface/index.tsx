import {ReactNode} from "react";

import useJoinClassNames from "../../../hooks/className";

import style from './style.module.scss';

interface Props {
    highlight?: boolean
    className?: string
    children?: ReactNode
}

const Surface = (props: Props) => {
    const containerClassName = useJoinClassNames(
        style.container,
        props.highlight ? style.highlight : null,
        props.className
    );

    return <div className={containerClassName} children={props.children} />
}

export default Surface;