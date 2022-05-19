import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import useJoinClassNames from "../../../../hooks/className";

import style from './style.module.scss';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const MainButton = (props: Props) => {
    const classNameContainer = useJoinClassNames(style.container, props.className);
    return <button { ...props } className={classNameContainer} />
}

const PrimaryButton = (props: Props) => {
    const classNameContainer = useJoinClassNames(style.primary, props.className);
    return <MainButton { ...props } className={classNameContainer} />
}

const SecondaryButton = (props: Props) => {
    const classNameContainer = useJoinClassNames(style.secondary, props.className);
    return <MainButton { ...props } className={classNameContainer} />
}

export default MainButton;
export {
    PrimaryButton,
    SecondaryButton
}