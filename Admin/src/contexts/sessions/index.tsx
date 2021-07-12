import React, {createContext, useEffect, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";

type ContextProps = [
    authenticated : boolean,
    isLoading     : boolean,
    user          : any | null
]

export const SessionContext = createContext<ContextProps>([true, false, null]);

export const SessionProvider : React.FC = (props) => {

    const [authenticated, setAuthenticated] = useState<boolean>(true);
    const [user, setUser]                   = useState<object|null>(null);
    const [isLoading, setLoading]           = useState<boolean>(true);

    useEffect(() => {

        setLoading(true);

        firebase.auth()
            .onAuthStateChanged( async (user ) => {
            if (user !== null) {

                const idTokenResult =  await user.getIdTokenResult();

                setUser({...user, claims : idTokenResult.claims});
                setAuthenticated(true);
                setLoading(false);

            } else {

                setAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        })
    }, []);

    return (
        <SessionContext.Provider value={[authenticated, isLoading, user]}>
            {props.children}
        </SessionContext.Provider>
    )
}
