import React from "react";
import {Layout} from "antd";
import Menu from "../menu";

const Sider : React.FC = () => {

    return (
        <Layout.Sider
            className={"admin-sider"}
            width={250}
        >
            <Menu />
        </Layout.Sider>
    )
}

export default React.memo(Sider)