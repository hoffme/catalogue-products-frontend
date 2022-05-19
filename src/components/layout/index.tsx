import {ReactNode} from "react";

import style from './style.module.scss';

interface Props {
    children?: ReactNode
}

const MainLayout = (props: Props) => {
    return <main className={style.container}>
        { props.children }
    </main>
}

export default MainLayout;