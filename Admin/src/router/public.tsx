import React from 'react';
import {Route} from 'react-router-dom';

type Props = {
    component: React.FC<any>,
    path: string
}

const Public: React.FC<Props> = ({component: Component, path}) => {

    return (
        <Route
            path={path}
            render={props => <Component {...props} />}
        />
    )
}

export default Public