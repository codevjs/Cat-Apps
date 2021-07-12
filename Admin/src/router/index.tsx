import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Components from "components";
import {SessionProvider} from "contexts/sessions";
import pages from "./pages";
import Protected from "./protected";
import Public from "./public";

const Router : React.FC = () => {
    return (
        <SessionProvider>
            <React.Suspense fallback={<Components.Loader spinning={true} tip={"Loading..."} />}>
                <BrowserRouter>
                    <Switch>
                        {
                            pages.map(page => (
                                page.isPublic
                                    ? <Public key={page.path} path={page.path} component={page.component} />
                                    : <Protected key={page.path} path={page.path} component={page.component} role={page.role} />
                            ))
                        }
                    </Switch>
                </BrowserRouter>
            </React.Suspense>
        </SessionProvider>
    )
};

export default Router;
