import {ReactNode} from "react";

import useJoinClassNames from "../../../../hooks/className";

import style from './style.module.scss';

interface Props {
    title?: string
    className?: string
    children?: ReactNode
}

const FieldHeader = (props: Props) => {
    const containerClassName = useJoinClassNames(style.container, props.className);

    return <div className={containerClassName}>
        { props.title && <label className={style.title} children={props.title} /> }
        { props.children && <div className={style.content} children={props.children} /> }
    </div>
}

export default FieldHeader;