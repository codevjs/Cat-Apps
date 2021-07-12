import React from "react";
import { Layout } from 'antd';
import {DrawerProvider} from "contexts/drawer";
import Header from "../header";
import Drawer from "../drawer";
import Footer from "../footer";

const BaseLayout : React.FC = (props) => {

    return (
        <Layout className={"public-layout"}>
            <DrawerProvider>
                <Header />
                <Drawer />
            </DrawerProvider>
            <Layout.Content>
                {props.children}
            </Layout.Content>
            <Footer />
        </Layout>
    )
}

export default BaseLayout;