import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {SessionContext} from "contexts/sessions";
import Components from "components";

type Props = {
    component : React.FC<any>,
    path      : string,
    role      : string[]
}

const Protected : React.FC<Props> = ({ component : Component , path, role  }) => {

    const [authenticated, isLoading] = useContext(SessionContext);

    return (
        <Route
            path={path}
            render={props => {
                return isLoading
                    ? <Components.Loader tip={"Menghubungkan Ke Server ..."} spinning={isLoading} />
                    : authenticated && !isLoading
                        ? <Component {...props} />
                        : <Redirect to={"/"} />
            }}
        />
    )
}

export default Protected