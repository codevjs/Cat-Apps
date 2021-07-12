import React from "react";
import {Layout} from 'antd';
import {DrawerProvider} from "contexts/drawer";
import Trigger from "../trigger";
import Drawers from "../drawer";
import Sider from "../sider";

const BaseLayout : React.FC = (props) => {
    return (
        <Layout className={"admin-layout"}>
           <DrawerProvider>
               <Trigger />
               <Drawers />
               <Sider/>
               <Layout>
                   {/*<Header/>*/}
                   <Layout.Content className={"admin-content"}>
                       {props.children}
                   </Layout.Content>
               </Layout>
           </DrawerProvider>
        </Layout>
    )
}

export default BaseLayout;