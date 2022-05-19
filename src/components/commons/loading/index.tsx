import { ReactComponent as Icon } from "../../../assets/icons/loading.svg";

import useJoinClassNames from "../../../hooks/className";

import style from './style.module.scss';

interface LoadingProps {
    light?: boolean
}

const Loading = (props: LoadingProps) => {
    const containerClassName = useJoinClassNames(style.container, props.light ? style.light : null);

    return <div className={containerClassName}>
        <Icon />
    </div>
}

export default Loading;
