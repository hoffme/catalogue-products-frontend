import {createContext, ReactNode, useState} from "react";

import Window from '../components/commons/window';

interface WindowData {
    title?: string
    children?: ReactNode
    onClose?: () => void
}

interface InterfaceWidowContext {
    window?: WindowData
    setWindow: (data?: WindowData) => void
}

const WindowContext = createContext<InterfaceWidowContext>({
    setWindow: () => {},
});

interface Props {
    children?: ReactNode
}

const WindowProvider = (props: Props) => {
    const [window, setWindow] = useState<WindowData>();

    return <WindowContext.Provider value={{
        window,
        setWindow
    }}>
        { props.children }
        { window && <Window {...window} /> }
    </WindowContext.Provider>
}

export default WindowContext;
export { WindowProvider }
export type { WindowData }