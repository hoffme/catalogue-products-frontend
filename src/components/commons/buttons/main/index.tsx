import {ButtonHTMLAttributes, DetailedHTMLProps, useState, MouseEvent} from "react";

import useJoinClassNames from "../../../../hooks/className";

import Loading from "../../loading";

import style from './style.module.scss';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loadingLight?: boolean
    onClickAsync?: (e: MouseEvent<HTMLButtonElement>) => Promise<void>
}

const MainButton = (props: Props) => {
    const [loading, setLoading] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(e);

        if (!props.onClickAsync) return;

        setLoading(true);
        props.onClickAsync(e)
            .catch(console.error)
            .finally(() => setLoading(false));
    }

    const classNameContainer = useJoinClassNames(style.container, props.className);

    const buttonProps: any = { ...props };
    delete buttonProps.onClickAsync;
    delete buttonProps.loadingLight;

    return <button
        { ...buttonProps }
        className={classNameContainer}
        onClick={handleClick}
        children={loading ? <Loading light={props.loadingLight} /> : props.children}
    />
}

const PrimaryButton = (props: Props) => {
    const classNameContainer = useJoinClassNames(style.primary, props.className);
    return <MainButton { ...props } className={classNameContainer} loadingLight={true} />
}

const SecondaryButton = (props: Props) => {
    const classNameContainer = useJoinClassNames(style.secondary, props.className);
    return <MainButton { ...props } className={classNameContainer} loadingLight={false} />
}

export default MainButton;
export {
    PrimaryButton,
    SecondaryButton
}