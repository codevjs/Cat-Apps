import React, {createContext, Dispatch, useState} from "react";

type ContextProps = [
    visible       : boolean,
    setVisible    : Dispatch<boolean>,
]

export const DrawerContext = createContext<ContextProps>({} as ContextProps);

export const DrawerProvider : React.FC = (props) => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <DrawerContext.Provider value={[visible, setVisible]}>
            {props.children}
        </DrawerContext.Provider>
    )
}
