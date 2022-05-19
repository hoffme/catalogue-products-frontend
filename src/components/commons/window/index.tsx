import {ReactNode} from "react";

import style from './style.module.scss';

interface Props {
    title?: string
    children?: ReactNode
    onClose?: () => void
}

const Window = (props: Props) => {
    return <div className={style.container}>
        <div className={style.window}>
            <header className={style.header}>
                {
                    props.onClose &&
                        <button
                            onClick={props.onClose}
                            className={style.closeButton}
                            children={'x'}
                        />
                }
                {
                    props.title &&
                        <h3 className={style.title} children={props.title} />
                }
            </header>
            <main className={style.content}>
                { props.children }
            </main>
        </div>
    </div>
}

export default Window;