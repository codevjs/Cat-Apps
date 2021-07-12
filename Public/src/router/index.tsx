import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Components from "components";
import pages from "./pages";
import Public from "./public";

const Router : React.FC = () => {
    return (
        <React.Suspense fallback={<Components.Loader spinning={true} tip={"Loading..."} />}>
            <BrowserRouter>
                <Switch>
                    {pages.map(page => (<Public exact={page.isExact} path={page.path} component={page.component} key={page.path} />))}
                </Switch>
            </BrowserRouter>
        </React.Suspense>
    )
};

export default Router;
