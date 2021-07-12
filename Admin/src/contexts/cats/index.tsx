import React, {createContext, Dispatch, useEffect, useState} from "react";

type ContextProps = [
    visible       : boolean,
    setVisible    : Dispatch<boolean>,
    search        : string,
    setSearch     : Dispatch<string>,
]

export const CatsContext = createContext<ContextProps>({} as ContextProps);

export const CatsProvider : React.FC = (props) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [search, setSearch]   = useState<string>("");

    useEffect(() => {

        setSearch("");
    }, []);

    return (
        <CatsContext.Provider value={[visible, setVisible, search, setSearch]}>
            {props.children}
        </CatsContext.Provider>
    )
}
